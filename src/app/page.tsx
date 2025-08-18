export default function Home() {
  return (
    <section
      id="home"
      className="p-20 flex flex-col md:flex-row items-center justify-between bg-gray-900 max-w-full mx-auto"
    >
      <div className="md:w-1/2 mb-10 md:mb-0 p-5 ml-10">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-4">Hi</h2>
        <p className="text-lg text-gray-200 mb-4 leading-relaxed h-64">
          I’m Umubyeyi Marie Bienvenue, a creative developer crafting stunning,
          functional web experiences with modern tech. As Umubyeyi, I’m
          passionate about translating ideas into user-friendly interfaces that
          leave a lasting impression. From front-end design to seamless user
          interactions, I focus on detail and performance. I strive to push
          boundaries in digital experiences and love exploring new tools and
          technologies to stay ahead in the web development space.
        </p>
        <a
          href="/about"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors shadow hover:shadow-lg "
        >
          More About Me
        </a>

        {/* <a
            href="/cv"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors shadow hover:shadow-lg"
          >
            CV
          </a> */}
      </div>

      <div className="md:w-1/2 flex items-center justify-center rounded-lg overflow-hidden h-100">
        <img
          src="me.jpg"
          alt="Hero Image"
          className="w-100 h-100 object-cover rounded-full"
        />
      </div>
    </section>
  );
}
