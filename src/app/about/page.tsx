export default function About() {
  return (
    <section id="about" className="py-20"> 
      <h2 className="text-5xl font-bold text-center text-yellow-300 mb-10"> 
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <p className="text-xl text-gray-300"> 
            I’m Umubyeyi Marie Bienvenue, a passionate web developer experienced in Next.js, React, and Tailwind CSS.
            My mission is to build dynamic, responsive, and visually striking applications that leave a lasting impression.
            I thrive on solving complex problems and delivering perfect solutions.
          </p>
        </div>
        <div className="w-full md:w-1/2  h-96 flex items-center justify-center rounded-lg hover-scale"> 
          <img src="/me.jpg" alt="Your Professional Headshot" className="w-100 h-100 rounded-full object-cover " />
        </div>
      </div>
    </section>
  );
}
