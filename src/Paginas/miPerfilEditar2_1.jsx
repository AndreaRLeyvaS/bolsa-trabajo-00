import { Link } from 'react-router-dom';

export default function MiPerfilEditar2_1() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#F7F9FB] min-h-screen">
      {/* Aviso de guardado */}
      <div
        role="status"
        className="mb-4 flex items-center justify-between rounded-md border border-[#DCE3EA] border-l-4 border-l-[#1E7F4D] bg-white px-4 py-3 text-sm font-medium text-[#162128]"
      >
        <span>
          <span className="mr-3 text-[#1E7F4D]">✓</span>
          Tus datos personales se guardaron correctamente.
        </span>
        <button
          type="button"
          aria-label="Cerrar aviso"
          className="text-[#67757F] hover:text-[#162128]"
        >
          ✕
        </button>
      </div>

      <form>
        {/* Breadcrumb y cabecera */}
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <div className="text-sm text-[#67757F] mb-1">
              <Link to="/" className="hover:underline">Inicio</Link> ·{' '}
              <Link to="/mi-perfil" className="hover:underline">Mi perfil</Link> ·{' '}
              <span className="text-[#162128] font-medium">Editar datos personales</span>
            </div>
            <h1 className="text-[28px] font-semibold text-[#162128]">Editar datos personales</h1>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <Link
              to="/mi-perfil"
              className="px-4 py-2 border border-[#DCE3EA] text-[#162128] bg-white rounded-md text-sm font-semibold hover:bg-gray-50 transition shadow-sm"
            >
              Cancelar
            </Link>
            <button
              type="button"
              className="px-4 py-2 bg-[#123A5F] text-white rounded-md text-sm font-semibold hover:bg-[#0C2A46] transition shadow-sm"
            >
              Guardar cambios
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Menú lateral */}
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

          {/* Tarjeta del formulario */}
          <div className="flex-1 bg-white p-6 rounded-md border border-[#DCE3EA]">
            {/* Foto de perfil */}
            <div className="flex flex-col sm:flex-row gap-5 pb-6 mb-6 border-b border-[#DCE3EA]">
              <div className="w-[88px] h-[88px] flex-shrink-0 flex items-center justify-center border border-[#DCE3EA] bg-[repeating-linear-gradient(135deg,#F7F9FB_0px,#F7F9FB_8px,#E6EEF5_8px,#E6EEF5_16px)]">
                <span className="text-xs text-[#67757F]">foto</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#162128]">Fotografía de perfil</p>
                <p className="text-xs text-[#67757F] mt-1">JPG o PNG, mínimo 400 × 400 px, hasta 2 MB.</p>
                <div className="mt-3 flex items-center gap-4">
                  <button
                    type="button"
                    className="px-3 py-2 border border-[#123A5F] text-[#123A5F] rounded-md text-xs font-semibold hover:bg-[#E6EEF5]"
                  >
                    Subir nueva
                  </button>
                  <button type="button" className="text-xs font-semibold text-[#B42318] hover:underline">
                    Quitar
                  </button>
                </div>
              </div>
            </div>

            {/* Campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label htmlFor="nombres" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Nombres</label>
                <input id="nombres" name="nombres" type="text" required
                  defaultValue="Mariana Lucía" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]" />
              </div>
              <div>
                <label htmlFor="apellidos" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Apellidos</label>
                <input id="apellidos" name="apellidos" type="text" required
                  defaultValue="Quispe Ramírez" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]" />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Teléfono</label>
                <input id="telefono" name="telefono" type="tel"
                  defaultValue="987 654 321" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]" />
              </div>
              <div>
                <label htmlFor="distrito" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Distrito de residencia</label>
                <select id="distrito" name="distrito"
                  defaultValue="La Molina" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]">
                  <option>La Molina</option>
                  <option>Surco</option>
                  <option>San Isidro</option>
                  <option>Miraflores</option>
                  <option>San Borja</option>
                  <option>Ate</option>
                </select>
              </div>

              <div>
                <label htmlFor="carrera" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Carrera</label>
                <select id="carrera" name="carrera"
                  defaultValue="Ingeniería de Sistemas" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]">
                  <option>Ingeniería de Sistemas</option>
                  <option>Ingeniería Industrial</option>
                  <option>Comunicaciones</option>
                  <option>Administración</option>
                </select>
              </div>
              <div>
                <label htmlFor="ciclo" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Ciclo</label>
                <select id="ciclo" name="ciclo"
                  defaultValue="Octavo" className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#162128] outline-none focus:border-[#123A5F]">
                  <option>Sexto</option>
                  <option>Séptimo</option>
                  <option>Octavo</option>
                  <option>Noveno</option>
                  <option>Décimo</option>
                </select>
              </div>
            </div>

            {/* Resumen profesional con contador */}
            <div className="mt-5">
              <label htmlFor="resumen" className="block text-[11px] font-semibold text-[#67757F] uppercase tracking-wider mb-2">Resumen profesional</label>
              <textarea
                id="resumen"
                name="resumen"
                rows={4}
                defaultValue="Estudiante de octavo ciclo de Ingeniería de Sistemas con interés en desarrollo web y analítica de datos. Busco prácticas híbridas en Lima para aplicar React y SQL en un equipo de producto."
                className="w-full rounded-md border border-[#DCE3EA] bg-white p-3 text-sm leading-[22px] text-[#162128] outline-none focus:border-[#123A5F]"
              />
              <div className="mt-1 flex justify-between text-xs text-[#67757F]">
                <span>Describe tu interés profesional en 2 o 3 frases.</span>
                <span>198 / 600</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}