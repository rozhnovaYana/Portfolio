import { Card } from "@/components/cards/card";
import { getBlogs } from "@/db/queries/blogs";
import { getPortfolios } from "@/db/queries/portfolios";

export default async function Home() {
  const blogs = await getBlogs();
  const portfolios = await getPortfolios();

  return (
    <div>
      <Card title="Portfolios" items={portfolios} />
      <hr />
      <Card title="Blogs" items={blogs} />
    </div>
  );
}
