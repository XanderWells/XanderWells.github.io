import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar/Navbar"
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import AllProjects from "./routes/Projects/DisplayAllProjects";
import ProjectsOverview from "./routes/Projects/ProjectsOverview";
import DisplaySpecificProject from "./routes/Projects/DisplaySpecificProject";
import NotFound from "./routes/NotFound/NotFound";

function App() {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" >
          <Route index element={<AllProjects />} />
          <Route path=":projectName" element={<DisplaySpecificProject />}/>
        </Route>
        <Route path="/employment" element={<PlaceholderRouteDestination />} />
        <Route path="/personal" element={<PlaceholderRouteDestination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </div>
  );
}

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto md:px-4 lg:px-8">
      <About />
      <ProjectsOverview />
    </main>
  )
}

const PlaceholderRouteDestination = () => {
  return (
    <div className="text-center">
      This section is currently under contruction, please check back later.
    </div>
  )
}

export default App;
