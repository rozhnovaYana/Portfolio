import { CardsList } from "@/components/cards/cardsList";
import { getBlogs } from "@/db/queries/blogs";
import { getPortfolios } from "@/db/queries/portfolios";

export default async function Home() {
  return (
    <div>
      <CardsList title="Portfolios" fetchData={getPortfolios} />
      <hr />
      <CardsList title="Blogs" fetchData={getBlogs} />
    </div>
  );
}
