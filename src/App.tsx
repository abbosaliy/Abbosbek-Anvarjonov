import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Lebenslauf from './components/Lebenslauf/lebenslauf';
import Kontakt from './components/Kontakt/Kontakt';
import ProjekteCard from './components/Projekte/Projekte';
import Root from './components/routes/route';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            index: true,
            element: <Hero />,
          },
          {
            path: 'lebenslauf',
            element: <Lebenslauf />,
          },
          {
            path: 'projekte',
            element: <ProjekteCard />,
          },
          {
            path: 'kontakt',
            element: <Kontakt />,
          },
        ],
      },
    ],
    {
      basename: '/Abbosbek-Anvarjonov',
    }
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
