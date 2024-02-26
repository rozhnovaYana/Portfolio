import { getContent, getContentBySlug } from "@/helpers/markdown-reader";

export const getBlogs = () => getContent("blogs");

export const getBlogBySlug = (slug: string) =>
  getContentBySlug(`blogs/${slug}.md`);
