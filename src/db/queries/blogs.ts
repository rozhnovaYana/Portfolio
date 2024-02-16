import { request } from "@/helpers/requests";

export const getBlogs = async () => {
  const res = await request("http://localshost:3000/api/blogs", "GET");
  return res.data || [];
};
