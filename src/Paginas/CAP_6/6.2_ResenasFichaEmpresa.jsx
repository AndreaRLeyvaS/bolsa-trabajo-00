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

export default function ResenasFichaEmpresa() {
  const [tabFicha, setTabFicha] = useState('resenas'); // 'convocatorias' | 'resenas'
  const [filtroEstrellas, setFiltroEstrellas] = useState('Todas');

  // Listado de reseñas en la ficha según el PDF
  const resenasList = [
    {
      id: 1,
      estrellas: 5,
      titulo: "Mentoría real desde la primera semana",
      fecha: "02/09/2026",
      comentario: "Me asignaron un mentor que revisaba mis campañas cada viernes. Salí sabiendo armar un reporte de resultados de punta a punta y con dos casos concretos para mi portafolio.",
      autor: "Camila S.",
      puesto: "Practicante de Marketing Digital",
      periodo: "03/2026 — 08/2026"
    },
    {
      id: 2,
      estrellas: 5,
      titulo: "Buen acompañamiento y proyectos reales",
      fecha: "05/09/2026",
      comentario: "Trabajé con datos reales de tiendas desde el primer mes. La carga se pone alta en cierre de mes, pero siempre respetaron mis horarios de clase.",
      autor: "Mariana Q.",
      puesto: "Practicante de Inteligencia de Negocios",
      periodo: "03/2026 — 08/2026"
    },
    {
      id: 3,
      estrellas: 4,
      titulo: "Equipo joven y muy dispuesto a enseñar",
      fecha: "18/08/2026",
      comentario: "El área de operaciones me integró rápido y pude proponer mejoras que sí se implementaron. Lo único: el proceso de inducción podría estar mejor documentado.",
      autor: "Anónimo",
      puesto: "Practicante de Mejora de Procesos",
      periodo: "01/2026 — 06/2026"
    }
  ];

  // Desglose de barras (34 totales)
  const barrasDistribucion = [
    { estrellas: 5, cantidad: 14, porcentaje: 41 },
    { estrellas: 4, cantidad: 12, porcentaje: 35 },
    { estrellas: 3, cantidad: 5, porcentaje: 15 },
    { estrellas: 2, cantidad: 2, porcentaje: 6 },
    { estrellas: 1, cantidad: 1, porcentaje: 3 }
  ];

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Empresas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Retail Terravista</span>
        </div>

        {/* HERO ENCABEZADO DE EMPRESA */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-[#EEF2F7] rounded-lg text-[#1A2B4C] font-bold text-2xl flex items-center justify-center shrink-0">
              RT
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1A2B4C]">Retail Terravista</h1>
              <p className="text-xs text-[#6B7280] mt-1">
                Retail · Más de 500 colaboradores · Surco, Lima
              </p>
            </div>
          </div>

          <Link
            to="/empresa/escribir-resena"
            className="px-5 py-2.5 border border-[#1A2B4C] bg-white text-[#1A2B4C] text-xs font-bold rounded-md hover:bg-gray-50 transition shrink-0"
          >
            Escribir una reseña
          </Link>
        </div>

        {/* TABS DE LA FICHA */}
        <div className="border-b border-[#E5E7EB] mb-6 flex gap-8 text-sm font-medium">
          <button
            onClick={() => setTabFicha('convocatorias')}
            className={`pb-3 text-xs font-semibold transition ${
              tabFicha === 'convocatorias'
                ? 'text-[#1A2B4C] border-b-2 border-[#1A2B4C]'
                : 'text-[#6B7280] hover:text-[#1A2B4C]'
            }`}
          >
            Convocatorias vigentes (3)
          </button>

          <button
            onClick={() => setTabFicha('resenas')}
            className={`pb-3 text-xs font-semibold transition ${
              tabFicha === 'resenas'
                ? 'text-[#1A2B4C] border-b-2 border-[#1A2B4C]'
                : 'text-[#6B7280] hover:text-[#1A2B4C]'
            }`}
          >
            Reseñas (34)
          </button>
        </div>

        {/* ESTRUCTURA DE 2 COLUMNAS (8 COLS / 4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA: RESEÑAS Y RESUMEN (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SOBRE LA EMPRESA */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-2">
              <h2 className="text-base font-bold text-[#1A2B4C]">Sobre la empresa</h2>
              <p className="text-xs text-[#374151] leading-relaxed">
                Somos una cadena líder en el sector retail con presencia a nivel nacional. Nos enfocamos en ofrecer una experiencia de compra innovadora y sostenida por células de trabajo multidisciplinarias donde los practicantes participan activamente en proyectos de impacto directo.
              </p>
            </div>

            {/* BLOQUE CONSOLA RESUMEN DE CALIFICACIÓN */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Promedio Grande (Col 4) */}
                <div className="md:col-span-4 text-center md:border-r border-[#F3F4F6] md:pr-4">
                  <p className="text-5xl font-bold text-[#1A2B4C]">4.1</p>
                  <div className="flex justify-center my-2">
                    <EstrellasPuntaje valor={4} size={22} />
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    34 reseñas de practicantes
                  </p>
                </div>

                {/* Barras de Distribución (Col 8) */}
                <div className="md:col-span-8 space-y-2">
                  {barrasDistribucion.map((item) => (
                    <div key={item.estrellas} className="flex items-center gap-3 text-xs">
                      <span className="w-8 font-medium text-[#374151]">{item.estrellas} ★</span>
                      <div className="flex-1 bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#F59E0B] h-full rounded-full"
                          style={{ width: `${item.porcentaje}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-[#6B7280]">{item.cantidad}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* FILTRAR POR PUNTAJE */}
            <div>
              <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                FILTRAR POR PUNTAJE
              </span>
              <div className="flex flex-wrap gap-2">
                {['Todas', '5 ★', '4 ★', '3 ★', '2 ★', '1 ★'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFiltroEstrellas(item)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      filtroEstrellas === item
                        ? 'bg-[#1A2B4C] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* LISTA DE RESEÑAS */}
            <div className="space-y-4 pt-2">
              {resenasList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <EstrellasPuntaje valor={item.estrellas} size={18} />
                      <h3 className="text-sm font-bold text-[#1A2B4C]">{item.titulo}</h3>
                    </div>
                    <span className="text-xs text-[#6B7280] shrink-0">{item.fecha}</span>
                  </div>

                  <p className="text-xs text-[#374151] leading-relaxed">
                    "{item.comentario}"
                  </p>

                  <p className="text-[11px] text-[#6B7280]">
                    <strong className="text-[#374151]">{item.autor}</strong> · {item.puesto} · {item.periodo}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTÓN VER TODAS */}
            <div className="text-center pt-4">
              <button className="px-6 py-2.5 border border-[#1A2B4C] bg-white text-[#1A2B4C] text-xs font-bold rounded-md hover:bg-gray-50 transition">
                Ver las 34 reseñas
              </button>
            </div>

          </div>

          {/* COLUMNA DERECHA: SIDEBAR PROMEDIO POR ASPECTO (4 COLS) */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4 sticky top-6">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-3">
                PROMEDIO POR ASPECTO
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#F3F4F6]">
                  <span className="font-medium text-[#374151]">Ambiente</span>
                  <span className="text-base font-bold text-[#1A2B4C]">4.5</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-[#F3F4F6]">
                  <span className="font-medium text-[#374151]">Aprendizaje</span>
                  <span className="text-base font-bold text-[#1A2B4C]">4.3</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#374151]">Carga horaria</span>
                  <span className="text-base font-bold text-[#1A2B4C]">3.4</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}