import { Link } from 'react-router-dom';

const MiPerfil2_1 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#F7F9FB] min-h-screen">
      {/* Breadcrumb y Cabecera Principal */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end">
        <div>
          <div className="text-sm text-[#67757F] mb-1">
            <Link to="/" className="hover:underline">Inicio</Link> · <span className="text-[#162128] font-medium">Mi perfil</span>
          </div>
          <h1 className="text-[28px] font-semibold text-[#162128]">Mi perfil profesional</h1>
        </div>
        
        {/* Botones de acción (movidos arriba según la segunda imagen) */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="px-4 py-2 border border-[#DCE3EA] text-[#162128] bg-white rounded-md text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
            Ver mi perfil público
          </button>
          <button className="px-4 py-2 bg-[#123A5F] text-white rounded-md text-sm font-semibold hover:bg-[#0C2A46] transition shadow-sm">
            Editar datos
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Menú Lateral (izquierdo) */}
        <div className="w-full md:w-56 flex-shrink-0">
          <nav className="flex flex-col space-y-1 bg-white border border-[#DCE3EA] rounded-md p-2">
            <Link to="#" className="px-4 py-2 bg-[#E6EEF5] text-[#123A5F] font-semibold rounded-md">
              Datos personales
            </Link>
            <Link to="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Habilidades
            </Link>
            <Link to="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Experiencia
            </Link>
            <Link to="#" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Contraseña
            </Link>
          </nav>
        </div>

        {/* Contenido Principal (derecho) - Ahora dividido en Tarjetas */}
        <div className="flex-1 space-y-4">
          
          {/* Tarjeta 1: Barra de progreso a lo ancho */}
          <div className="bg-[#E6EEF5] p-5 rounded-md border border-[#DCE3EA]">
             <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-[#162128] text-sm">Perfil completo al 78 %</span>
                <div className="flex items-center gap-2 text-sm text-[#67757F]">
                   <span>Falta agregar experiencia y un enlace externo</span>
                   <button className="font-semibold text-[#123A5F] hover:underline">Completar ahora →</button>
                </div>
             </div>
             <div className="w-full bg-white rounded-full h-2 border border-[#DCE3EA]">
                <div className="bg-[#1E7F4D] h-full rounded-full" style={{ width: '78%' }}></div>
             </div>
          </div>

          {/* Tarjeta 2: Datos Personales */}
          <div className="bg-white p-6 rounded-md border border-[#DCE3EA] flex flex-col md:flex-row gap-8">
             {/* Foto */}
             <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-[100px] h-[100px] bg-[#E6EEF5] flex items-center justify-center border border-[#DCE3EA] overflow-hidden bg-[repeating-linear-gradient(135deg,#F7F9FB_0px,#F7F9FB_8px,#E6EEF5_8px,#E6EEF5_16px)]">
                   <span className="text-xs text-[#67757F] font-medium text-center px-2">foto de<br/>perfil</span>
                </div>
                <button className="text-xs font-semibold text-[#123A5F] hover:underline">
                  Cambiar foto
                </button>
             </div>

             {/* Grid de Datos */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 w-full">
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">NOMBRE COMPLETO</p>
                  <p className="text-sm text-[#162128] font-medium">Mariana Lucía Quispe Ramírez</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">CORREO INSTITUCIONAL</p>
                  <p className="text-sm text-[#162128] font-medium">mariana.quispe@aloe.ulima.edu.pe</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">TELÉFONO</p>
                  <p className="text-sm text-[#162128] font-medium">987 654 321</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">DISTRITO DE RESIDENCIA</p>
                  <p className="text-sm text-[#162128] font-medium">La Molina</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">CARRERA</p>
                  <p className="text-sm text-[#162128] font-medium">Ingeniería de Sistemas</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">CICLO</p>
                  <p className="text-sm text-[#162128] font-medium">Octavo</p>
                </div>
             </div>
          </div>

          {/* Tarjeta 3: Resumen Profesional */}
          <div className="bg-white p-6 rounded-md border border-[#DCE3EA]">
            <h3 className="text-lg font-semibold text-[#123A5F] mb-3">Resumen profesional</h3>
            <p className="text-sm text-[#162128] leading-[22px]">
              Estudiante de octavo ciclo de Ingeniería de Sistemas con interés en desarrollo web y analítica de datos. He liderado el módulo de reportes de un proyecto del curso de Bases de Datos y participo en el círculo de estudios de desarrollo de software de la universidad. Busco prácticas híbridas en Lima para aplicar React y SQL en un equipo de producto.
            </p>
            <div className="text-right text-xs text-[#67757F] mt-3">
               412 / 600 caracteres
            </div>
          </div>

          {/* Tarjeta 4: Enlaces Externos */}
          <div className="bg-white p-6 rounded-md border border-[#DCE3EA]">
            <h3 className="text-lg font-semibold text-[#123A5F] mb-4">Enlaces externos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-[#DCE3EA] rounded-md">
                <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">PORTAFOLIO</p>
                {/* Color azul claro/marino para los enlaces */}
                <a href="#" className="text-[#123A5F] text-sm font-medium hover:underline">marianaquispe.dev</a>
              </div>
              
              <div className="p-3 border border-[#DCE3EA] rounded-md">
                <p className="text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-1">REPOSITORIO</p>
                <a href="#" className="text-[#123A5F] text-sm font-medium hover:underline">repos.ejemplo.pe/mquispe</a>
              </div>

              {/* Botón de agregar enlace estilo dashed */}
              <button className="p-3 border border-dashed border-[#DCE3EA] rounded-md flex items-center justify-center text-sm text-[#67757F] hover:bg-gray-50 transition">
                + Agregar enlace
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MiPerfil2_1;