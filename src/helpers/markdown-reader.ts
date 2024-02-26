import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { remark } from "remark";
import { VFile } from "vfile";
export type ContentItem = {
  [key: string]: any;
  content: string | VFile;
  slug: string;
};
const rootDir = path.join(process.cwd(), "src", "data");
const parseMarkdown = async (content: string) => {
  const file = await remark().use(remarkHtml).use(remarkGfm).process(content);
  return file.toString();
};
export const getContent = (file: string): ContentItem[] => {
  const dirName = path.join(rootDir, file);
  const fileNames = fs.readdirSync(dirName);
  return fileNames.map((fileName: string): ContentItem => {
    const filePath = path.join(dirName, fileName);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter(rawFile);
    return { ...data, content, slug };
  });
};
export const getContentBySlug = async (
  fileName: string
): Promise<ContentItem> => {
  const filePath = path.join(rootDir, fileName);
  const rawFile = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(rawFile);
  const parsedContent = await parseMarkdown(content);
  return { ...data, content: parsedContent, slug: fileName };
};
