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
    <section className="flex flex-col items-center bg-gray-900 py-10 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-10 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-yellow-400 transition duration-300"
          >
            <div className="relative w-full h-40 sm:h-48 lg:h-52 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
