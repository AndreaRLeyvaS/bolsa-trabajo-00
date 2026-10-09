import { Link } from 'react-router-dom';


export default function EstadosVaciosPerfil2_2_3() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#F7F9FB] min-h-screen">
      {/* Breadcrumb y Cabecera Principal */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end">
        <div>
          <div className="text-sm text-[#67757F] mb-1">
            <a href="#" className="hover:underline">Inicio</a> · <a href="#" className="hover:underline">Mi perfil</a> · <span className="text-[#162128] font-medium">Estados vacíos</span>
          </div>
          <h1 className="text-[28px] font-semibold text-[#162128]">Mi perfil profesional</h1>
        </div>
        
        {/* Botones de acción (Inactivos) */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button type="button" className="px-4 py-2 border border-[#DCE3EA] text-[#162128] bg-white rounded-md text-sm font-semibold hover:bg-gray-50 transition shadow-sm cursor-default">
            Ver mi perfil público
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Menú Lateral (izquierdo) - CASCARÓN VISUAL SIN REACT ROUTER */}
        <div className="w-full md:w-56 flex-shrink-0">
          <nav className="flex flex-col space-y-1 bg-white border border-[#DCE3EA] rounded-md p-2">
            <a href="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Datos personales
            </a>
            <a href="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Habilidades
            </a>
            <a href="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Experiencia
            </a>
            <a href="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Contraseña
            </a>
          </nav>
        </div>

        {/* Contenido Principal (derecho) - Estados Vacíos */}
        <div className="flex-1 space-y-6">
          
          {/* Barra de progreso - Estado inicial/bajo */}
          <div className="bg-[#E6EEF5] p-5 rounded-md border border-[#DCE3EA]">
             <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-[#162128] text-sm">Perfil completo al 20 %</span>
                <div className="flex items-center gap-2 text-sm text-[#67757F]">
                   <span>Falta agregar habilidades, experiencia y enlaces</span>
                </div>
             </div>
             <div className="w-full bg-white rounded-full h-2 border border-[#DCE3EA]">
                <div className="bg-[#1E7F4D] h-full rounded-full" style={{ width: '20%' }}></div>
             </div>
          </div>

          {/* Tarjeta de Estado Vacío: HABILIDADES (2.2) */}
          <div className="bg-white p-8 rounded-md border border-[#DCE3EA] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#F7F9FB] rounded-full flex items-center justify-center mb-4 border border-[#DCE3EA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#67757F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#123A5F] mb-2">Aún no has agregado habilidades</h3>
            <p className="text-sm text-[#67757F] max-w-md mb-5">
              Destaca tus conocimientos técnicos y herramientas que dominas. Las empresas buscan perfiles con habilidades específicas.
            </p>
            <button type="button" className="px-5 py-2.5 bg-[#123A5F] text-white rounded-md text-sm font-semibold hover:bg-[#0C2A46] transition shadow-sm cursor-default">
              + Agregar habilidad
            </button>
          </div>

          {/* Tarjeta de Estado Vacío: EXPERIENCIA (2.3) */}
          <div className="bg-white p-8 rounded-md border border-[#DCE3EA] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#F7F9FB] rounded-full flex items-center justify-center mb-4 border border-[#DCE3EA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#67757F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#123A5F] mb-2">No tienes experiencia registrada</h3>
            <p className="text-sm text-[#67757F] max-w-md mb-5">
              Si no tienes experiencia laboral previa, puedes agregar proyectos académicos destacados, voluntariados o participación en círculos de estudio.
            </p>
            <button type="button" className="px-5 py-2.5 bg-[#123A5F] text-white rounded-md text-sm font-semibold hover:bg-[#0C2A46] transition shadow-sm cursor-default">
              + Agregar experiencia
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}