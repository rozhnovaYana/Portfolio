import { getPortfolioBySlug, getPortfolios } from "@/db/queries/portfolios";

export default async function PortfoliosDetails({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await getPortfolioBySlug(params.slug);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
    </div>
  );
}
export const generateStaticParams = () => {
  const portfolios = getPortfolios();
  return portfolios.map((p) => ({
    slug: p.slug,
  }));
};
