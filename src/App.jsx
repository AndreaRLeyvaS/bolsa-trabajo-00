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

// Importación de todas las páginas del Capítulo 3
import PerfilEmpresa from './Paginas/CAP_3/3.1_PerfilEmpresa';
import EditarPerfilEmpresa from './Paginas/CAP_3/3.1.2_EditarPerfilEmpresa';
import FichaPublicaEmpresa from './Paginas/CAP_3/3.2_FichaPublicaEmpresa';
import MisConvocatorias from './Paginas/CAP_3/3.3_MisConvocatorias';
import NuevaConvocatoria from './Paginas/CAP_3/3.4_NuevaConvocatoria';



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
          
          // Rutas del Capítulo 3
          <Route path="/empresa/perfil" element={<PerfilEmpresa />} />
          <Route path="/empresa/editar-perfil" element={<EditarPerfilEmpresa />} />
          <Route path="/empresa/ficha-publica" element={<FichaPublicaEmpresa />} />
          <Route path="/empresa/convocatorias" element={<MisConvocatorias />} />
          <Route path="/empresa/nueva-convocatoria" element={<NuevaConvocatoria />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}