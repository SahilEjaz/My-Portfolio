const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="mb-2">&copy; {new Date().getFullYear()} Sahil Jafri</p>
      <div className="space-x-4">
        <a
          href="https://github.com/SahilEjaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://vercel.com/sahilejaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-400"
        >
          Vercel
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-ejaz-a2491821b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
