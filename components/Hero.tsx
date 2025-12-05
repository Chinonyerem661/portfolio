export default function Hero() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-32 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Hi, Im Chinonyerem 👋</h1>
        <p className="text-gray-600 text-lg mb-6">
          Full Stack & Blockchain Developer crafting modern apps and smart contracts.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border rounded-lg text-gray-700">
            Contact Me
          </a>
        </div>
      </div>
    );
  }
  