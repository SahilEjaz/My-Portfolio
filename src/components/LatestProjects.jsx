import { Link } from "react-router-dom";

const LatestProjects = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Legal Query Assistance */}
        <div className="border rounded-lg shadow-md p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">
          <h3 className="text-xl font-semibold">Legal Query Assistance</h3>
          <p className="text-gray-600 my-2">
            An AI-powered frontend app built with React that allows users to input legal queries and receive contextual responses with highlighted sources — styled with Tailwind and React Router.
          </p>
          <div className="text-sm text-blue-600 space-x-4">
             <a
          href="https://legal-query-app-vi9v.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Live (Vercel)
        </a>
            <a
              href="https://github.com/SahilEjaz/Legal-Query-App"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Gym Website */}
        <div className="border rounded-lg shadow-md p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">
          <h3 className="text-xl font-semibold">Gym Website</h3>
          <p className="text-gray-600 my-2">
            A responsive gym landing page with modern UI to help users explore fitness routines and gym benefits. Built using React, Tailwind CSS, and hosted on Vercel.
          </p>
          <div className="text-sm text-blue-600 space-x-4">
          <a
          href="https://gym-website-drab-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Live (Vercel)
              </a>
            
            <a
              href="https://github.com/SahilEjaz/Gym-Website-"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
