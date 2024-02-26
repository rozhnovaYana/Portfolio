import { getContent } from "@/helpers/markdown-reader";
export const getPortfolios = () => {
  return getContent("portfolios");
};
