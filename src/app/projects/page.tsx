import Image from "next/image";

const projects = [
  {
    title: "Product-list",
    image: "/product-list.jpeg",
    desc: "E-commerce product listing with cart functionality.",
  },
  {
    title: "Recipe",
    image: "/recipe.jpeg",
    desc: "A dynamic recipe viewer built with Next.js and API integration.",
  },
  {
    title: "Journal-App",
    image: "/journal.jpeg",
    desc: "A personal journaling application with authentication.",
  },
  {
    title: "Book-management-system",
    image: "/book.jpeg",
    desc: "Manage your personal library with CRUD functionality.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-86 items-center bg-gray-900 py-6">
      <h1 className="text-5xl font-bold text-yellow-400 mb-8 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-md shadow-md hover:shadow-yellow-400 transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={160}
              className="rounded-md mb-3 object-cover w-full h-[160px]"
            />
            <h2 className="text-lg font-semibold text-purple-300 mb-2">{project.title}</h2>
            <p className="text-gray-300 text-sm">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
