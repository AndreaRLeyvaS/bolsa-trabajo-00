import { Link } from 'react-router-dom';

/*
  HU-4 · 4.2 Detalle de convocatoria (rol: ESTUDIANTE)
  Mockup: páginas 29 (estado normal del estudiante) y 30 (barra lateral:
  visitante, ya postulado y cerrada). Entrega 1: solo diseño + navegación.
*/

const funciones = [
  'Desarrollar componentes de interfaz en React con CSS propio.',
  'Escribir consultas SQL para los reportes del área de operaciones.',
  'Documentar los módulos entregados y atender incidencias de usuarios internos.',
  'Participar en la revisión de código semanal del equipo.',
];

const perfilBuscado = [
  'Estudiante de Ingeniería de Sistemas a partir del séptimo ciclo.',
  'Disponibilidad de 30 horas semanales en modalidad híbrida.',
  'Interés en desarrollo web y en trabajo por equipos.',
];

const datos = [
  { campo: 'Modalidad', valor: 'Híbrido' },
  { campo: 'Jornada', valor: 'Medio tiempo · 30 h' },
  { campo: 'Distrito', valor: 'San Isidro' },
  { campo: 'Publicada', valor: '18/08/2026' },
  { campo: 'Postulantes', valor: '23' },
];

// Estilos repetidos
const tarjeta = 'bg-white border border-[#DCE3EA] rounded-md shadow-[0_1px_2px_rgba(18,58,95,0.06)]';
const etiqueta = 'text-[12px] leading-4 font-semibold uppercase tracking-[0.08em] text-[#67757F]';
const tituloSeccion = 'text-[20px] leading-7 font-semibold text-[#123A5F]';
const btnPrimario = 'h-[46px] w-full rounded-md bg-[#123A5F] text-white text-[15px] font-semibold flex items-center justify-center hover:bg-[#0C2A46]';
const btnSecundario = 'h-[46px] w-full rounded-md border border-[#123A5F] bg-white text-[#123A5F] text-[15px] font-semibold flex items-center justify-center';
const btnDeshabilitado = 'h-[46px] w-full rounded-md bg-[#EDF1F4] text-[#A3B0BA] text-[15px] font-semibold cursor-not-allowed';

export default function DetalleConvocatoria() {
  return (
    <div className="bg-[#F7F9FB] text-[#16212B] pt-2 pb-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Breadcrumb */}
        <p className="text-[14px] text-[#67757F]">
          <Link to="/convocatorias" className="hover:underline">Convocatorias</Link> · Ingeniería de Sistemas ·{' '}
          <span className="font-medium text-[#16212B]">Practicante de Desarrollo de Software</span>
        </p>

        <div className="mt-4 flex items-start gap-[25px]">

          {/* ===== COLUMNA PRINCIPAL (819 px) ===== */}
          <div className="w-[819px] shrink-0 space-y-4">

            {/* Cabecera de la convocatoria */}
            <section className={`${tarjeta} p-[27px] flex gap-5`}>
              <div className="w-[72px] h-[72px] shrink-0 rounded-md bg-[#E6EEF5] text-[#123A5F] text-[19px] font-semibold flex items-center justify-center">
                AP
              </div>
              <div>
                <h1 className="text-[28px] leading-8 font-semibold text-[#123A5F]">Practicante de Desarrollo de Software</h1>
                <p className="mt-2 text-[16px] text-[#16212B]">Consultora Andes Perú · Consultoría · San Isidro, Lima</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
                  <span className="h-[26px] px-2.5 rounded bg-[#E4F1EA] text-[#1E7F4D] font-semibold flex items-center">Vigente</span>
                  <span className="h-[26px] px-2.5 rounded bg-[#E6EEF5] text-[#123A5F] font-medium flex items-center">Ingeniería de Sistemas</span>
                  <span className="h-[26px] px-2.5 rounded bg-[#E6EEF5] text-[#123A5F] font-medium flex items-center">Híbrido</span>
                  <span className="h-[26px] px-2.5 rounded bg-[#E6EEF5] text-[#123A5F] font-medium flex items-center">Medio tiempo</span>
                  <span className="h-[26px] px-2.5 rounded bg-[#E6EEF5] text-[#123A5F] font-medium flex items-center">2 vacantes</span>
                </div>
              </div>
            </section>

            {/* Contenido de la convocatoria */}
            <section className={`${tarjeta} p-[27px] text-[15px] leading-6`}>
              <h2 className={tituloSeccion}>Descripción de la práctica</h2>
              <p className="mt-2">
                Te integrarás al equipo de producto de Andes Perú para construir módulos web internos que usan más de 300
                colaboradores. Trabajarás con un mentor asignado y participarás en las ceremonias del equipo desde la primera semana.
              </p>

              <h2 className={`${tituloSeccion} mt-4`}>Funciones</h2>
              <ul className="mt-2">
                {funciones.map((f) => <li key={f}>• {f}</li>)}
              </ul>

              <h2 className={`${tituloSeccion} mt-4`}>Perfil buscado</h2>
              <ul className="mt-2">
                {perfilBuscado.map((p) => <li key={p}>• {p}</li>)}
              </ul>

              <h2 className={`${tituloSeccion} mt-4`}>Habilidades deseadas</h2>
              <div className="mt-3 flex flex-wrap gap-2 text-[13px] font-medium">
                <span className="h-[30px] px-2.5 rounded bg-[#E4F1EE] text-[#0F8B7E] flex items-center">React · tienes esta habilidad</span>
                <span className="h-[30px] px-2.5 rounded bg-[#E4F1EE] text-[#0F8B7E] flex items-center">SQL · tienes esta habilidad</span>
                <span className="h-[30px] px-2.5 rounded bg-[#F7F9FB] border border-[#DCE3EA] text-[#16212B] flex items-center">Git</span>
                <span className="h-[30px] px-2.5 rounded bg-[#F7F9FB] border border-[#DCE3EA] text-[#16212B] flex items-center">Pruebas unitarias</span>
              </div>
            </section>
          </div>

          {/* ===== COLUMNA LATERAL (355 px) ===== */}
          <aside className="flex-1 space-y-4">

            {/* Barra lateral: estado normal del estudiante */}
            <section className={`${tarjeta} p-6`}>
              <p className={etiqueta}>Subvención mensual</p>
              <p className="mt-1 text-[32px] leading-10 font-bold text-[#16212B] tabular-nums">S/ 1,850.00</p>

              <div className="mt-5 rounded-md bg-[#F8EFDE] px-3.5 py-3 text-[14px] text-[#B7791F]">
                <p className="font-semibold">Cierra en 23 días</p>
                <p className="mt-1">Postulaciones hasta el 30/09/2026</p>
              </div>

              <Link to="/postulaciones/modal" className="mt-4 h-[52px] w-full rounded-md bg-[#0F8B7E] text-white text-[16px] font-semibold flex items-center justify-center hover:opacity-90">
                Postular ahora
              </Link>
              <Link to="/guardadas" className="mt-4 h-[47px] w-full rounded-md border border-[#123A5F] bg-white text-[#123A5F] text-[16px] font-semibold flex items-center justify-center gap-3">
                <span className="w-4 h-4 rounded-[3px] border border-[#123A5F]"></span>
                Guardar convocatoria
              </Link>

              <hr className="mt-4 border-[#DCE3EA]" />

              <dl className="mt-4 space-y-3.5 text-[15px]">
                {datos.map((d) => (
                  <div key={d.campo} className="flex justify-between">
                    <dt className="text-[#67757F]">{d.campo}</dt>
                    <dd className="text-[#16212B] tabular-nums">{d.valor}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Sobre la empresa */}
            <section className={`${tarjeta} p-6`}>
              <h3 className="text-[16px] font-semibold text-[#16212B]">Sobre la empresa</h3>
              <p className="mt-3 text-[14px] leading-5 text-[#67757F]">
                Consultora de transformación digital con 14 años en el mercado. Calificación 4.3 / 5.0 según 28 practicantes.
              </p>
              <Link to="/empresa/ficha-publica" className="mt-3 inline-block text-[14px] font-semibold text-[#123A5F] hover:underline">
                Ver ficha de la empresa →
              </Link>
            </section>

            {/* Beneficios */}
            <section className={`${tarjeta} p-6`}>
              <h3 className="text-[16px] font-semibold text-[#16212B]">Beneficios</h3>
              <p className="mt-3 text-[14px] leading-5 text-[#67757F]">
                Movilidad, seguro EPS y horario flexible en época de exámenes.
              </p>
            </section>
          </aside>
        </div>

        {/* ===== PIEZAS SUELTAS (mockup pág. 30) =====
            Solo cambia la barra lateral. Se muestran debajo porque en esta
            entrega no hay lógica para saber quién mira la página. */}
        <div className="mt-16 grid grid-cols-3 gap-6">

          {/* Visitante sin cuenta */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A66]">Pieza suelta · Visitante sin cuenta</p>
            <section className={`${tarjeta} mt-3 p-6`}>
              <p className={etiqueta}>Subvención mensual</p>
              <p className="mt-1 text-[28px] leading-9 font-bold text-[#16212B] tabular-nums">S/ 1,850.00</p>
              <div className="mt-3 rounded-md bg-[#E6EEF5] px-3.5 py-3 flex gap-2 text-[14px] text-[#16212B]">
                <span className="font-bold text-[#123A5F]">i</span>
                <p>Necesitas una cuenta de estudiante con correo institucional para postular.</p>
              </div>
              <Link to="/login" className={`${btnPrimario} mt-4`}>Iniciar sesión para postular</Link>
              <Link to="/registro-estudiante" className={`${btnSecundario} mt-4`}>Crear cuenta de estudiante</Link>
              <p className="mt-4 text-[13px] text-[#67757F]">El botón «Guardar» también pide iniciar sesión.</p>
            </section>
          </div>

          {/* Ya postulado */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0F8B7E]">Pieza suelta · Ya postulado</p>
            <section className={`${tarjeta} mt-3 p-6`}>
              <p className={etiqueta}>Subvención mensual</p>
              <p className="mt-1 text-[28px] leading-9 font-bold text-[#16212B] tabular-nums">S/ 1,850.00</p>
              <div className="mt-3 rounded-md bg-[#E6EEF5] px-3.5 py-3 text-[#3B6FA8]">
                <p className="text-[14px] font-semibold">Ya postulaste a esta convocatoria</p>
                <p className="mt-1 text-[13px]">Enviada el 20/08/2026 · estado: en revisión</p>
              </div>
              <button disabled className={`${btnDeshabilitado} mt-4`}>Ya postulaste</button>
              <Link to="/postulaciones/detalle" className={`${btnSecundario} mt-4`}>Ver mi postulación</Link>
              <button className="mt-5 w-full text-[15px] font-semibold text-[#B4322B] hover:underline">Retirar postulación</button>
            </section>
          </div>

          {/* Convocatoria cerrada */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A66]">Pieza suelta · Convocatoria cerrada</p>
            <section className={`${tarjeta} mt-3 p-6`}>
              <p className={etiqueta}>Subvención mensual</p>
              <p className="mt-1 text-[28px] leading-9 font-bold text-[#67757F] tabular-nums">S/ 1,850.00</p>
              <div className="mt-3 rounded-md bg-[#EDF1F4] px-3.5 py-3">
                <p className="text-[14px] font-semibold text-[#4A5A66]">Convocatoria cerrada</p>
                <p className="mt-1 text-[13px] text-[#4A5A66]">Cerró el 31/08/2026 con 41 postulantes.</p>
              </div>
              <button disabled className={`${btnDeshabilitado} mt-4`}>Postulaciones cerradas</button>
              <Link to="/convocatorias" className={`${btnPrimario} mt-4`}>Ver convocatorias similares</Link>
              <p className="mt-4 text-[13px] text-[#67757F]">La convocatoria sigue visible, pero sin acción de postular.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
