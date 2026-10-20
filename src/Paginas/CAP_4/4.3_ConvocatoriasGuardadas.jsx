import { Link } from 'react-router-dom';

/*
  HU-4 · 4.3 Convocatorias guardadas (rol: ESTUDIANTE)
  Mockup: página 31. El estado vacío es la pieza suelta «4.3 sin
  convocatorias guardadas» de la página 32. Entrega 1: solo diseño + navegación.
*/

const guardadas = [
  { id: 1, iniciales: 'CP', puesto: 'Practicante de Arquitectura de Datos', empresa: 'Consumo Pacífico', sector: 'Consumo masivo', detalle: 'Ingeniería de Sistemas · Híbrido · Medio tiempo · San Isidro', guardada: '02/09/2026', subvencion: 'S/ 1,600.00', cierre: '12/09/2026', cierraPronto: true },
  { id: 2, iniciales: 'BM', puesto: 'Practicante de Data Analytics', empresa: 'Banco Marítimo del Sur', sector: 'Banca y finanzas', detalle: 'Ing. de Sistemas e Ing. Industrial · Híbrido · Tiempo completo · Miraflores', guardada: '30/08/2026', subvencion: 'S/ 2,100.00', cierre: '24/09/2026', cierraPronto: false },
  { id: 3, iniciales: 'SV', puesto: 'Practicante de Desarrollo Backend', empresa: 'Software Vilcanota', sector: 'Tecnología', detalle: 'Ingeniería de Sistemas · Híbrido · Medio tiempo · Miraflores', guardada: '28/08/2026', subvencion: 'S/ 1,900.00', cierre: '20/09/2026', cierraPronto: false },
  { id: 4, iniciales: 'MI', puesto: 'Practicante de Automatización de Procesos', empresa: 'Minera Illariy', sector: 'Minería', detalle: 'Ing. de Sistemas e Ing. Industrial · Híbrido · Tiempo completo · Miraflores', guardada: '24/08/2026', subvencion: 'S/ 2,300.00', cierre: '14/09/2026', cierraPronto: false },
  { id: 5, iniciales: 'NT', puesto: 'Practicante de Soporte TI', empresa: 'Nexolink Telecom', sector: 'Telecomunicaciones', detalle: 'Ingeniería de Sistemas · Híbrido · Medio tiempo · San Isidro', guardada: '20/08/2026', subvencion: 'S/ 1,450.00', cierre: '22/09/2026', cierraPronto: false },
];

// Tarjeta de una convocatoria guardada. Recibe los datos por props.
function TarjetaGuardada({ conv }) {
  return (
    <article className="relative bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)] px-5 py-3 flex gap-4">
      <div className="w-10 h-10 shrink-0 rounded-md bg-[#E6EEF5] text-[#123A5F] text-[13px] font-bold flex items-center justify-center">
        {conv.iniciales}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <Link to="/convocatorias/detalle" className="text-[16px] leading-6 font-semibold text-[#123A5F] hover:underline">
            {conv.puesto}
          </Link>
          {conv.cierraPronto ? (
            <span className="bg-[#F8EFDE] text-[#B7791F] text-[13px] font-semibold px-2.5 py-0.5 rounded">Cierra en 5 días</span>
          ) : (
            <span className="bg-[#E4F1EA] text-[#1E7F4D] text-[13px] font-semibold px-2.5 py-0.5 rounded">Vigente</span>
          )}
        </div>
        <p className="mt-0.5 text-[15px] leading-[22px] text-[#16212B]">{conv.empresa} · {conv.sector}</p>
        <div className="mt-0.5 flex items-end justify-between">
          <p className="text-[14px] leading-5 text-[#67757F]">{conv.detalle} · Guardada el {conv.guardada}</p>
          <p className="text-[14px] text-[#67757F] whitespace-nowrap">
            <span className="text-[18px] font-bold text-[#16212B] tabular-nums mr-3">{conv.subvencion}</span>
            Cierra {conv.cierre}
          </p>
        </div>
      </div>

      {/* Menú de la esquina superior derecha («Quitar de guardadas») */}
      <button className="absolute top-2 right-3 text-[18px] leading-none text-[#67757F] hover:text-[#123A5F]" title="Quitar de guardadas">⋮</button>
    </article>
  );
}

export default function ConvocatoriasGuardadas() {
  return (
    <div className="bg-[#F7F9FB] text-[#16212B] pt-5 pb-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Breadcrumb y título */}
        <p className="text-[14px] text-[#67757F]">
          <Link to="/" className="hover:underline">Inicio</Link> ·{' '}
          <span className="font-medium text-[#16212B]">Convocatorias guardadas</span>
        </p>
        <div className="mt-0.5 flex items-end justify-between">
          <h1 className="text-[28px] leading-8 font-semibold text-[#16212B]">Convocatorias guardadas</h1>
          <p className="text-[15px] text-[#67757F] mb-4">5 convocatorias guardadas · 1 cierra esta semana</p>
        </div>

        {/* Aviso de cierre próximo */}
        <div className="mt-4 h-[50px] rounded-md bg-[#F8EFDE] px-[18px] flex items-center gap-3 text-[15px] text-[#B7791F]">
          <span className="font-bold">!</span>
          <p>«Practicante de Arquitectura de Datos» cierra el 12/09/2026. Postula antes de esa fecha.</p>
        </div>

        {/* Listado */}
        <div className="mt-3 space-y-2">
          {guardadas.map((conv) => (
            <TarjetaGuardada key={conv.id} conv={conv} />
          ))}
        </div>

        {/* ===== PIEZA SUELTA: estado vacío (mockup pág. 32) ===== */}
        <div className="mt-16 max-w-[620px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#67757F]">Pieza suelta · Sin convocatorias guardadas</p>
          <div className="mt-3 bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)] px-8 py-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-md bg-[#E6EEF5] text-[#123A5F] text-[20px] flex items-center justify-center">☆</div>
            <h2 className="mt-4 text-[20px] leading-7 font-semibold text-[#16212B]">No has guardado convocatorias</h2>
            <p className="mt-4 text-[15px] text-[#67757F]">Guarda las que te interesen desde el catálogo y compáralas antes de postular.</p>
            <Link to="/convocatorias" className="mt-5 inline-flex h-[46px] px-6 rounded-md bg-[#123A5F] text-white text-[15px] font-semibold items-center hover:bg-[#0C2A46]">
              Ir al catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
