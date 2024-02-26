import { getBlogBySlug, getBlogs } from "@/db/queries/blogs";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  console.log(blog);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
export const generateStaticParams = () => {
  const blogs = getBlogs();
  return blogs.map((p) => ({
    slug: p.slug,
  }));
};
