import portfolios from "@/data/portfolios.json";
import blogs from "@/data/blogs.json";
import { Card } from "@/components/cards/card";

export default function Home() {
  return (
    <div>
      <Card title="Portfolios" items={portfolios} />
      <hr />
      <Card title="Blogs" items={blogs} />
    </div>
  );
}
