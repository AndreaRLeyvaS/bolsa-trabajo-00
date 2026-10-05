import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

// Aquí importarás tus páginas a medida que las crees
// import Landing1_1 from './Paginas/Landing1_1';
// import Login1_2 from './Paginas/Login1_2';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-[#F7F9FB]">
        {/* Routes se encarga de cambiar el contenido central */}
        <Routes>
          {/* Ejemplo de cómo conectarás las páginas: */}
          {/* <Route path="/" element={<Landing1_1 />} /> */}
          {/* <Route path="/login" element={<Login1_2 />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}