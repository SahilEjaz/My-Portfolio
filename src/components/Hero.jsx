import { useState } from "react";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pt-28 pb-12">
        {/* DP image */}
        <img
          src="Sahil idp.jpg"
          alt="Sahil's DP"
          onClick={() => setOpenModal(true)}
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mb-4 cursor-pointer hover:scale-105 transition"
        />
        <h2 className="text-3xl font-bold">Sahil Ejaz</h2>
        <p className="text-lg text-gray-600">Frontend Developer | ReactJS & TailwindCSS</p>

        {/* Bio */}
        <div className="mt-6 max-w-xl text-gray-700 text-sm md:text-base px-4">
          <p>
            Hi! I'm a passionate frontend developer with a strong base in ReactJS, TailwindCSS,
            JavaScript, and version control. I love building clean UI, responsive layouts, and exploring new tools like Vite and AI integrations.
            I'm currently working on a legal query AI app and learning Next.js.
          </p>
        </div>
      </div>

      {/* Modal for enlarged DP */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div className="relative">
            <img
              src="Sahil idp.jpg"
              alt="Enlarged DP"
              className="w-[90vw] max-w-md rounded-lg shadow-lg border-4 border-white"
            />
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
