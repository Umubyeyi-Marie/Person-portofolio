'use client'; 

type Skill = {
  name: string;
  level: number;
  color: string;
};

export default function SkillsPage() {
  const skills: Skill[] = [
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 80, color: 'bg-blue-400' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
    { name: 'React', level: 80, color: 'bg-blue-600' },
    { name: 'Git', level: 70, color: 'bg-red-400' },
    { name: 'GitHub', level: 70, color: 'bg-gray-500' },
    { name: 'Next.js', level: 70, color: 'bg-black' },
    { name: 'TypeScript', level: 60, color: 'bg-indigo-500' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-400' },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Creativity',
    'Leadership',
  ];

  return (
    <section id="skills" className="py-6 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-yellow-300 mb-12 text-center">My Skills</h2>

      <div className="grid grid-cols-12 gap-8">
        {/* Technical Skills - Left */}
        <div className="col-span-12 md:col-span-8 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-lg font-semibold text-gray-200 mb-1">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Right */}
        <div className="col-span-12 md:col-span-4 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-yellow-200 mb-4">Soft Skills</h3>
          <ul className="space-y-3">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="text-white font-medium bg-gray-700 py-2 px-4 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </section>
  );
}