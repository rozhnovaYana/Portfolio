import { request } from "@/helpers/requests";

export const getBlogs = async () => {
  const res = await request("http://localhost:3001/api/blogs", "GET");
  return res.data || [];
};
