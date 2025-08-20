import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 shadow-lg sticky top-0 z-18">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-yellow-300 tracking-tight">My Portfolio</h1>
        <div className="flex space-x-8">
          <Link href="/" className="text-white hover:text-yellow-300 transition-colors text-xl">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition-colors text-xl">About</Link>
          <Link href="/skills" className="text-white hover:text-yellow-300 transition-colors text-xl">Skills</Link>
          <Link href="/projects" className="text-white hover:text-yellow-300 transition-colors text-xl">Projects</Link>
          <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors text-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
