import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;

  // 1. Sin footer en login de administrador
  if (path === '/admin/login') {
    return null;
  }

  // 2. ROL ADMINISTRADOR: Barra de soporte de una línea
  if (path.startsWith('/admin')) {
    return (
      <footer className="bg-white border-t border-[#DCE3EA] py-3 px-6 text-xs text-[#67757F] font-sans">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-semibold text-[#123A5F]">PrácticaLima Panel de administración</span>
          <span>Soporte TI: soporte-ti@ulima.edu.pe anexo 6767</span>
        </div>
      </footer>
    );
  }

  // 3. ROL EMPRESA: Barra de soporte de una línea
  const esRutaEmpresa =
    path === '/empresa/perfil' ||
    path === '/empresa/editar-perfil' ||
    path === '/empresa/convocatorias' ||
    path === '/empresa/nueva-convocatoria' ||
    path === '/empresa/bandeja' ||
    path === '/empresa/perfil-postulante';

  if (esRutaEmpresa) {
    return (
      <footer className="bg-white border-t border-[#DCE3EA] py-3 px-6 text-xs text-[#67757F] font-sans">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-semibold text-[#123A5F]">PrácticaLima Panel de empresa</span>
          <span>Soporte: empresas@ulima.edu.pe (01) 437 6767</span>
        </div>
      </footer>
    );
  }

  // 4. ROL VISITANTE Y ESTUDIANTE: Pie Completo
  return (
    <footer className="bg-[#0C2A46] px-6 py-8 text-white font-sans">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">

        {/* Nombre y descripción */}
        <div className="lg:col-span-2">
          <p className="font-bold">PrácticaLima</p>

          <p className="mt-2 max-w-[260px] text-xs text-[#A3B8C9]">
            Bolsa de prácticas pre-profesionales para estudiantes
            de la Universidad de Lima.
          </p>
        </div>

        {/* Plataforma */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            PLATAFORMA
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li><a href="#convocatorias" className="hover:text-white">Convocatorias</a></li>
            <li><a href="#empresas" className="hover:text-white">Empresas</a></li>
            <li><a href="#publicar" className="hover:text-white">Publicar convocatoria</a></li>
          </ul>
        </div>

        {/* Ayuda */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            AYUDA
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li><a href="#preguntas" className="hover:text-white">Preguntas frecuentes</a></li>
            <li><a href="#terminos" className="hover:text-white">Términos del servicio</a></li>
            <li><a href="#privacidad" className="hover:text-white">Privacidad de datos</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            CONTACTO
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li>
              <a href="mailto:practicas@ulima.edu.pe" className="hover:text-white">
                practicas@ulima.edu.pe
              </a>
            </li>
            <li>Av. Javier Prado Este 4600</li>
            <li>Sede Monterrico, Lima</li>
          </ul>
        </div>

        {/* Derechos */}
        <div>
          <p className="text-xs text-[#A3B8C9] lg:text-right">
            © Universidad de Lima
          </p>
        </div>

      </div>
    </footer>
  );
}