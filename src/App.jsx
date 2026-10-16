import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

// Importación de todas las páginas del Capítulo 1
import Landing from './Paginas/CAP_1/1.1_Landing';
import Login from './Paginas/CAP_1/1.2_Login';
import RegistroEstudiante from './Paginas/CAP_1/1.3_RegistroEstudiante';
import RegistroEmpresa from './Paginas/CAP_1/1.4_RegistroEmpresa';
import RecuperarPassword from './Paginas/CAP_1/1.5_RecuperarPassword';
import CambiarPassword from './Paginas/CAP_1/1.6_CambiarPassword';
import Error403 from './Paginas/CAP_1/1.7.1_Error403';
import Error404 from './Paginas/CAP_1/1.7.2_Error404';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-[#F7F9FB]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro-estudiante" element={<RegistroEstudiante />} />
          <Route path="/registro-empresa" element={<RegistroEmpresa />} />
          <Route path="/recuperar" element={<RecuperarPassword />} />
          <Route path="/cambiar-password" element={<CambiarPassword />} />
          
          <Route path="/acceso-denegado" element={<Error403 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}