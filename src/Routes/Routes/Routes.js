import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Components/Home/Home/Home';
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
        path: '/projectDetails/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch(``),
      },
    ],
  },
]);

export default router;
