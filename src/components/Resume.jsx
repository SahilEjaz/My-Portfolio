
const Resume = () => {
  return (
    <section id="resume" className="p-8 text-center">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Resume</h3>
      <a
        href="/Sahilejazrsm2.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
