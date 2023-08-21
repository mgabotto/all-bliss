import BlogPreview from "./blogPreview";

export default function BlogSection() {
  return (
    <div className="my-5 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-2">
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  );
}
