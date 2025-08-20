import Image from 'next/image';
export default function About() {
  return (
    <section id="about" className="p-12"> 
      <h2 className="text-5xl font-bold text-center text-yellow-300 mb-2"> 
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <p className="text-xl text-gray-300 mt-5"> 
            I’m Umubyeyi Marie Bienvenue, a passionate web developer with a deep love for creating beautiful and meaningful meaningful interfaces.
            My journey into web development began with curiosity, experimenting with simple websites and discovering how a few lines of code could bring ideas to life.
             < br/>
             <br />
            I specialize in Next.js, React, and Tailwind CSS, tools that give me the freedom to design applications that are dynamic, responsive, and visually striking. 
            To me, writing code is only part of the journey. True development is about solving problems, shaping experiences, and connecting with people.
          </p>
        </div>
        <div className="w-full md:w-1/2  h-96 flex items-center justify-center rounded-lg hover-scale"> 
         <Image
  src="/me.jpg"
  alt="Your Professional Headshot"
  width={500}
  height={500}
  className="w-100 h-100 rounded-full object-cover"
/>

        </div>
      </div>
    </section>
  );
}
