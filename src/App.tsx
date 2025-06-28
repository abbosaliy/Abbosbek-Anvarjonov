import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Globale.css';
import Hero from './components/Hero/Hero';
import Lebenslauf from './components/Lebenslauf/lebenslauf';
import Kontakt from './components/Kontakt/Kontakt';
import Seidbar from './components/routes/route';
import ProjekteCard from './components/Projekte/Projekte';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Seidbar></Seidbar>,
        children: [
          {
            index: true,
            element: <Hero></Hero>,
          },
          {
            path: 'lebenslauf',
            element: <Lebenslauf></Lebenslauf>,
          },
          {
            path: 'projekte',
            element: <ProjekteCard></ProjekteCard>,
          },
          {
            path: 'kontakt',
            element: <Kontakt></Kontakt>,
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
