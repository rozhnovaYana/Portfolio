import fs from "fs";
import path from "path";
import matter from "gray-matter";
export type ContentItem = {
  [key: string]: any;
  content: string;
  slug: string;
};
const rootDir = path.join(process.cwd(), "src", "data");

export function getContent(file: string): ContentItem[] {
  const dirName = path.join(rootDir, file);
  const fileNames = fs.readdirSync(dirName);
  return fileNames.map((fileName: string): ContentItem => {
    const filePath = path.join(dirName, fileName);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter(rawFile);
    return { ...data, content, slug };
  });
}
