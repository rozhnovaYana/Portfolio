import { request } from "@/helpers/requests";
export const getPortfolios = async () => {
  const res = await request("http://localhost:3000/api/portfolios", "GET");
  return res.data || [];
};
