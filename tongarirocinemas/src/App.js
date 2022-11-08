import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, MovieInfoPage, StaffPOS, PaymentPage } from './pages/page_index.js'
import { POSSystem } from './components/component_index';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      <Route path="/movieinfo/hot-rod" element={<MovieInfoPage movieTitle='Hot Rod'/>} />
      <Route path="/movieinfo/alien" element={<MovieInfoPage movieTitle='Alien'/>} />
      <Route path="/movieinfo/doctor-strange-2" element={<MovieInfoPage movieTitle='Doctor Strange 2'/>} />
      <Route path="/movieinfo/home-alone" element={<MovieInfoPage movieTitle='Home Alone'/>} />
      <Route path="/movieinfo/iron-man" element={<MovieInfoPage movieTitle='Iron Man'/>} />
      <Route path="/movieinfo/lotr-the-return-of-the-king" element={<MovieInfoPage movieTitle='LOTR: The Return of the King'/>} />
      <Route path="/movieinfo/sw-the-return-of-the-jedi" element={<MovieInfoPage movieTitle='Star Wars: Return of the Jedi'/>} />
      
      <Route path="/staffpos" element={<POSSystem />} />
      <Route path='/staffpos/payment' element={<PaymentPage />} />
    </Routes>
    
  );
}

export default App;
