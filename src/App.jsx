import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

// Importaciones del Capítulo 1
import Landing from './Paginas/CAP_1/1.1_Landing';
import Login from './Paginas/CAP_1/1.2_Login';
import RegistroEstudiante from './Paginas/CAP_1/1.3_RegistroEstudiante';
import RegistroEmpresa from './Paginas/CAP_1/1.4_RegistroEmpresa';
import RecuperarPassword from './Paginas/CAP_1/1.5_RecuperarPassword';
import CambiarPassword from './Paginas/CAP_1/1.6_CambiarPassword';
import Error403 from './Paginas/CAP_1/1.7.1_Error403';
import Error404 from './Paginas/CAP_1/1.7.2_Error404';

// Importaciones del Capítulo 3
import PerfilEmpresa from './Paginas/CAP_3/3.1_PerfilEmpresa';
import EditarPerfilEmpresa from './Paginas/CAP_3/3.1.2_EditarPerfilEmpresa';
import FichaPublicaEmpresa from './Paginas/CAP_3/3.2_FichaPublicaEmpresa';
import MisConvocatorias from './Paginas/CAP_3/3.3_MisConvocatorias';
import NuevaConvocatoria from './Paginas/CAP_3/3.4_NuevaConvocatoria';

// Importaciones del Capítulo 4
import CatalogoConvocatorias from './Paginas/CAP_4/4.1_CatalogoConvocatorias';
import DetalleConvocatoria from './Paginas/CAP_4/4.2_DetalleConvocatoria';
import ConvocatoriasGuardadas from './Paginas/CAP_4/4.3_ConvocatoriasGuardadas';

// Importaciones del Capítulo 5
import PostulacionModal from './Paginas/CAP_5/5.1_PostulacionModal';
import ConfirmacionPostulacion from './Paginas/CAP_5/5.2_ConfirmacionPostulacion';
import MisPostulaciones from './Paginas/CAP_5/5.3_MisPostulaciones';
import DetallePostulacion from './Paginas/CAP_5/5.4_DetallePostulacion';
import BandejaPostulantes from './Paginas/CAP_5/5.5_BandejaPostulantes';
import PerfilPostulante from './Paginas/CAP_5/5.6_PerfilPostulante';

// Importaciones del Capítulo 6
import EscribirResena from './Paginas/CAP_6/6.1_EscribirResena';
import ResenasFichaEmpresa from './Paginas/CAP_6/6.2_ResenasFichaEmpresa';
import MisResenas from './Paginas/CAP_6/6.3_MisResenas';
import RankingEmpresas from './Paginas/CAP_6/6.4_RankingEmpresas';

// Importaciones del Capítulo 7
import InicioSesionAdmin from './Paginas/CAP_7/7.1_InicioSesionAdmin';
import TableroMetricas from './Paginas/CAP_7/7.2_TableroMetricas';
import GestionUsuarios from './Paginas/CAP_7/7.3_GestionUsuarios';
import DetalleUsuario from './Paginas/CAP_7/7.4_DetalleUsuario';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-[#F5F7FA]">
        <Routes>
          {/* Rutas del Capítulo 1 */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro-estudiante" element={<RegistroEstudiante />} />
          <Route path="/registro-empresa" element={<RegistroEmpresa />} />
          <Route path="/recuperar" element={<RecuperarPassword />} />
          <Route path="/cambiar-password" element={<CambiarPassword />} />
          <Route path="/acceso-denegado" element={<Error403 />} />

          {/* Rutas del Capítulo 3 */}
          <Route path="/empresa/perfil" element={<PerfilEmpresa />} />
          <Route path="/empresa/editar-perfil" element={<EditarPerfilEmpresa />} />
          <Route path="/empresa/ficha-publica" element={<FichaPublicaEmpresa />} />
          <Route path="/empresa/convocatorias" element={<MisConvocatorias />} />
          <Route path="/empresa/nueva-convocatoria" element={<NuevaConvocatoria />} />

          {/* Rutas del Capítulo 4 */}
          <Route path="/convocatorias" element={<CatalogoConvocatorias />} />
          <Route path="/convocatorias/detalle" element={<DetalleConvocatoria />} />
          <Route path="/guardadas" element={<ConvocatoriasGuardadas />} />

          {/* Rutas del Capítulo 5 */}
          <Route path="/postulaciones/modal" element={<PostulacionModal />} />
          <Route path="/postulaciones/confirmacion" element={<ConfirmacionPostulacion />} />
          <Route path="/postulaciones" element={<MisPostulaciones />} />
          <Route path="/postulaciones/detalle" element={<DetallePostulacion />} />
          <Route path="/empresa/bandeja" element={<BandejaPostulantes />} />
          <Route path="/empresa/perfil-postulante" element={<PerfilPostulante />} />

          {/* Rutas del Capítulo 6 */}
          <Route path="/empresa/escribir-resena" element={<EscribirResena />} />
          <Route path="/empresa/resenas-ficha" element={<ResenasFichaEmpresa />} />
          <Route path="/empresa/mis-resenas" element={<MisResenas />} />
          <Route path="/empresa/ranking" element={<RankingEmpresas />} />

          {/* Rutas del Capítulo 7 */}
          <Route path="/admin/login" element={<InicioSesionAdmin />} />
          <Route path="/admin/metricas" element={<TableroMetricas />} />
          <Route path="/admin/usuarios" element={<GestionUsuarios />} />
          <Route path="/admin/usuario/detalle" element={<DetalleUsuario />} />

          {/* Ruta por defecto para errores 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}