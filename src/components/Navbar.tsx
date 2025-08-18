export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 shadow-lg sticky top-0 z-18">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-yellow-300 tracking-tight">My Portfolio</h1>
        <ul className="flex space-x-8">
          <li><a href="/" className="text-white hover:text-yellow-300 transition-colors text-xl">Home</a></li>
          <li><a href="/about" className="text-white hover:text-yellow-300 transition-colors text-xl">About</a></li>
          <li><a href="/skills" className="text-white hover:text-yellow-300 transition-colors text-xl">Skills</a></li>
          <li><a href="/projects" className="text-white hover:text-yellow-300 transition-colors text-xl">Projects</a></li>
          <li><a href="/contact" className="text-white hover:text-yellow-300 transition-colors text-xl">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
