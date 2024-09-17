import { Outlet, ScrollRestoration, createBrowserRouter, RouterProvider } from 'react-router-dom';

import NumberContext from './components/Contexts/NumberContext';

import Navbar from "./components/Navbar/Navbar"
import About from "./routes/About/About";
import Resume from './routes/Resume/Resume';
import Contact from "./routes/Contact/Contact";
import SectionOverview from "./routes/Projects/SectionOverview";

import DisplaySpecific from "./routes/Projects/DisplaySpecific";
import NotFound from "./routes/NotFound/NotFound";
import Section from "./classes/Section";
import { useState } from 'react';

const projectsSection = new Section("Project Samples", "projects", "", ["apollo", "lux","rocketfins", "softjawmanufacturing", "compositelayups", "desk","miscprojects", "website"], ["apollo","lux","rocketfins", "softjawmanufacturing", "compositelayups", "desk", "miscprojects", "website"])
// projectsSection.urlsInOverview = ["apollo","rocketfins", "softjawmanufacturing", "compositelayups", "desk", "miscprojects", "website"]

projectsSection.overviewDescription = "My favorite projects"
// section1.seeAllDescription = "See more projects →"
projectsSection.seeAllDescription = ""

const professionalSection = new Section("Professional Experience", "professional", "", ["relativity","zipline","spacex", "cmsc", "pw", "bidc"], ["relativity","zipline","spacex", "cmsc", "pw",  "bidc"])
professionalSection.urlsInOverview = ["relativity","zipline","spacex", "pw","cmsc", "bidc"]
// professionalSection.overviewDescription = "Where I've worked"
professionalSection.overviewDescription = "My latest professional experiences"
// section2.seeAllDescription = "See all jobs →"
professionalSection.seeAllDescription = ""

const personalSection = new Section("Personal Tidbits", "personal", "", ["mycat", "puzzles", "endmill"], ["mycat", "puzzles", "endmill"])
personalSection.overviewDescription = "Extra cool things about me"
personalSection.seeAllDescription = ""

const sections = [projectsSection, professionalSection, personalSection]
// const sections = [projectsSection, personalSection]

const Layout = () => {

  const [num, setNum] = useState(false)

  return (
    <>
      <NumberContext.Provider value={{num, setNum}}>
        <div className="bg-gray-800 text-white">
          <Navbar />
          
          <main className="max-w-7xl mx-auto md:px-4 lg:px-8">
            <Outlet />
          </main>
          
          <Contact />
        </div>
        <ScrollRestoration />
      </NumberContext.Provider>
    </>
  )
}

const Home = () => {
  return (
    <>
      <About />
      {
        sections.map((section, index) => {
          return <SectionOverview section={section} key={index} />
        })
      }
      <Resume />
    </>
  )
}

const routeChildren = [
  {
    path: "/",
    element: <Home />
  },
]

sections.forEach((section) => {
  routeChildren.push({
    path: `${section.sectionURL}`,
    children: [
      {index: true, element: <SectionOverview section={section}/>},
      {
        path: `:projectName`,
        element: <DisplaySpecific />
      }
    ]
  })
})

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routeChildren
  },
  { path: "*", element: <NotFound /> },
])

export default function App() {
  return <RouterProvider router={router} />
}