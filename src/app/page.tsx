import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="px-4 py-16 md:py-22 flex flex-col md:flex-row items-center justify-between bg-gray-900 w-full mx-auto h-screen"
    >
      <div className="md:w-1/2 mb-10 md:mb-0 md:p-5 md:ml-10">
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-4">Hi</h2>
        <p className="text-lg text-gray-200 mb-6 md:mb-4 leading-relaxed">
          I'm Umubyeyi Marie Bienvenue, a creative developer crafting stunning,
          functional web experiences with modern tech. As Umubyeyi, I'm
          passionate about translating ideas into user-friendly interfaces that
          leave a lasting impression. From front-end design to seamless user
          interactions, I focus on detail and performance. I strive to push
          boundaries in digital experiences and love exploring new tools and
          technologies to stay ahead in the web development space.
        </p>
        <a
          href="/about"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors shadow hover:shadow-lg"
        >
          More About Me
        </a>
      </div>

      <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-300">
          <Image
            src="/me.jpg"
            alt="Umubyeyi Marie Bienvenue"
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}