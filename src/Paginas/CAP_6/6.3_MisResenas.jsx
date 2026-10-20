import { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente auxiliar de estrellas ★
function EstrellasPuntaje({ valor, size = 18 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          style={{ fontSize: `${size}px`, lineHeight: 1, color: index < valor ? '#F59E0B' : '#D1D5DB' }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function MisResenas() {
  // Lista inicial con las 2 reseñas publicadas requeridas por el PDF
  const [resenas, setResenas] = useState([
    {
      id: 1,
      estrellas: 5,
      titulo: "Buen acompañamiento y proyectos reales",
      esAnonima: false,
      comentario: "Entré al equipo de analítica y desde el primer mes trabajé con datos reales de tiendas. Mi jefa revisaba mis entregables cada semana. La carga se pone alta en cierre de mes, pero siempre respetaron mis horarios de clase.",
      empresa: "Retail Terravista",
      puesto: "Practicante de Inteligencia de Negocios",
      periodo: "03/2026 — 08/2026",
      fechaPublicada: "05/09/2026"
    },
    {
      id: 2,
      estrellas: 3,
      titulo: "Aprendí mucho, pero poca guía al inicio",
      esAnonima: true,
      comentario: "Las tareas eran interesantes y aprendí Power BI en el camino, pero las primeras tres semanas no tuve un mentor asignado. Mejoró bastante cuando entró la nueva jefa de área.",
      empresa: "Nexolink Telecom",
      puesto: "Practicante de Soporte TI",
      periodo: "08/2025 — 12/2025",
      fechaPublicada: "18/01/2026"
    }
  ]);

  // Estado para el modal de confirmación de eliminación
  const [modalEliminar, setModalEliminar] = useState(null);

  // Función para eliminar una reseña
  const eliminarResena = () => {
    if (!modalEliminar) return;
    setResenas(resenas.filter(r => r.id !== modalEliminar.id));
    setModalEliminar(null);
  };

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* BARRA DE DEMO PARA PROBAR PIEZA SUELTA (6.3 SIN RESEÑAS) */}
      <div className="bg-gray-100 border-b border-gray-300 px-6 py-2">
        <div className="max-w-[900px] mx-auto flex items-center justify-between text-xs">
          <span className="font-bold text-[#1A2B4C]">Probar Pieza Suelta 6.3 (Estado Vacío):</span>
          <div className="flex gap-2">
            <button
              onClick={() => setResenas([])}
              className="px-3 py-1 bg-white border border-gray-300 rounded text-[#374151] hover:bg-gray-50 font-medium"
            >
              Simular Lista Vacía
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 bg-[#1A2B4C] text-white rounded font-medium"
            >
              Restablecer 2 Reseñas
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Mi perfil <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Mis reseñas</span>
        </div>

        {/* Encabezado Principal */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">Mis reseñas</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            {resenas.length} {resenas.length === 1 ? 'reseña publicada' : 'reseñas publicadas'} · 1 empresa pendiente de reseñar
          </p>
        </div>

        {/* LISTADO DE RESEÑAS O PIEZA SUELTA ESTADO VACÍO */}
        {resenas.length > 0 ? (
          <div className="space-y-4">
            {resenas.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm hover:border-[#1A2B4C] transition space-y-3"
              >
                {/* Header de la card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F3F4F6] pb-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <EstrellasPuntaje valor={item.estrellas} size={18} />
                    <h2 className="text-base font-bold text-[#1A2B4C]">{item.titulo}</h2>
                    
                    {/* Badge de Anónima si aplica */}
                    {item.esAnonima && (
                      <span className="bg-[#EEF2F7] text-[#1A2B4C] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#DBE3EE]">
                        Anónima
                      </span>
                    )}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
                    <Link
                      to="/empresa/escribir-resena"
                      className="text-[#1A2B4C] hover:underline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => setModalEliminar(item)}
                      className="text-[#DC2626] hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                {/* Comentario */}
                <p className="text-xs text-[#374151] leading-relaxed">
                  "{item.comentario}"
                </p>

                {/* Metainformación de la práctica */}
                <p className="text-[11px] text-[#6B7280] pt-1">
                  <strong className="text-[#1A2B4C]">{item.empresa}</strong> - {item.puesto} · {item.periodo} · <span className="text-[#6B7280]">publicada el {item.fechaPublicada}</span>
                </p>

              </div>
            ))}
          </div>
        ) : (
          /* PIEZA SUELTA 6.3: ESTADO VACÍO SIN RESEÑAS */
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-12 text-center my-8 shadow-sm max-w-[560px] mx-auto">
            <div className="w-24 h-24 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-[#1A2B4C]">
              ★
            </div>
            <h2 className="text-xl font-bold text-[#1A2B4C] mb-2">
              Todavía no publicas reseñas
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-md mx-auto mb-6">
              Cuando termines una práctica podrás reseñar a la empresa y ayudar a los siguientes postulantes de tu carrera.
            </p>
            <Link
              to="/postulaciones"
              className="inline-block px-6 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
            >
              Ver empresas donde practiqué
            </Link>
          </div>
        )}

        {/* MODAL DE CONFIRMACIÓN PARA ELIMINAR RESEÑA */}
        {modalEliminar && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-[#E5E7EB]">
              <h3 className="text-base font-bold text-[#1A2B4C] mb-2">
                ¿Eliminar esta reseña?
              </h3>
              <p className="text-xs text-[#374151] mb-4 leading-relaxed">
                Estás por eliminar tu opinión sobre <strong>«{modalEliminar.empresa}»</strong>. Esta acción eliminará tu aporte de las métricas públicas de la empresa.
              </p>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setModalEliminar(null)}
                  className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={eliminarResena}
                  className="px-4 py-2 bg-[#DC2626] text-white text-xs font-bold rounded hover:bg-red-700 transition"
                >
                  Sí, eliminar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}