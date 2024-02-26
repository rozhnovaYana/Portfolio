import { getContent, getContentBySlug } from "@/helpers/markdown-reader";

export const getPortfolios = () => getContent("portfolios");

export const getPortfolioBySlug = (slug: string) =>
  getContentBySlug(`portfolios/${slug}.md`);
