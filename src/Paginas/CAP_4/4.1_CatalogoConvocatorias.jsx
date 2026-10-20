import { Link } from 'react-router-dom';

/*
  HU-4 · 4.1 Catálogo de convocatorias (rol: ESTUDIANTE)
  Mockup: páginas 27 (con resultados) y 28 (sin resultados y carga con esqueletos).
  Entrega 1: solo diseño. No hay estado ni filtros que funcionen; lo único
  "vivo" son los Link que llevan a otras páginas.
*/

// Datos de ejemplo (los mismos 8 avisos del mockup).
const convocatorias = [
  { id: 1, iniciales: 'AP', puesto: 'Practicante de Desarrollo de Software', empresa: 'Consultora Andes Perú', sector: 'Consultoría', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'San Isidro', subvencion: 'S/ 1,850.00', cierre: '30/09/2026', cierraPronto: false },
  { id: 2, iniciales: 'BM', puesto: 'Practicante de Data Analytics', empresa: 'Banco Marítimo del Sur', sector: 'Banca y finanzas', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Tiempo completo', distrito: 'Miraflores', subvencion: 'S/ 2,100.00', cierre: '24/09/2026', cierraPronto: false },
  { id: 3, iniciales: 'NT', puesto: 'Practicante de Soporte TI', empresa: 'Nexolink Telecom', sector: 'Telecomunicaciones', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'San Isidro', subvencion: 'S/ 1,450.00', cierre: '22/09/2026', cierraPronto: false },
  { id: 4, iniciales: 'SV', puesto: 'Practicante de Desarrollo Backend', empresa: 'Software Vilcanota', sector: 'Tecnología', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'Miraflores', subvencion: 'S/ 1,900.00', cierre: '20/09/2026', cierraPronto: false },
  { id: 5, iniciales: 'RT', puesto: 'Practicante de Inteligencia de Negocios', empresa: 'Retail Terravista', sector: 'Retail', carrera: 'Ing. Industrial', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'San Isidro', subvencion: 'S/ 1,700.00', cierre: '18/09/2026', cierraPronto: false },
  { id: 6, iniciales: 'SH', puesto: 'Practicante de Aseguramiento de Calidad', empresa: 'Salud Huascarán', sector: 'Salud', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'San Isidro', subvencion: 'S/ 1,500.00', cierre: '16/09/2026', cierraPronto: false },
  { id: 7, iniciales: 'MI', puesto: 'Practicante de Automatización de Procesos', empresa: 'Minera Illariy', sector: 'Minería', carrera: 'Ing. Industrial', modalidad: 'Híbrido', jornada: 'Tiempo completo', distrito: 'Miraflores', subvencion: 'S/ 2,300.00', cierre: '14/09/2026', cierraPronto: false },
  { id: 8, iniciales: 'CP', puesto: 'Practicante de Arquitectura de Datos', empresa: 'Consumo Pacífico', sector: 'Consumo masivo', carrera: 'Ing. de Sistemas', modalidad: 'Híbrido', jornada: 'Medio tiempo', distrito: 'San Isidro', subvencion: 'S/ 1,600.00', cierre: '12/09/2026', cierraPronto: true },
];

const carreras = [
  { nombre: 'Ingeniería de Sistemas', total: 38, marcada: true },
  { nombre: 'Ingeniería Industrial', total: 26, marcada: false },
  { nombre: 'Administración', total: 21, marcada: false },
  { nombre: 'Marketing', total: 15, marcada: false },
];

const filtrosActivos = ['Ingeniería de Sistemas', 'Híbrido', 'San Isidro, Miraflores', 'Desde S/ 1,400.00'];

// Estilo repetido de las etiquetas de campo (12/16 · 600 · mayúsculas).
const etiqueta = 'text-[12px] leading-4 font-semibold uppercase tracking-[0.06em] text-[#16212B]';

// Tarjeta de una convocatoria. Recibe los datos por props.
function TarjetaConvocatoria({ conv }) {
  return (
    <article className="bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)] px-5 py-3 flex gap-4">
      <div className="w-10 h-10 shrink-0 rounded-md bg-[#E6EEF5] text-[#123A5F] text-[13px] font-bold flex items-center justify-center">
        {conv.iniciales}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <Link to="/convocatorias/detalle" className="text-[16px] leading-6 font-semibold text-[#123A5F] hover:underline">
            {conv.puesto}
          </Link>
          {conv.cierraPronto && (
            <span className="bg-[#F8EFDE] text-[#B7791F] text-[13px] font-semibold px-2.5 py-0.5 rounded">
              Cierra en 5 días
            </span>
          )}
        </div>
        <p className="text-[15px] leading-[22px] text-[#16212B] mt-0.5">
          {conv.empresa} · {conv.sector}
        </p>
        <div className="flex items-end justify-between mt-0.5">
          <p className="text-[14px] leading-5 text-[#67757F]">
            {conv.carrera} · {conv.modalidad} · {conv.jornada} · {conv.distrito}
          </p>
          <p className="text-[14px] text-[#67757F] whitespace-nowrap">
            <span className="text-[18px] font-bold text-[#16212B] tabular-nums mr-3">{conv.subvencion}</span>
            Cierra {conv.cierre}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CatalogoConvocatorias() {
  return (
    <div className="bg-[#F7F9FB] text-[#16212B] pt-2 pb-16">
      <div className="max-w-[1200px] mx-auto flex items-start gap-[25px]">

        {/* ===== COLUMNA IZQUIERDA: FILTROS (295 px) ===== */}
        <aside className="w-[295px] shrink-0 bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)] px-4 pt-4 pb-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] leading-7 font-semibold text-[#123A5F]">Filtros</h2>
            <button className="text-[13px] font-semibold text-[#123A5F] hover:underline">Limpiar todo</button>
          </div>

          {/* Buscador */}
          <div className="mt-4 h-[43px] border border-[#DCE3EA] rounded-md flex items-center gap-2 px-3">
            <span className="w-[14px] h-[14px] rounded-full border border-[#67757F] shrink-0"></span>
            <input type="text" placeholder="Buscar puesto o empresa" className="w-full text-[14px] text-[#16212B] placeholder-[#67757F] outline-none" />
          </div>

          {/* Carrera: preseleccionada según el perfil del estudiante */}
          <h3 className={`${etiqueta} mt-4`}>Carrera</h3>
          <div className="mt-2 bg-[#E6EEF5] rounded-md px-3 py-2.5 flex gap-2 text-[13px] leading-[18px] text-[#123A5F]">
            <span className="font-bold">i</span>
            <p>Preseleccionamos Ingeniería de Sistemas, tu carrera. Puedes agregar otras.</p>
          </div>
          <div className="mt-2.5 space-y-2">
            {carreras.map((c) => (
              <label key={c.nombre} className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2.5">
                  <input type="checkbox" defaultChecked={c.marcada} className="w-[17px] h-[17px] accent-[#123A5F]" />
                  <span className={`text-[14px] text-[#16212B] ${c.marcada ? 'font-medium' : ''}`}>{c.nombre}</span>
                </span>
                <span className="text-[13px] text-[#67757F] tabular-nums">{c.total}</span>
              </label>
            ))}
          </div>
          <button className="mt-2 text-[13px] font-semibold text-[#123A5F] hover:underline">Ver las 10 carreras</button>

          <hr className="my-4 border-[#DCE3EA]" />

          {/* Modalidad (Híbrido seleccionado) */}
          <h3 className={etiqueta}>Modalidad</h3>
          <div className="mt-2.5 flex gap-2">
            <button className="h-[30px] px-2.5 rounded bg-[#E6EEF5] text-[13px] font-semibold text-[#123A5F]">Híbrido</button>
            <button className="h-[30px] px-2.5 rounded border border-[#DCE3EA] text-[13px] font-medium text-[#16212B]">Presencial</button>
            <button className="h-[30px] px-2.5 rounded border border-[#DCE3EA] text-[13px] font-medium text-[#16212B]">Remoto</button>
          </div>

          {/* Jornada */}
          <h3 className={`${etiqueta} mt-4`}>Jornada</h3>
          <div className="mt-2.5 flex gap-2">
            <button className="h-[30px] px-2.5 rounded border border-[#DCE3EA] text-[13px] font-medium text-[#16212B]">Medio tiempo</button>
            <button className="h-[30px] px-2.5 rounded border border-[#DCE3EA] text-[13px] font-medium text-[#16212B]">Tiempo completo</button>
          </div>

          {/* Distrito */}
          <h3 className={`${etiqueta} mt-4`}>Distrito</h3>
          <select defaultValue="sanisidro-miraflores" className="mt-2.5 w-full h-[43px] border border-[#DCE3EA] rounded-md px-3 text-[14px] text-[#16212B] bg-white">
            <option value="sanisidro-miraflores">San Isidro, Miraflores</option>
            <option value="surco">Surco</option>
            <option value="lince">Lince</option>
          </select>

          {/* Subvención mínima: barra dibujada con relative + absolute (S2) */}
          <h3 className={`${etiqueta} mt-4`}>Subvención mínima</h3>
          <div className="relative mt-5 h-[5px] rounded-full bg-[#DCE3EA]">
            <div className="absolute left-0 top-0 h-[5px] w-[46%] rounded-full bg-[#123A5F]"></div>
            <div className="absolute left-[46%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[19px] h-[19px] rounded-full bg-white border-2 border-[#123A5F]"></div>
          </div>
          <p className="mt-4 text-[13px] text-[#67757F]">Desde S/ 1,400.00</p>

          {/* Solo convocatorias vigentes (interruptor encendido) */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[14px] font-medium text-[#16212B]">Solo convocatorias vigentes</span>
            <span className="relative w-[46px] h-[22px] rounded-full bg-[#123A5F]">
              <span className="absolute right-[3px] top-[3px] w-4 h-4 rounded-full bg-white"></span>
            </span>
          </div>
        </aside>

        {/* ===== COLUMNA DERECHA: RESULTADOS ===== */}
        <section className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[28px] leading-8 font-semibold text-[#16212B]">Convocatorias vigentes</h1>
              <p className="mt-1.5 text-[15px] text-[#67757F]">38 resultados para Ingeniería de Sistemas</p>
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[14px] text-[#67757F]">Ordenar por</span>
              <select defaultValue="cierre" className="w-[176px] h-[43px] border border-[#DCE3EA] rounded-md px-3 text-[14px] font-medium text-[#16212B] bg-white">
                <option value="cierre">Cierre más próximo</option>
                <option value="publicacion">Más recientes</option>
                <option value="subvencion">Mayor subvención</option>
              </select>
            </div>
          </div>

          {/* Filtros activos (chips con ✕) */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filtrosActivos.map((f) => (
              <span key={f} className="h-[30px] px-2.5 rounded bg-[#E6EEF5] text-[13px] font-medium text-[#123A5F] flex items-center gap-2">
                {f} <button className="text-[11px]">✕</button>
              </span>
            ))}
          </div>

          {/* Listado de convocatorias */}
          <div className="mt-3 space-y-2">
            {convocatorias.map((conv) => (
              <TarjetaConvocatoria key={conv.id} conv={conv} />
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[14px] text-[#67757F]">Mostrando 1–8 de 38 convocatorias</p>
            <div className="flex items-center gap-1.5 text-[14px] font-medium">
              <button disabled className="h-[33px] px-3 bg-white border border-[#DCE3EA] rounded text-[#A3B0BA]">Anterior</button>
              <button className="h-[33px] w-[33px] rounded bg-[#123A5F] text-white">1</button>
              <button className="h-[33px] w-[33px] bg-white border border-[#DCE3EA] rounded text-[#16212B]">2</button>
              <button className="h-[33px] w-[33px] bg-white border border-[#DCE3EA] rounded text-[#16212B]">3</button>
              <button className="h-[33px] px-3 bg-white border border-[#DCE3EA] rounded text-[#16212B]">Siguiente</button>
            </div>
          </div>
        </section>
      </div>

      {/* ===== PIEZAS SUELTAS (mockup pág. 28) =====
          Solo cambia la columna de resultados; se muestran aquí debajo
          porque en esta entrega no hay lógica para alternarlas. */}
      <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-2 gap-10">

        {/* Sin resultados */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#67757F]">Pieza suelta · Sin resultados</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="h-[30px] px-2.5 rounded bg-[#E6EEF5] text-[13px] font-medium text-[#123A5F] flex items-center gap-2">«arquitectura naval» <button className="text-[11px]">✕</button></span>
            <span className="h-[30px] px-2.5 rounded bg-[#E6EEF5] text-[13px] font-medium text-[#123A5F] flex items-center gap-2">Remoto <button className="text-[11px]">✕</button></span>
            <span className="h-[30px] px-2.5 rounded bg-[#E6EEF5] text-[13px] font-medium text-[#123A5F] flex items-center gap-2">Desde S/ 2,400.00 <button className="text-[11px]">✕</button></span>
            <button className="ml-2 text-[13px] font-semibold text-[#123A5F]">Limpiar todo</button>
          </div>
          <div className="mt-3.5 bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)] px-8 py-14 text-center">
            <div className="w-[60px] h-[60px] mx-auto rounded-full bg-[#E6EEF5] text-[#123A5F] text-[24px] font-bold flex items-center justify-center">?</div>
            <h2 className="mt-4 text-[20px] leading-7 font-semibold text-[#16212B]">Ninguna convocatoria coincide con tus filtros</h2>
            <p className="mt-3 max-w-[400px] mx-auto text-[15px] leading-[22px] text-[#67757F]">
              Prueba con otro término, baja la subvención mínima o agrega más carreras y modalidades.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button className="h-[46px] px-5 rounded-md bg-[#123A5F] text-white text-[15px] font-semibold hover:bg-[#0C2A46]">Quitar todos los filtros</button>
              <Link to="/convocatorias" className="h-[46px] px-5 rounded-md border border-[#DCE3EA] bg-white text-[#16212B] text-[15px] font-semibold flex items-center">Ver todas las convocatorias</Link>
            </div>
          </div>
        </div>

        {/* Cargando con esqueletos (sin animación) */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#67757F]">Pieza suelta · Cargando con esqueletos</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-[210px] h-[14px] rounded bg-[#E3E9EE]"></div>
            <div className="w-[120px] h-3 rounded bg-[#EDF1F4]"></div>
          </div>
          <div className="mt-3 space-y-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-[105px] bg-white border border-[#DCE3EA] rounded-md px-5 py-[19px] flex gap-4">
                <div className="w-[52px] h-[52px] rounded-md bg-[#E3E9EE] shrink-0"></div>
                <div className="flex-1">
                  <div className="w-[80%] h-4 rounded bg-[#E3E9EE]"></div>
                  <div className="mt-2 w-[52%] h-3 rounded bg-[#EDF1F4]"></div>
                  <div className="mt-2 flex gap-1.5">
                    <div className="w-[86px] h-[22px] rounded bg-[#EDF1F4]"></div>
                    <div className="w-[110px] h-[22px] rounded bg-[#EDF1F4]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-2">
                  <div className="w-20 h-4 rounded bg-[#E3E9EE]"></div>
                  <div className="w-16 h-3 rounded bg-[#EDF1F4]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
