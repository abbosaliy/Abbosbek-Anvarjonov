import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Datenschutz from './components/Footer/Datenschutz';
import Impressum from './components/Footer/Impressum';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'impressum',
        element: <Impressum />,
      },
      {
        path: 'datenschutz',
        element: <Datenschutz />,
      },
    ],
    {
      basename: '/Abbosbek-Anvarjonov',
    }
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
