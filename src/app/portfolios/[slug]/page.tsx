export default function PortfoliosDetails({
  params,
}: {
  params: { slug: string };
}) {
  return <div>{params.slug}</div>;
}
