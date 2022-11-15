import { Routes, Route } from 'react-router-dom';

// import Footer from './components/footer/footer.component';
import FooterMeta from './components/footer/footer-meta-bnb.component';
import Home from './routes/home/home.component';
import PlaceToStay from './routes/place-to-stay/place-to-stay.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FooterMeta />}>
        <Route index element={<Home />} />
        <Route path="place-to-stay" element={<PlaceToStay />} />
      </Route>
    </Routes>
  );
}

export default App;
