const projects = [
  {
    title: "Legal Query Assistance",
    desc: " An AI-powered frontend app built with React that allows users to input legal queries and receive contextual responses with highlighted sources — styled with Tailwind and React Router.",
    github: "https://github.com/SahilEjaz/Legal-Query-App",
    live: "https://legal-query-app-vi9v.vercel.app/",
  },
  {
    title: "Gym Website",
    desc: "A responsive gym landing page with modern UI to help users explore fitness routines and gym benefits. Built using React, Tailwind CSS, and hosted on Vercel.",
    github: "https://github.com/SahilEjaz/Gym-Website-",
    live: "https://gym-website-drab-pi.vercel.app/",
  },
   {
    title: "Currency convertor",
    desc: "Convert between currencies using live API.",
    github: "https://github.com/yourusername/password-generator",
     live: "https://currency-converter.vercel.app",
  },
   {
    title: "Password Generator",
    desc: "Random strong password generator with copy feature.",
    github: "https://github.com/yourusername/password-generator",
    live: "https://password-generator.vercel.app",
  },
   {
    title: "React-Router-Dom",
    desc: "A demo project showcasing client-side routing using React Router DOM. Users can navigate between multiple pages like Home, About, Projects, and Contact without reloading the page. This project demonstrates how to set up nested routes, dynamic routes, and layout components in a React single-page application.",
    github: "https://github.com/yourusername/password-generator",
    live: "",
  },
   {
    title: "Counter",
    desc: "A simple React application that allows users to increment, decrement, and reset a counter. It helps demonstrate the use of React functional components, useState hook, and basic event handling in React.",
    github: "https://github.com/yourusername/password-generator",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h3 className="text-2xl font-bold mb-6 text-blue-600 ">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-xl font-semibold">{proj.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{proj.desc}</p>
            <div className="space-x-3">
              <a href={proj.github} target="_blank" className="text-blue-500">GitHub</a>
              <a href={proj.live} target="_blank" className="text-green-500">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
