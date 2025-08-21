import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12 p-8 rounded-lg shadow-lg max-w-6xl mx-auto bg-gray-800">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m Umubyeyi Marie Bienvenue, a passionate web developer with a deep
            love for creating beautiful and meaningful interfaces. My journey
            into web development began with curiosity, experimenting with simple
            websites and discovering how a few lines of code could bring ideas
            to life.
            <br />
            <br />
            I specialize in <span className="text-yellow-300">Next.js</span>,{" "}
            <span className="text-yellow-300">React</span>, and{" "}
            <span className="text-yellow-300">Tailwind CSS</span> — tools that
            let me build applications that are dynamic, responsive, and visually
            striking. To me, writing code is only part of the journey. True
            development is about solving problems, shaping experiences, and
            connecting with people.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/me.jpg"
            alt="Umubyeyi Marie Bienvenue"
            width={400}
            height={400}
            className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96 transform transition duration-300 hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
