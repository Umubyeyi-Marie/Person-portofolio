// app/projects/page.tsx

import Image from "next/image";

const projects = [
  {
    title: "Product-list",
    image: "/product-list.png",
    desc: "E-commerce product listing with cart functionality.",
  },
  {
    title: "Recipe",
    image: "/Recipe.png",
    desc: "A dynamic recipe viewer built with Next.js and API integration.",
  },
  {
    title: "Journal-App",
    image: "/Journal-app.png",
    desc: "A personal journaling application with authentication.",
  },
  {
    title: "Book-management-system",
    image: "/book.jpg",
    desc: "Manage your personal library with CRUD functionality.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-screen">
      

      <main className="flex-1 overflow-hidden px-4 py-4 flex flex-col items-center">
       <h1 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl overflow-auto"
       style={{ maxHeight: "60vh" }}>
       {projects.map((project, i) => (
      <div
        key={i}
        className="bg-gray-800 p-3 rounded-md shadow-md hover:shadow-yellow-400 transition"
       >
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={160}
          className="rounded-md mb-2 object-cover w-full h-[160px]"
        />
        <h2 className="text-md font-semibold text-purple-300 mb-1">{project.title}</h2>
        <p className="text-gray-300 text-sm">{project.desc}</p>
      </div>
    ))}
  </div>
</main>


      
    </div>
  );
}
