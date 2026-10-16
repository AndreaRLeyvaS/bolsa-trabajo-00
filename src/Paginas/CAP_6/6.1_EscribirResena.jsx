import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Componente auxiliar reutilizable para las estrellas tipográficas ★
function RatingEstrellas({ valor, onChange, size = 20, interactivo = true }) {
  const [hoverValor, setHoverValor] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const estrellaNum = index + 1;
        const estaLlena = estrellaNum <= (hoverValor || valor);

        return (
          <button
            key={index}
            type="button"
            disabled={!interactivo}
            onClick={() => onChange && onChange(estrellaNum)}
            onMouseEnter={() => interactivo && setHoverValor(estrellaNum)}
            onMouseLeave={() => interactivo && setHoverValor(0)}
            className={`${interactivo ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform focus:outline-none`}
            style={{ fontSize: `${size}px`, lineHeight: 1 }}
          >
            <span style={{ color: estaLlena ? '#F59E0B' : '#D1D5DB' }}>
              ★
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function EscribirResena() {
  const navigate = useNavigate();

  // Estados del formulario según los valores especificados en el documento
  const [calificacionGeneral, setCalificacionGeneral] = useState(4);
  const [titulo, setTitulo] = useState("Buen acompañamiento y proyectos reales");
  const [comentario, setComentario] = useState(
    "Entré al equipo de analítica y desde el primer mes trabajé con datos reales de tiendas. Mi jefa revisaba mis entregables cada semana. La carga se pone alta en cierre de mes, pero siempre respetaron mis horarios de clase."
  );
  
  // Aspectos específicos
  const [aspectoAmbiente, setAspectoAmbiente] = useState(5);
  const [aspectoAprendizaje, setAspectoAprendizaje] = useState(5);
  const [aspectoCargaHoraria, setAspectoCargaHoraria] = useState(4);

  // Fechas y Anonimato
  const [fechaInicio, setFechaInicio] = useState("2026-03-01");
  const [fechaFin, setFechaFin] = useState("2026-08-31");
  const [esAnonima, setEsAnonima] = useState(true);

  // Texto descriptivo dinámico según el puntaje general
  const obtenerTextoCalificacion = (score) => {
    switch (score) {
      case 5: return "5 de 5 — excelente experiencia";
      case 4: return "4 de 5 — buena experiencia";
      case 3: return "3 de 5 — experiencia regular";
      case 2: return "2 de 5 — experiencia insatisfactoria";
      case 1: return "1 de 5 — pésima experiencia";
      default: return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la reseña
    navigate('/empresa/mis-resenas');
  };

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Empresas <span className="mx-1">·</span> Retail Terravista <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Escribir reseña</span>
        </div>

        {/* Título H1 */}
        <h1 className="text-2xl font-bold text-[#1A2B4C] mb-3">
          Reseña tu práctica en Retail Terravista
        </h1>

        {/* AVISO INFORMATIVO AZUL */}
        <div className="bg-[#EEF2F7] border border-[#DBE3EE] rounded-lg p-3.5 mb-6 flex items-start gap-3 text-xs text-[#1A2B4C]">
          <span className="font-bold text-sm leading-none mt-0.5">ⓘ</span>
          <p className="leading-relaxed">
            Solo puedes reseñar empresas donde tu postulación fue aceptada. Tu reseña ayuda a otros estudiantes a decidir.
          </p>
        </div>

        {/* CARD CONTEXTO DE LA EMPRESA */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 mb-8 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
            RT
          </div>
          <div>
            <h2 className="text-base font-bold text-[#1A2B4C]">Retail Terravista</h2>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Practicante de Inteligencia de Negocios · Surco
            </p>
          </div>
        </div>

        {/* FORMULARIO DE RESEÑA */}
        <form onSubmit={handleSubmit} className="bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-8 shadow-sm space-y-7">
          
          {/* SECCIÓN 1: CALIFICACIÓN GENERAL */}
          <div>
            <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-3">
              CALIFICACIÓN GENERAL
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <RatingEstrellas
                valor={calificacionGeneral}
                onChange={setCalificacionGeneral}
                size={32}
              />
              <span className="text-sm font-medium text-[#374151]">
                {obtenerTextoCalificacion(calificacionGeneral)}
              </span>
            </div>
          </div>

          {/* SECCIÓN 2: TÍTULO DE LA RESEÑA */}
          <div>
            <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              TÍTULO DE LA RESEÑA
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ej. Buen acompañamiento y proyectos reales"
              className="w-full h-11 px-3 border border-[#E5E7EB] rounded-md text-sm text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
            />
          </div>

          {/* SECCIÓN 3: COMENTARIO */}
          <div>
            <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              COMENTARIO
            </label>
            <textarea
              rows={4}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              maxLength={1000}
              placeholder="Cuenta lo que aprendiste y cómo fue el acompañamiento..."
              className="w-full p-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C] leading-relaxed"
            />
            <div className="flex justify-between items-center mt-1 text-[11px] text-[#6B7280]">
              <span>Cuenta lo que aprendiste y cómo fue el acompañamiento.</span>
              <span>{comentario.length} / 1000</span>
            </div>
          </div>

          {/* SECCIÓN 4: CALIFICACIÓN POR ASPECTOS */}
          <div>
            <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-3">
              CALIFICACIÓN POR ASPECTOS
            </label>

            <div className="space-y-3 pt-1">
              {/* Ambiente */}
              <div className="flex items-center gap-6">
                <span className="w-28 text-xs font-medium text-[#374151]">Ambiente</span>
                <RatingEstrellas
                  valor={aspectoAmbiente}
                  onChange={setAspectoAmbiente}
                  size={20}
                />
              </div>

              {/* Aprendizaje */}
              <div className="flex items-center gap-6">
                <span className="w-28 text-xs font-medium text-[#374151]">Aprendizaje</span>
                <RatingEstrellas
                  valor={aspectoAprendizaje}
                  onChange={setAspectoAprendizaje}
                  size={20}
                />
              </div>

              {/* Carga horaria */}
              <div className="flex items-center gap-6">
                <span className="w-28 text-xs font-medium text-[#374151]">Carga horaria</span>
                <RatingEstrellas
                  valor={aspectoCargaHoraria}
                  onChange={setAspectoCargaHoraria}
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* SECCIÓN 5: FECHAS DE LA PRÁCTICA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                INICIO DE LA PRÁCTICA
              </label>
              <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="w-full h-11 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                FIN DE LA PRÁCTICA
              </label>
              <input
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
                className="w-full h-11 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
              />
            </div>
          </div>

          {/* SECCIÓN 6: RESEÑA ANÓNIMA */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={esAnonima}
                onChange={(e) => setEsAnonima(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#1A2B4C] rounded border-[#E5E7EB]"
              />
              <div>
                <span className="text-xs font-medium text-[#374151]">
                  Publicar como reseña anónima
                </span>
                <p className="text-[11px] text-[#6B7280] mt-0.5">
                  Se mostrará como «Anónimo». La empresa no verá tu nombre.
                </p>
              </div>
            </label>
          </div>

          {/* FOOTER DEL FORMULARIO CON BOTONES */}
          <div className="flex justify-end items-center gap-3 pt-6 border-t border-[#F3F4F6]">
            <Link
              to="/convocatorias"
              className="px-5 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50 transition"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
            >
              Publicar reseña
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}