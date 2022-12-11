import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Components/Blog/Blog';
import About from '../../Components/Home/About/About';
import Contact from '../../Components/Home/Contact/Contact';
import Home from '../../Components/Home/Home/Home';
import Projects from '../../Components/Home/Projects/Projects';
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails';
import Main from '../../Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/projectdetails/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-steel.vercel.app/projects/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
