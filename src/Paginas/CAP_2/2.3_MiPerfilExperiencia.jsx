import React, { useState } from "react";

export default function MiPerfilExperiencia() {
  const [panelAbierto, setPanelAbierto] = useState(true);
  const [trabajoActual, setTrabajoActual] = useState(true);

  const [formData, setFormData] = useState({
    cargo: "Asistente de Soporte TI",
    organizacion: "Centro de Cómputo — Universidad de Lima",
    desde: "03/2025",
    hasta: "",
    descripcion: "Atención de incidencias de laboratorios y elaboración del reporte semanal de tickets."
  });

  const [experiencias, setExperiencias] = useState([
    {
      id: 1,
      cargo: "Asistente de Soporte TI",
      actual: true,
      organizacion: "Centro de Cómputo — Universidad de Lima",
      periodo: "03/2025 — actualidad",
      descripcion: "Atención de incidencias de laboratorios y elaboración del reporte semanal de tickets."
    },
    {
      id: 2,
      cargo: "Practicante de Analítica (proyecto de curso)",
      actual: false,
      organizacion: "Cátedra de Bases de Datos — Universidad de Lima",
      periodo: "08/2025 — 12/2025",
      descripcion: "Modelo de datos y tablero de indicadores para una cadena de farmacias ficticia. Reduje en 40 % el tiempo de consulta del reporte de ventas."
    },
    {
      id: 3,
      cargo: "Voluntaria de logística",
      actual: false,
      organizacion: "Feria de Innovación Universitaria",
      periodo: "04/2025 — 05/2025",
      descripcion: "Coordinación de 18 stands y control de asistencia de 600 visitantes."
    }
  ]);

  const eliminarExperiencia = (id) => {
    setExperiencias(experiencias.filter((exp) => exp.id !== id));
  };

  return (
    <div className="flex w-full min-h-[calc(100vh-140px)] bg-white justify-between">
      {/* Contenedor Principal: se expande para ocupar todo el espacio disponible sin dejar hueco blanco */}
      <div className="flex-1 px-8 py-6">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-1">
          Inicio · Mi perfil · <span className="font-semibold text-gray-900">Experiencia</span>
        </div>

        {/* Título y Botón Agregar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0F172A]">Experiencia</h1>
          <button
            onClick={() => setPanelAbierto(true)}
            className="bg-[#16385C] hover:bg-[#0f2742] text-white text-xs font-semibold px-4 py-2 rounded shadow-sm transition-colors cursor-pointer"
          >
            + Agregar experiencia
          </button>
        </div>

        {/* Contenido: Menú lateral izquierdo + Tarjeta de Experiencias expandida */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Menú lateral izquierdo */}
          <div className="w-full md:w-52 shrink-0 bg-white border border-gray-200 rounded-lg p-2 flex flex-col space-y-1">
            <button className="text-left px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 rounded">
              Datos personales
            </button>
            <button className="text-left px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 rounded">
              Habilidades
            </button>
            <button className="text-left px-3 py-2 text-xs font-semibold text-[#16385C] bg-[#EBF3FC] rounded font-bold">
              Experiencia
            </button>
            <button className="text-left px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 rounded">
              Contraseña
            </button>
          </div>

          {/* Tarjeta con la Línea de Tiempo de Experiencias (ocupa todo el ancho restante) */}
          <div className="flex-1 w-full bg-white border border-gray-200 rounded-lg p-6">
            <div className="relative pl-6 space-y-8">
              {/* Línea vertical continua */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-gray-200"></div>

              {experiencias.map((item) => (
                <div key={item.id} className="relative">
                  {/* Punto azul de la línea de tiempo */}
                  <div className="absolute -left-[23px] top-1.5 w-3 h-3 bg-[#16385C] rounded-full border-2 border-white ring-1 ring-[#16385C]"></div>

                  {/* Cabecera del item: Cargo, Tag y Botones Editar/Eliminar */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-gray-900">{item.cargo}</h3>
                      {item.actual && (
                        <span className="bg-[#EBF7EE] text-[#1E7E34] text-[10px] font-medium px-2 py-0.5 rounded">
                          Actualmente
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <button className="text-[#16385C] hover:underline font-medium cursor-pointer">
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarExperiencia(item.id)}
                        className="text-[#C53030] hover:underline font-medium cursor-pointer"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  {/* Organización */}
                  <p className="text-xs font-bold text-gray-800 mt-1">{item.organizacion}</p>

                  {/* Periodo */}
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.periodo}</p>

                  {/* Descripción */}
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Panel Lateral Derecho: fijado al extremo derecho con su propio borde */}
      {panelAbierto && (
        <aside className="w-[380px] border-l border-gray-200 bg-white flex flex-col justify-between shrink-0 shadow-sm ml-auto">
          <div className="p-6">
            {/* Cabecera del Panel */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h2 className="text-base font-bold text-gray-900">Agregar experiencia</h2>
              <button
                onClick={() => setPanelAbierto(false)}
                className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer leading-none"
              >
                ✕
              </button>
            </div>

            {/* Formulario */}
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  CARGO
                </label>
                <input
                  type="text"
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#16385C]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  ORGANIZACIÓN
                </label>
                <input
                  type="text"
                  value={formData.organizacion}
                  onChange={(e) => setFormData({ ...formData, organizacion: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#16385C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    DESDE
                  </label>
                  <input
                    type="text"
                    value={formData.desde}
                    onChange={(e) => setFormData({ ...formData, desde: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#16385C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    HASTA
                  </label>
                  <input
                    type="text"
                    placeholder="— — / — —"
                    disabled={trabajoActual}
                    value={trabajoActual ? "— — / — —" : formData.hasta}
                    onChange={(e) => setFormData({ ...formData, hasta: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-200 bg-gray-50 rounded text-gray-400 focus:outline-none text-center"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="trabajoActual"
                  checked={trabajoActual}
                  onChange={(e) => setTrabajoActual(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#16385C] border-gray-300 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="trabajoActual" className="text-xs text-gray-700 cursor-pointer font-medium">
                  Trabajo aquí actualmente
                </label>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  DESCRIPCIÓN
                </label>
                <textarea
                  rows={4}
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#16385C] resize-none"
                />
                <span className="block text-[10px] text-gray-400 mt-1">
                  Describe tus funciones y un logro concreto.
                </span>
              </div>
            </form>
          </div>

          {/* Botones inferiores del panel */}
          <div className="p-4 border-t border-gray-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setPanelAbierto(false)}
              className="flex-1 bg-[#16385C] hover:bg-[#0f2742] text-white text-xs font-bold py-2.5 rounded transition cursor-pointer text-center"
            >
              Guardar experiencia
            </button>
            <button
              type="button"
              onClick={() => setPanelAbierto(false)}
              className="px-4 py-2 text-xs font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}