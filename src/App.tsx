import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Imprint from './components/Footer/Imprint';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/imprint"
          element={<Imprint />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
