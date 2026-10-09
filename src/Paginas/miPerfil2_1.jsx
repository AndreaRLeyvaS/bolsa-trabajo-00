import { Link } from 'react-router-dom';


export default function MiPerfil2_1() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FB] text-[#162128] font-sans">
      <Header />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
        <div className="text-xs text-[#67757F] mb-4">
          <span>Inicio</span> <span className="mx-1">/</span> <span className="text-[#123A5F] font-medium">Mi perfil</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#DCE3EA] gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#123A5F]">Mi perfil profesional</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm font-medium text-[#162128]">Perfil completo al 78%</span>
              <div className="w-36 h-2 bg-[#E6EEF5] rounded-full overflow-hidden">
                <div className="w-[78%] h-full bg-[#0F8B7E] rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-[#67757F] mt-1">
              Falta agregar experiencia y un enlace externo.{" "}
              <span className="text-[#0F8B7E] font-medium cursor-pointer">Completar ahora →</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="px-4 py-2 border border-[#DCE3EA] text-sm font-medium rounded text-[#162128] bg-white hover:bg-gray-50">
              Ver mi perfil público
            </button>
            <button type="button" className="px-4 py-2 bg-[#123A5F] text-sm font-medium text-white rounded hover:bg-[#0C2A46]">
              Editar datos
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <nav className="bg-white border border-[#DCE3EA] rounded-md p-2 space-y-1">
              <a href="/mi-perfil" className="block px-3 py-2 text-sm font-semibold text-[#123A5F] bg-[#E6EEF5] rounded">
                Datos personales
              </a>
              <a href="/habilidades" className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded">
                Habilidades
              </a>
              <a href="/experiencia" className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded">
                Experiencia
              </a>
              <a href="/cambiar-password" className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded">
                Contraseña
              </a>
            </nav>
          </aside>

          <div className="md:col-span-3 space-y-6">
            <section className="bg-white border border-[#DCE3EA] rounded-md p-6 shadow-sm">
              {/* Foto de perfil */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#DCE3EA]">
                <div className="w-20 h-20 rounded-full bg-[#E6EEF5] border border-[#DCE3EA] flex items-center justify-center text-[#123A5F] font-bold text-xl">
                  MQ
                </div>
                <div>
                  <button type="button" className="text-sm font-semibold text-[#123A5F] hover:underline">
                    Cambiar foto
                  </button>
                  <p className="text-xs text-[#67757F] mt-0.5">JPG o PNG, máx 2 MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    NOMBRE COMPLETO
                  </span>
                  <p className="text-sm font-medium text-[#162128]">Mariana Lucía Quispe Ramírez</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    CORREO INSTITUCIONAL
                  </span>
                  <p className="text-sm font-medium text-[#162128]">mariana.quispe@aloe.ulima.edu.pe</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    TELÉFONO
                  </span>
                  <p className="text-sm font-medium text-[#162128]">987 654 321</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    DISTRITO DE RESIDENCIA
                  </span>
                  <p className="text-sm font-medium text-[#162128]">La Molina</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    CARRERA
                  </span>
                  <p className="text-sm font-medium text-[#162128]">Ingeniería de Sistemas</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    CICLO
                  </span>
                  <p className="text-sm font-medium text-[#162128]">Octavo</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#DCE3EA] mt-6">
                <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                  RESUMEN PROFESIONAL
                </span>
                <p className="text-sm text-[#162128] leading-relaxed">
                  Estudiante de octavo ciclo de Ingeniería de Sistemas con interés en desarrollo web y analítica de datos. He liderado el módulo de reportes de un proyecto del curso de Bases de Datos y participo en el círculo de estudios de desarrollo de software de la universidad. Busco prácticas híbridas en Lima para aplicar React y SQL en un equipo de producto.
                </p>
                <div className="text-right mt-1">
                  <span className="text-xs text-[#67757F]">412/600 caracteres</span>
                </div>
              </div>
              <div className="pt-6 border-t border-[#DCE3EA]">
                <span className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-3">
                  ENLACES EXTERNOS
                </span>
                <div className="flex flex-wrap gap-4">
                  <div className="border border-[#DCE3EA] rounded px-3 py-1.5 bg-[#F7F9FB] text-xs">
                    <span className="text-[#67757F] uppercase font-bold block text-[10px]">Portafolio</span>
                    <span className="text-[#123A5F] font-medium">marianaquispe.dev</span>
                  </div>
                  <div className="border border-[#DCE3EA] rounded px-3 py-1.5 bg-[#F7F9FB] text-xs">
                    <span className="text-[#67757F] uppercase font-bold block text-[10px]">Repositorio</span>
                    <span className="text-[#123A5F] font-medium">repos.ejemplo.pe/mquispe</span>
                  </div>
                  <button type="button" className="border border-dashed border-[#DCE3EA] px-3 py-1.5 rounded text-xs font-medium text-[#0F8B7E] hover:bg-gray-50">
                    + Agregar enlace
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}