import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

// Importación de todas las páginas del Capítulo 1
import Landing1_1 from './Paginas/Landing1_1';
import Login1_2 from './Paginas/Login1_2';
import RegistroEstudiante1_3 from './Paginas/RegistroEstudiante1_3';
import RegistroEmpresa1_4 from './Paginas/RegistroEmpresa1_4';
import RecuperarPassword1_5 from './Paginas/RecuperarPassword1_5';
import CambiarPassword1_6 from './Paginas/CambiarPassword1_6';
import Error403_1_7 from './Paginas/Error403_1_7';
import Error404_1_7 from './Paginas/Error404_1_7';
import MiPerfil2_1 from './Paginas/miPerfil2_1';
import MiPerfilEditar2_1 from './Paginas/miPerfilEditar2_1';
import MiPerfilHabilidades2_2 from './Paginas/miPerfilHabilidades2_2';
import MiPerfilExperiencia_3 from './Paginas/miPerfilExperiencia2_3';




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-[#F7F9FB]">
        <Routes>
          <Route path="/" element={<Landing1_1 />} />
          <Route path="/login" element={<Login1_2 />} />
          <Route path="/registro-estudiante" element={<RegistroEstudiante1_3 />} />
          <Route path="/registro-empresa" element={<RegistroEmpresa1_4 />} />
          <Route path="/recuperar" element={<RecuperarPassword1_5 />} />
          <Route path="/cambiar-password" element={<CambiarPassword1_6 />} />
          
          <Route path="/acceso-denegado" element={<Error403_1_7 />} />
          <Route path="*" element={<Error404_1_7 />} />
          <Route path="/mi-perfil" element={<MiPerfil2_1 />} />
          <Route path="/mi-perfil/editar" element={<MiPerfilEditar2_1 />} />
          <Route path="/mi-perfil/habilidades" element={<MiPerfilHabilidades2_2 />} />
          <Route path="/mi-perfil/experiencia" element={<MiPerfilExperiencia2_3 />} />


        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}