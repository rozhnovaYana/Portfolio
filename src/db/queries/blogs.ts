import { getContent } from "@/helpers/markdown-reader";

export const getBlogs = () => {
  return getContent("blogs");
};
