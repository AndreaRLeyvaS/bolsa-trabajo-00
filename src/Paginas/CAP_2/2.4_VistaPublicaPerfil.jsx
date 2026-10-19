import { Link } from "react-router-dom";

export default function MiPerfilPublico2_4() {
  const habilidades = [
    { nombre: "JavaScript", nivel: "Avanzado" },
    { nombre: "React", nivel: "Avanzado" },
    { nombre: "SQL", nivel: "Avanzado" },
    { nombre: "Python", nivel: "Intermedio" },
    { nombre: "Power BI", nivel: "Intermedio" },
    { nombre: "Git", nivel: "Intermedio" },
    { nombre: "Excel avanzado", nivel: "Intermedio" },
    { nombre: "Figma", nivel: "Básico" },
    { nombre: "Docker", nivel: "Básico" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FB] text-[#162128] font-sans">
      <header className="bg-[#0C2A46] text-white px-6 py-3 flex items-center justify-between border-b border-[#123A5F]">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold tracking-tight text-white hover:opacity-90">
            PrácticaLima
          </Link>
          <span className="text-xs bg-[#123A5F] text-[#E6EEF5] px-2.5 py-1 rounded font-medium tracking-wide uppercase">
            Panel de empresa
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-64 md:w-80">
            <input
              type="text"
              placeholder="Buscar postulantes"
              readOnly
              className="w-full bg-[#123A5F] text-xs text-white placeholder-gray-300 rounded px-3 py-1.5 focus:outline-none border border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#E6EEF5] text-[#123A5F] font-bold text-xs flex items-center justify-center">
              AP
            </div>
            <div className="text-left text-xs leading-tight">
              <p className="font-semibold text-white">Consultora Andes Perú S.A.C.</p>
              <p className="text-[11px] text-gray-300">Empresa · Cuenta verificada</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex w-full">
        <aside className="w-[280px] bg-white border-r border-[#DCE3EA] p-5 shrink-0 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-bold text-[#67757F] tracking-wider uppercase mb-2">
                CONVOCATORIAS
              </p>
              <nav className="space-y-1">
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Mis convocatorias
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Nueva convocatoria
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-semibold text-[#123A5F] bg-[#E6EEF5] rounded"
                >
                  Bandeja de postulantes
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#67757F] tracking-wider uppercase mb-2">
                EMPRESA
              </p>
              <nav className="space-y-1">
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Perfil de la empresa
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Reseñas recibidas
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#67757F] tracking-wider uppercase mb-2">
                CUENTA
              </p>
              <nav className="space-y-1">
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Cambiar contraseña
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 text-xs font-medium text-[#67757F] hover:bg-gray-50 rounded"
                >
                  Cerrar sesión
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-8 max-w-[1200px]">
          {/* Migas de pan */}
          <div className="text-xs text-[#67757F] mb-4">
            <span>Bandeja de postulantes</span>
            <span className="mx-1.5">/</span>
            <span>Practicante de Desarrollo de Software</span>
            <span className="mx-1.5">/</span>
            <span className="text-[#123A5F] font-semibold">Perfil público de Mariana Quispe</span>
          </div>

          <section className="bg-white border border-[#DCE3EA] rounded-md p-6 mb-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#E6EEF5] border border-[#DCE3EA] flex items-center justify-center text-[#123A5F] font-bold text-xl">
                  MQ
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#123A5F]">Mariana Lucía Quispe Ramírez</h1>
                  <p className="text-sm text-[#162128] mt-0.5">
                    Ingeniería de Sistemas · Octavo ciclo · La Molina
                  </p>
                  <p className="text-xs text-[#67757F] mt-1">
                    mariana.quispe@aloe.ulima.edu.pe · 987 654 321
                  </p>
                </div>
              </div>

              <div className="text-right sm:self-center">
                <span className="inline-block bg-[#FDF6E2] text-[#B7791F] border border-[#F3DE98] text-xs font-semibold px-3 py-1 rounded-full">
                  En revisión
                </span>
                <p className="text-[11px] text-[#67757F] mt-1.5">Postuló el 20/08/2026</p>
              </div>
            </div>
          </section>

          {/* Grid de dos columnas: Detalle del postulante */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna Izquierda: Resumen y Experiencia */}
            <div className="lg:col-span-2 space-y-6">
              {/* Resumen profesional */}
              <section className="bg-white border border-[#DCE3EA] rounded-md p-6 shadow-sm">
                <h2 className="text-xs font-bold tracking-wider text-[#67757F] uppercase mb-2">
                  Resumen profesional
                </h2>
                <p className="text-sm text-[#162128] leading-relaxed">
                  Estudiante de octavo ciclo de Ingeniería de Sistemas con interés en desarrollo web y analítica de datos. He liderado el módulo de reportes de un proyecto del curso de Bases de Datos y participo en el círculo de estudios de desarrollo de software de la universidad. Busco prácticas híbridas en Lima para aplicar React y SQL en un equipo de producto.
                </p>
              </section>

              {/* Experiencia */}
              <section className="bg-white border border-[#DCE3EA] rounded-md p-6 shadow-sm space-y-4">
                <h2 className="text-xs font-bold tracking-wider text-[#67757F] uppercase mb-1">
                  Experiencia
                </h2>

                <div className="border-b border-[#DCE3EA] pb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-[#123A5F]">Asistente de Soporte TI</h3>
                    <span className="text-xs text-[#67757F]">03/2025 - actualidad</span>
                  </div>
                  <p className="text-xs font-medium text-[#162128] mt-0.5">Centro de Cómputo - Universidad de Lima</p>
                </div>

                <div className="border-b border-[#DCE3EA] pb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-[#123A5F]">Practicante de Analítica (proyecto de curso)</h3>
                    <span className="text-xs text-[#67757F]">08/2025 - 12/2025</span>
                  </div>
                  <p className="text-xs font-medium text-[#162128] mt-0.5">Cátedra de Bases de Datos - Universidad de Lima</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-[#123A5F]">Voluntaria de logística</h3>
                    <span className="text-xs text-[#67757F]">04/2025 - 05/2025</span>
                  </div>
                  <p className="text-xs font-medium text-[#162128] mt-0.5">Feria de Innovación Universitaria</p>
                </div>
              </section>
            </div>

            {/* Columna Derecha: Habilidades y Enlaces */}
            <div className="space-y-6">
              {/* Habilidades */}
              <section className="bg-white border border-[#DCE3EA] rounded-md p-6 shadow-sm">
                <h2 className="text-xs font-bold tracking-wider text-[#67757F] uppercase mb-3">
                  Habilidades
                </h2>
                <div className="flex flex-wrap gap-2">
                  {habilidades.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 border border-[#DCE3EA] bg-[#F7F9FB] text-xs px-2.5 py-1 rounded-full text-[#162128]"
                    >
                      <span className="font-medium">{h.nombre}</span>
                      <span className="text-[#67757F] text-[10px]">({h.nivel})</span>
                    </span>
                  ))}
                </div>
              </section>

              {/* Enlaces */}
              <section className="bg-white border border-[#DCE3EA] rounded-md p-6 shadow-sm">
                <h2 className="text-xs font-bold tracking-wider text-[#67757F] uppercase mb-3">
                  Enlaces
                </h2>
                <div className="space-y-2">
                  <p className="text-xs text-[#123A5F] hover:underline cursor-pointer truncate">
                    marianaquispe.dev
                  </p>
                  <p className="text-xs text-[#123A5F] hover:underline cursor-pointer truncate">
                    repos.ejemplo.pe/mquispe
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-[#DCE3EA] py-3 px-6 text-xs text-[#67757F] flex items-center justify-between">
        <span>PrácticaLima · Panel de empresa</span>
        <span>Soporte: empresas@ulima.edu.pe · (01) 437 6767</span>
      </footer>
    </div>
  );
}