import { Link } from "react-router-dom";

const LatestProjects = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">

              <div className="border rounded-lg shadow-md p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">
          <h3 className="text-xl font-semibold">Customer Support Ticketing System</h3>
          <p className="text-gray-600 my-2">
           "A React-based customer support application that allows users to register, log in, create support tickets, and manage their queries through a dashboard."
          </p>
          <div className="text-sm text-blue-600 space-x-4">
             <a
          href="https://customer-support-frontend-six.vercel.app/Login"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Live (Vercel)
        </a>
            <a
              href="https://github.com/SahilEjaz/customer-support-frontend"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
              <div className="border rounded-lg shadow-md p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">
          <h3 className="text-xl font-semibold">Mega APP</h3>
          <p className="text-gray-600 my-2">
           "A React-based application featuring user authentication, state management, and reusable components to provide a smooth user experience."
          </p>
          <div className="text-sm text-blue-600 space-x-4">
             <a
          href="https://mega-app-1sv7.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Live (Vercel)
        </a>
            <a
              href="https://github.com/SahilEjaz/MegaApp"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

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
