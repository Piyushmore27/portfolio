import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "education",
        element: <Education />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  )
}

export default App
