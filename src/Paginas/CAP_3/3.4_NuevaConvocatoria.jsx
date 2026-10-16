import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NuevaConvocatoria() {
  // Estados para chips interactivos de Carreras y Habilidades
  const [carreras, setCarreras] = useState(['Ingeniería de Sistemas', 'Ingeniería Industrial']);
  const [habilidades, setHabilidades] = useState(['React', 'SQL']);

  // Estado para simular la Pieza Suelta 3.4 (Errores de validación)
  const [simularErrores, setSimularErrores] = useState(false);

  const eliminarCarrera = (carreraAEliminar) => {
    setCarreras(carreras.filter(c => c !== carreraAEliminar));
  };

  const eliminarHabilidad = (habilidadAEliminar) => {
    setHabilidades(habilidades.filter(h => h !== habilidadAEliminar));
  };

  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans">
      
      {/* 1. SIDEBAR LATERAL (240px) */}
      <aside className="w-60 bg-white border-r border-[#E5E7EB] py-6 shrink-0 hidden md:block">
        
        {/* Bloque CONVOCATORIAS (Nueva convocatoria Activo) */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            CONVOCATORIAS
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/convocatorias" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Mis convocatorias
            </Link>
            <Link to="/empresa/nueva-convocatoria" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
              <span>■</span> Nueva convocatoria
            </Link>
            <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Bandeja de postulantes
            </Link>
          </nav>
        </div>

        {/* Bloque EMPRESA */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            EMPRESA
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/perfil" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Perfil de la empresa
            </Link>
            <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Reseñas recibidas
            </Link>
          </nav>
        </div>

        {/* Bloque CUENTA */}
        <div>
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            CUENTA
          </h3>
          <nav className="space-y-0.5">
            <Link to="/cambiar-password" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Cambiar contraseña
            </Link>
            <Link to="/login" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Cerrar sesión
            </Link>
          </nav>
        </div>

      </aside>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Convocatorias <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Nueva convocatoria</span>
        </div>

        {/* CONTROLES DE DEMO (Para activar Pieza Suelta 3.4 en la presentación) */}
        <div className="mb-4 p-2 bg-gray-100 rounded border border-gray-300 flex items-center gap-2 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer font-medium text-[#374151]">
            <input 
              type="checkbox" 
              checked={simularErrores} 
              onChange={() => setSimularErrores(!simularErrores)} 
            />
            Simular Pieza Suelta 3.4 (Errores de validación)
          </label>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* Encabezado: Título + Botones principales */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E7EB]">
            <h1 className="text-2xl font-bold text-[#1A2B4C]">Nueva convocatoria</h1>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition"
              >
                Guardar como borrador
              </button>
              <button
                type="submit"
                onClick={() => setSimularErrores(!simularErrores)}
                className="px-5 py-2 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm"
              >
                Publicar convocatoria
              </button>
            </div>
          </div>

          {/* BANNER DE ERROR (Aparece al simular errores) */}
          {simularErrores && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
              <p className="font-bold mb-1">Revisa 3 campos antes de publicar.</p>
            </div>
          )}

          <div className="space-y-8 bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
            
            {/* SECCIÓN 1: PUESTO */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3F4F6]">
                1 - PUESTO
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    TÍTULO DEL PUESTO
                  </label>
                  <input
                    type="text"
                    defaultValue={simularErrores ? "" : "Practicante de Desarrollo de Software"}
                    placeholder="Ej. Practicante de Desarrollo de Software"
                    className={`w-full p-2.5 border rounded text-xs text-[#1A2B4C] focus:outline-none ${
                      simularErrores 
                        ? 'border-red-500 bg-red-50 text-red-900' 
                        : 'border-[#E5E7EB] focus:border-[#1A2B4C]'
                    }`}
                  />
                  {simularErrores && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      Ingresa el título del puesto.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    DESCRIPCIÓN DE LA PRÁCTICA
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Apoyarás al equipo de producto en el desarrollo de módulos web internos con React y en la atención de requerimientos de los usuarios."
                    placeholder="Describe el objetivo del puesto..."
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    FUNCIONES PRINCIPALES
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="• Desarrollo de componentes en React.&#10;• Pruebas y corrección de incidencias."
                    placeholder="Lista las funciones principales..."
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: PERFIL BUSCADO */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3F4F6]">
                2 - PERFIL BUSCADO
              </h2>

              <div className="space-y-4">
                {/* Chips de Carreras */}
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-2">
                    CARRERAS
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {carreras.map((carrera, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#E5E7EB] text-[#1A2B4C] text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {carrera}
                        <button
                          type="button"
                          onClick={() => eliminarCarrera(carrera)}
                          className="text-[#6B7280] hover:text-red-600 font-bold ml-1"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 border border-dashed border-[#1A2B4C] text-[#1A2B4C] text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-50 transition"
                    >
                      + agregar
                    </button>
                  </div>
                </div>

                {/* Ciclo Mínimo */}
                <div className="max-w-xs">
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    CICLO MÍNIMO
                  </label>
                  <select
                    defaultValue="Séptimo"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
                  >
                    <option value="Quinto">Quinto</option>
                    <option value="Sexto">Sexto</option>
                    <option value="Séptimo">Séptimo</option>
                    <option value="Octavo">Octavo</option>
                    <option value="Noveno">Noveno</option>
                    <option value="Décimo">Décimo</option>
                  </select>
                </div>

                {/* Chips de Habilidades Deseadas */}
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-2">
                    HABILIDADES DESEADAS
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {habilidades.map((habilidad, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#E5E7EB] text-[#1A2B4C] text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {habilidad}
                        <button
                          type="button"
                          onClick={() => eliminarHabilidad(habilidad)}
                          className="text-[#6B7280] hover:text-red-600 font-bold ml-1"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 border border-dashed border-[#1A2B4C] text-[#1A2B4C] text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-50 transition"
                    >
                      + agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN 3: CONDICIONES */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3F4F6]">
                3 - CONDICIONES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    MODALIDAD
                  </label>
                  <select
                    defaultValue="Híbrido"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
                  >
                    <option value="Presencial">Presencial</option>
                    <option value="Híbrido">Híbrido</option>
                    <option value="Remoto">Remoto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    DISTRITO
                  </label>
                  <input
                    type="text"
                    defaultValue="San Isidro"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    JORNADA
                  </label>
                  <select
                    defaultValue="Medio tiempo"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
                  >
                    <option value="Medio tiempo">Medio tiempo</option>
                    <option value="Tiempo completo">Tiempo completo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    SUBVENCIÓN MENSUAL
                  </label>
                  <input
                    type="text"
                    defaultValue={simularErrores ? "S/ 850.00" : "S/ 1,850.00"}
                    className={`w-full p-2.5 border rounded text-xs text-[#1A2B4C] focus:outline-none ${
                      simularErrores 
                        ? 'border-red-500 bg-red-50 text-red-900' 
                        : 'border-[#E5E7EB] focus:border-[#1A2B4C]'
                    }`}
                  />
                  {simularErrores ? (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      Debe estar entre S/ 1,025.00 y S/ 2,500.00
                    </p>
                  ) : (
                    <p className="text-[11px] text-[#6B7280] mt-1">
                      Entre S/ 1,025.00 y S/ 2,500.00
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    BENEFICIOS
                  </label>
                  <input
                    type="text"
                    defaultValue="Movilidad, seguro EPS y horario flexible en época de exámenes."
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>
              </div>
            </div>

            {/* SECCIÓN 4: PUBLICACIÓN */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3F4F6]">
                4 - PUBLICACIÓN
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    FECHA DE PUBLICACIÓN
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-09-07"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    FECHA DE CIERRE
                  </label>
                  <input
                    type="date"
                    defaultValue={simularErrores ? "2026-09-01" : "2026-09-30"}
                    className={`w-full p-2.5 border rounded text-xs text-[#1A2B4C] focus:outline-none ${
                      simularErrores 
                        ? 'border-red-500 bg-red-50 text-red-900' 
                        : 'border-[#E5E7EB] focus:border-[#1A2B4C]'
                    }`}
                  />
                  {simularErrores && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      El cierre debe ser posterior a la fecha de publicación.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    VACANTES
                  </label>
                  <input
                    type="number"
                    defaultValue="2"
                    min="1"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>
              </div>

              {/* Checkbox de Notificación */}
              <div className="flex items-center gap-2 mt-4 pt-2">
                <input
                  type="checkbox"
                  id="avisarCorreo"
                  defaultChecked
                  className="w-4 h-4 text-[#1A2B4C] rounded border-[#E5E7EB] focus:ring-[#1A2B4C]"
                />
                <label htmlFor="avisarCorreo" className="text-xs text-[#374151] font-medium cursor-pointer">
                  Avisarme por correo cada vez que llegue una postulación
                </label>
              </div>

              {/* Texto explicativo inferior */}
              <p className="text-xs text-[#6B7280] mt-4 pt-3 border-t border-[#F3F4F6] leading-relaxed">
                Al publicar, la convocatoria queda visible para todos los estudiantes cuya carrera coincida. Puedes editarla o cerrarla en cualquier momento desde «Mis convocatorias».
              </p>
            </div>

          </div>

        </form>

      </main>
    </div>
  );
}