import fs from "fs";
import path from "path";
import matter from "gray-matter";
const rootDir = path.join(process.cwd(), "src", "data");

export function getContent(file: string) {
  const dirName = path.join(rootDir, file);
  const fileNames = fs.readdirSync(dirName);
  return fileNames.map((fileName: string) => {
    const filePath = path.join(dirName, fileName);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(rawFile);
    return { ...data, content };
  });
}
