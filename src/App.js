import Navbar from "./components/Navbar/Navbar"
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import ProjectsOverview from "./routes/Projects/ProjectsOverview";

function App() {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto md:px-4 lg:px-8">
        <About />
        <ProjectsOverview />
        <Contact />
      </main>

    </div>
  );
}

export default App;
