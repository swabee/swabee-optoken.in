import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Componenets/Footer/Footer';
import HomeSec from './Componenets/HomeSection.jsx/HomeSec';
import Navbar from './Componenets/Navbar/Navbar';
import Contact from './pages/Contact';
import DoctorsPage from './pages/DoctorsPage';
import HospitalPage from './pages/HospitalPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <HomeSec />
              </main>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contact />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/hospitals" element={<HospitalPage />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
