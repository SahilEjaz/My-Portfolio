import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-3xl font-bold mb-8">📞 Contact Me</h1>

      <div className="space-y-6 text-lg">
        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-red-500 text-xl" />
          <span>jafrisahil04@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-green-600 text-xl" />
          <span>9971480961</span>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-black text-xl" />
          <a
            href="https://github.com/SahilEjaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            github.com/SahilEjaz
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-blue-700 text-xl" />
          <a
            href="https://www.linkedin.com/in/sahil-ejaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            linkedin.com/in/sahil-ejaz
          </a>
        </div>

        {/* Vercel */}
        <div className="flex items-center gap-4">
          <FaGlobe className="text-purple-700 text-xl" />
          <a
            href="https://vercel.com/sahilejaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            vercel.com/sahilejaz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
