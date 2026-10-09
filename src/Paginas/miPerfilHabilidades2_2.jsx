import { Link } from 'react-router-dom';

export default function MiPerfilHabilidades2_2() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#F7F9FB] min-h-screen">
      {/* Breadcrumb y cabecera */}
      <div className="mb-6">
        <div className="text-sm text-[#67757F] mb-1">
          <Link to="/" className="hover:underline">Inicio</Link> ·{' '}
          <Link to="/mi-perfil" className="hover:underline">Mi perfil</Link> ·{' '}
          <span className="text-[#162128] font-medium">Habilidades</span>
        </div>
        <h1 className="text-[28px] font-semibold text-[#162128]">Habilidades</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Menú lateral */}
        <div className="w-full md:w-56 shrink-0">
          <nav className="flex flex-col space-y-1 bg-white border border-[#DCE3EA] rounded-md p-2">
            <Link to="/mi-perfil" className="px-4 py-2 text-[#67757F] font-medium hover:bg-gray-50 rounded-md transition-colors">
              Datos personales
            </Link>
            <Link to="/mi-perfil/habilidades" className="px-4 py-2 bg-[#E6EEF5] text-[#123A5F] font-semibold rounded-md">
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

        <div className="flex-1 space-y-4">
          {/* Tarjeta 1: Agregar una habilidad */}
          <div className="bg-white p-6 rounded-md border border-[#DCE3EA]">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-lg font-semibold text-[#123A5F]">Agregar una habilidad</h2>
              <span className="text-xs text-[#67757F]">9 de 20 habilidades registradas</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
              <div className="flex-1">
                <label htmlFor="habilidad" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">
                  Habilidad
                </label>
                <input
                  id="habilidad"
                  type="text"
                  defaultValue="Post"
                  className="h-12 w-full rounded-md border border-[#123A5F] bg-white px-3 text-sm text-[#162128] outline-none"
                />
              </div>

              <div className="sm:w-48">
                <label htmlFor="nivel" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">
                  Nivel de dominio
                </label>
                <select
                  id="nivel"
                  defaultValue="Intermedio"
                  className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]"
                >
                  <option>Básico</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
              </div>

              <button
                type="button"
                className="h-12 px-6 bg-[#123A5F] text-white rounded-md text-sm font-semibold hover:bg-[#0C2A46] transition"
              >
                Agregar
              </button>
            </div>

            {/* Sugerencias del autocompletado */}
            <ul className="mt-3 w-full sm:w-[calc(100%-13rem-7rem)] border border-[#DCE3EA] rounded-md text-sm text-[#162128] overflow-hidden">
              <li className="px-3 py-2 bg-[#E6EEF5]">PostgreSQL</li>
              <li className="px-3 py-2 border-t border-[#DCE3EA]">Postman</li>
              <li className="px-3 py-2 border-t border-[#DCE3EA]">Power BI</li>
            </ul>

            <p className="mt-4 text-xs text-[#67757F]">
              Sugerencias según tu carrera. También puedes escribir una habilidad nueva.
            </p>
          </div>

          {/* Tarjeta 2: Mis habilidades */}
          <div className="bg-white p-6 rounded-md border border-[#DCE3EA]">
            <h2 className="text-lg font-semibold text-[#123A5F] mb-4">Mis habilidades</h2>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                JavaScript
                <span className="rounded bg-[#E3F4EA] px-2 py-0.5 text-[10px] font-semibold text-[#1E7F4D]">Avanzado</span>
                <button type="button" aria-label="Quitar JavaScript" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                React
                <span className="rounded bg-[#E3F4EA] px-2 py-0.5 text-[10px] font-semibold text-[#1E7F4D]">Avanzado</span>
                <button type="button" aria-label="Quitar React" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                SQL
                <span className="rounded bg-[#E3F4EA] px-2 py-0.5 text-[10px] font-semibold text-[#1E7F4D]">Avanzado</span>
                <button type="button" aria-label="Quitar SQL" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Python
                <span className="rounded bg-[#E6EEF5] px-2 py-0.5 text-[10px] font-semibold text-[#123A5F]">Intermedio</span>
                <button type="button" aria-label="Quitar Python" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Power BI
                <span className="rounded bg-[#E6EEF5] px-2 py-0.5 text-[10px] font-semibold text-[#123A5F]">Intermedio</span>
                <button type="button" aria-label="Quitar Power BI" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Git
                <span className="rounded bg-[#E6EEF5] px-2 py-0.5 text-[10px] font-semibold text-[#123A5F]">Intermedio</span>
                <button type="button" aria-label="Quitar Git" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Excel avanzado
                <span className="rounded bg-[#E6EEF5] px-2 py-0.5 text-[10px] font-semibold text-[#123A5F]">Intermedio</span>
                <button type="button" aria-label="Quitar Excel avanzado" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Figma
                <span className="rounded bg-[#F1F3F5] px-2 py-0.5 text-[10px] font-semibold text-[#67757F]">Básico</span>
                <button type="button" aria-label="Quitar Figma" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
              <span className="inline-flex items-center gap-2 border border-[#DCE3EA] rounded-md px-3 py-2 text-sm text-[#162128]">
                Docker
                <span className="rounded bg-[#F1F3F5] px-2 py-0.5 text-[10px] font-semibold text-[#67757F]">Básico</span>
                <button type="button" aria-label="Quitar Docker" className="text-[#67757F] hover:text-[#162128]">✕</button>
              </span>
            </div>

            <p className="mt-5 text-xs text-[#67757F]">
              Las habilidades ordenadas por nivel se muestran así a las empresas en tu perfil público.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
