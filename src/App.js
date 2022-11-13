import { Routes, Route } from 'react-router-dom';

// import Footer from './components/footer/footer.component';
import FooterMeta from './components/footer/footer-meta-bnb.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact-page/contact-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FooterMeta />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
