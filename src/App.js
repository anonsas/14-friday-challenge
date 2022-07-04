import './App.scss';
import Navigation from './container/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home, Calendar, Fe, Games, NotFound } from './pages/index';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/fe" element={<Fe />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
