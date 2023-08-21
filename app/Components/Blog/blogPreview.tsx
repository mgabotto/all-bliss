export default function BlogPreview() {
  return (
    <div className="container mx-auto">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16"></div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Blog</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-l font-medium text-indigo-500">
            Continuar leyendo...
          </a>
        </div>
      </div>
    </div>
  );
}
