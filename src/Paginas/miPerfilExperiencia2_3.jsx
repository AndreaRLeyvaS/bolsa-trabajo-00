import { Link } from "react-router-dom";

export default function MiPerfilExperiencia2_3() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 bg-[#F7F9FB] text-[#162128]">
      {/* Migas de pan */}
      <div className="text-xs text-[#67757F] mb-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <span className="mx-1.5">/</span>
        <Link to="/mi-perfil" className="hover:underline">Mi perfil</Link>
        <span className="mx-1.5">/</span>
        <span className="text-[#123A5F] font-semibold">Experiencia</span>
      </div>

      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#DCE3EA] gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#123A5F]">Experiencia</h1>
          <p className="text-xs text-[#67757F] mt-1">3 experiencias registradas</p>
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-[#123A5F] text-sm font-medium text-white rounded hover:bg-[#0C2A46]"
        >
          + Agregar experiencia
        </button>
      </div>

      {/* Grid principal: Menú lateral + Contenido y Panel lateral */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navegación lateral de pestañas */}
        <aside className="md:col-span-1">
          <nav className="bg-white border border-[#DCE3EA] rounded-md p-2 space-y-1">
            <Link
              to="/mi-perfil"
              className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded"
            >
              Datos personales
            </Link>
            <Link
              to="/habilidades"
              className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded"
            >
              Habilidades
            </Link>
            <Link
              to="/experiencia"
              className="block px-3 py-2 text-sm font-semibold text-[#123A5F] bg-[#E6EEF5] rounded"
            >
              Experiencia
            </Link>
            <Link
              to="/cambiar-password"
              className="block px-3 py-2 text-sm font-medium text-[#67757F] hover:bg-gray-50 rounded"
            >
              Contraseña
            </Link>
          </nav>
        </aside>

        {/* Bloque central: Línea de tiempo (col-span-2) + Panel de Agregar Experiencia (col-span-1) */}
        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Listado de Experiencias (Línea de tiempo) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Item 1 */}
            <div className="bg-white border border-[#DCE3EA] rounded-md p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-[#123A5F]">Asistente de Soporte TI</h3>
                    <span className="text-[10px] font-semibold bg-[#E6EEF5] text-[#123A5F] px-2 py-0.5 rounded-full">
                      Actualmente
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#162128] mt-0.5">
                    Centro de Cómputo - Universidad de Lima
                  </p>
                  <p className="text-xs text-[#67757F] mt-0.5">03/2025 - actualidad</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button type="button" className="text-[#123A5F] font-medium hover:underline">Editar</button>
                  <span className="text-[#DCE3EA]">|</span>
                  <button type="button" className="text-[#B4322B] font-medium hover:underline">Eliminar</button>
                </div>
              </div>
              <p className="text-xs text-[#67757F] mt-3 leading-relaxed">
                Atención de incidencias de laboratorios y elaboración del reporte semanal de tickets.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-[#DCE3EA] rounded-md p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-[#123A5F]">
                    Practicante de Analítica (proyecto de curso)
                  </h3>
                  <p className="text-sm font-medium text-[#162128] mt-0.5">
                    Cátedra de Bases de Datos - Universidad de Lima
                  </p>
                  <p className="text-xs text-[#67757F] mt-0.5">08/2025 - 12/2025</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button type="button" className="text-[#123A5F] font-medium hover:underline">Editar</button>
                  <span className="text-[#DCE3EA]">|</span>
                  <button type="button" className="text-[#B4322B] font-medium hover:underline">Eliminar</button>
                </div>
              </div>
              <p className="text-xs text-[#67757F] mt-3 leading-relaxed">
                Modelo de datos y tablero de indicadores para una cadena de farmacias ficticia. Reduje en 40% el tiempo de consulta del reporte de ventas.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-[#DCE3EA] rounded-md p-5 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-[#123A5F]">Voluntaria de logística</h3>
                  <p className="text-sm font-medium text-[#162128] mt-0.5">Feria de Innovación Universitaria</p>
                  <p className="text-xs text-[#67757F] mt-0.5">04/2025 - 05/2025</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button type="button" className="text-[#123A5F] font-medium hover:underline">Editar</button>
                  <span className="text-[#DCE3EA]">|</span>
                  <button type="button" className="text-[#B4322B] font-medium hover:underline">Eliminar</button>
                </div>
              </div>
              <p className="text-xs text-[#67757F] mt-3 leading-relaxed">
                Coordinación de 18 stands y control de asistencia de 600 visitantes.
              </p>
            </div>
          </div>

          {/* Panel lateral abierto: Agregar experiencia (Cascarón del Mockup) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#DCE3EA] rounded-md p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE3EA]">
                <h3 className="text-sm font-semibold text-[#123A5F]">Agregar experiencia</h3>
                <button type="button" className="text-[#67757F] hover:text-[#162128] text-base leading-none">
                  ✕
                </button>
              </div>

              <div>
                <label className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                  CARGO
                </label>
                <input
                  type="text"
                  defaultValue="Asistente de Soporte TI"
                  readOnly
                  className="w-full border border-[#DCE3EA] rounded px-3 py-1.5 text-xs bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                  ORGANIZACIÓN
                </label>
                <input
                  type="text"
                  defaultValue="Centro de Cómputo Universidad de Lima"
                  readOnly
                  className="w-full border border-[#DCE3EA] rounded px-3 py-1.5 text-xs bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    DESDE
                  </label>
                  <input
                    type="text"
                    defaultValue="03/2025"
                    readOnly
                    className="w-full border border-[#DCE3EA] rounded px-3 py-1.5 text-xs bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                    HASTA
                  </label>
                  <input
                    type="text"
                    placeholder="--/--"
                    disabled
                    className="w-full border border-[#DCE3EA] rounded px-3 py-1.5 text-xs bg-gray-50 text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="actualmente" defaultChecked disabled className="rounded text-[#123A5F]" />
                <label htmlFor="actualmente" className="text-xs text-[#162128]">
                  Trabajo aquí actualmente
                </label>
              </div>

              <div>
                <label className="text-[11px] font-bold tracking-wider text-[#67757F] uppercase block mb-1">
                  DESCRIPCIÓN
                </label>
                <textarea
                  rows="3"
                  defaultValue="Atención de incidencias de laboratorios y elaboración del reporte semanal de tickets."
                  readOnly
                  className="w-full border border-[#DCE3EA] rounded px-3 py-1.5 text-xs bg-white focus:outline-none resize-none"
                ></textarea>
                <p className="text-[10px] text-[#67757F] mt-1">Describe tus funciones y un logro concreto.</p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  className="w-full bg-[#123A5F] text-white text-xs font-medium py-2 rounded hover:bg-[#0C2A46]"
                >
                  Guardar experiencia
                </button>
                <button
                  type="button"
                  className="w-full border border-[#DCE3EA] text-xs font-medium py-2 rounded text-[#67757F] hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}