import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Imprint from './components/Footer/Imprint';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'imprint',
        element: <Imprint />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
    {
      basename: '/Abbosbek-Anvarjonov',
    }
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
