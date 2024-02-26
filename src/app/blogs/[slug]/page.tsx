export default function BlogDetails({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
