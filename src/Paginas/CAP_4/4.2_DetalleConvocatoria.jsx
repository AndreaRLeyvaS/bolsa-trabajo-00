import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetalleConvocatoria() {
  // Estado para simular las 4 variantes de la barra lateral (Piezas sueltas 4.2)
  const [estadoSidebar, setEstadoSidebar] = useState('estudiante'); // 'estudiante' | 'visitante' | 'postulado' | 'cerrada'
  const [guardada, setGuardada] = useState(false);

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* BARRA DE DEMO PARA EL PROFESOR */}
      <div className="bg-gray-100 border-b border-gray-300 px-6 py-2">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-[#1A2B4C]">Probar Estado del Sidebar (Piezas Sueltas 4.2):</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setEstadoSidebar('estudiante')}
              className={`px-2.5 py-1 rounded font-medium ${estadoSidebar === 'estudiante' ? 'bg-[#1A2B4C] text-white' : 'bg-white border text-[#374151]'}`}
            >
              1. Estudiante listo
            </button>
            <button
              onClick={() => setEstadoSidebar('visitante')}
              className={`px-2.5 py-1 rounded font-medium ${estadoSidebar === 'visitante' ? 'bg-[#1A2B4C] text-white' : 'bg-white border text-[#374151]'}`}
            >
              2. Visitante sin cuenta
            </button>
            <button
              onClick={() => setEstadoSidebar('postulado')}
              className={`px-2.5 py-1 rounded font-medium ${estadoSidebar === 'postulado' ? 'bg-[#1A2B4C] text-white' : 'bg-white border text-[#374151]'}`}
            >
              3. Ya postulado
            </button>
            <button
              onClick={() => setEstadoSidebar('cerrada')}
              className={`px-2.5 py-1 rounded font-medium ${estadoSidebar === 'cerrada' ? 'bg-[#1A2B4C] text-white' : 'bg-white border text-[#374151]'}`}
            >
              4. Convocatoria cerrada
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-4">
          Convocatorias <span className="mx-1">·</span> Ingeniería de Sistemas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Practicante de Desarrollo de Software</span>
        </div>

        {/* HERO DE LA CONVOCATORIA */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
          <div className="w-20 h-20 bg-[#EEF2F7] rounded-lg text-[#1A2B4C] font-bold text-2xl flex items-center justify-center shrink-0">
            AP
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#1A2B4C] mb-1">
              Practicante de Desarrollo de Software
            </h1>
            <p className="text-sm text-[#6B7280] mb-4">
              Consultora Andes Perú - Consultoría · San Isidro, Lima
            </p>

            {/* Badges horizontales */}
            <div className="flex flex-wrap items-center gap-2">
              {estadoSidebar === 'cerrada' ? (
                <span className="bg-[#F3F4F6] text-[#6B7280] text-xs font-bold px-3 py-1 rounded-full">
                  Cerrada
                </span>
              ) : (
                <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1 rounded-full">
                  Vigente
                </span>
              )}
              <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1 rounded-full">
                Ingeniería de Sistemas
              </span>
              <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1 rounded-full">
                Híbrido
              </span>
              <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1 rounded-full">
                Medio tiempo
              </span>
              <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1 rounded-full">
                2 vacantes
              </span>
            </div>
          </div>
        </div>

        {/* ESTRUCTURA PRINCIPAL DE 2 COLUMNAS (8 Cols / 4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO DETALLADO (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-[#E5E7EB] rounded-lg p-6 md:p-8 shadow-sm">
            
            {/* Descripción */}
            <div>
              <h2 className="text-base font-bold text-[#1A2B4C] mb-3">
                Descripción de la práctica
              </h2>
              <p className="text-sm text-[#374151] leading-relaxed">
                Apoyarás al equipo de producto en el desarrollo de módulos web internos con React y en la atención de requerimientos de los usuarios. Formarás parte de una célula ágil colaborando directamente con desarrolladores senior y diseñadores UX/UI.
              </p>
            </div>

            {/* Funciones */}
            <div>
              <h2 className="text-base font-bold text-[#1A2B4C] mb-3">
                Funciones principales
              </h2>
              <ul className="space-y-2 text-sm text-[#374151] pl-4 list-disc marker:text-[#1A2B4C]">
                <li>Desarrollo y mantenimiento de componentes reutilizables en React.</li>
                <li>Pruebas, optimización y corrección de incidencias reportadas.</li>
                <li>Documentación técnica de los proyectos asignados.</li>
                <li>Participación activa en las reuniones diarias del equipo.</li>
              </ul>
            </div>

            {/* Perfil Buscado */}
            <div>
              <h2 className="text-base font-bold text-[#1A2B4C] mb-3">
                Perfil buscado
              </h2>
              <ul className="space-y-2 text-sm text-[#374151] pl-4 list-disc marker:text-[#1A2B4C]">
                <li>Estudiante de 7mo a 10mo ciclo de Ingeniería de Sistemas o carreras afines.</li>
                <li>Disponibilidad para realizar prácticas en modalidad híbrida (San Isidro).</li>
                <li>Ganas de aprender y proactividad en la resolución de problemas.</li>
              </ul>
            </div>

            {/* Habilidades Deseadas (Match Tags) */}
            <div>
              <h2 className="text-base font-bold text-[#1A2B4C] mb-3">
                Habilidades deseadas
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                  React <span className="text-[#065F46] font-normal">· tienes esta habilidad</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                  SQL <span className="text-[#065F46] font-normal">· tienes esta habilidad</span>
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1.5 rounded-full">
                  Git
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-3 py-1.5 rounded-full">
                  Pruebas unitarias
                </span>
              </div>
            </div>

            {/* Beneficios */}
            <div>
              <h2 className="text-base font-bold text-[#1A2B4C] mb-2">
                Beneficios
              </h2>
              <p className="text-sm text-[#374151]">
                Movilidad, seguro EPS y horario flexible en época de exámenes.
              </p>
            </div>

            {/* Sobre la Empresa */}
            <div className="pt-6 border-t border-[#F3F4F6]">
              <h2 className="text-base font-bold text-[#1A2B4C] mb-2">
                Sobre la empresa
              </h2>
              <p className="text-sm text-[#374151] leading-relaxed mb-3">
                Consultora peruana de transformación digital con 14 años en el mercado. Acompañamos a bancos, retailers y operadores de telecomunicaciones en la mejora de sus procesos.
              </p>
              <Link to="/empresa/ficha-publica" className="text-sm font-medium text-[#1A2B4C] underline hover:text-[#121E36]">
                Ver ficha de la empresa →
              </Link>
            </div>

            {/* Botones al final del contenido */}
            {estadoSidebar === 'estudiante' && (
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#E5E7EB]">
                <Link to="/postulaciones/modal" className="w-full sm:w-auto px-8 py-3 bg-[#1A2B4C] text-white text-sm font-bold rounded-md hover:bg-[#121E36] transition shadow-sm">
                  Postular ahora
                </Link>
                <button 
                  onClick={() => setGuardada(!guardada)}
                  className="w-full sm:w-auto px-6 py-3 border border-[#1A2B4C] text-[#1A2B4C] text-sm font-bold rounded-md hover:bg-gray-50 transition"
                >
                  {guardada ? '✓ Guardada' : 'Guardar convocatoria'}
                </button>
              </div>
            )}

          </div>

          {/* COLUMNA DERECHA: SIDEBAR STICKY CON VARIANTES (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm sticky top-6 space-y-5">
              
              {/* SUBVENCIÓN */}
              <div>
                <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                  SUBVENCIÓN MENSUAL
                </span>
                <p className={`text-3xl font-bold ${estadoSidebar === 'cerrada' ? 'text-[#9CA3AF]' : 'text-[#1A2B4C]'}`}>
                  S/ 1,850.00
                </p>
              </div>

              {/* PIEZA 1: SIDEBAR ESTUDIANTE NORMAL */}
              {estadoSidebar === 'estudiante' && (
                <>
                  <div className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold py-2 px-3 rounded text-center">
                    Cierra en 23 días
                  </div>
                  <p className="text-xs text-[#6B7280] text-center">
                    Postulaciones hasta el 30/09/2026
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#F3F4F6] text-xs">
                    <div className="flex justify-between"><span className="text-[#6B7280] uppercase font-bold text-[10px]">Modalidad</span><span className="font-semibold text-[#1A2B4C]">Híbrido</span></div>
                    <div className="flex justify-between"><span className="text-[#6B7280] uppercase font-bold text-[10px]">Jornada</span><span className="font-semibold text-[#1A2B4C]">Medio tiempo · 30 h</span></div>
                    <div className="flex justify-between"><span className="text-[#6B7280] uppercase font-bold text-[10px]">Distrito</span><span className="font-semibold text-[#1A2B4C]">San Isidro</span></div>
                    <div className="flex justify-between"><span className="text-[#6B7280] uppercase font-bold text-[10px]">Publicada</span><span className="font-semibold text-[#1A2B4C]">18/08/2026</span></div>
                    <div className="flex justify-between"><span className="text-[#6B7280] uppercase font-bold text-[10px]">Postulantes</span><span className="font-semibold text-[#1A2B4C]">23</span></div>
                  </div>

                  <button className="w-full py-3 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm mt-2">
                    Postular ahora
                  </button>
                  <button 
                    onClick={() => setGuardada(!guardada)}
                    className="w-full py-2.5 border border-[#1A2B4C] text-[#1A2B4C] text-xs font-bold rounded hover:bg-gray-50 transition"
                  >
                    {guardada ? '✓ Convocatoria guardada' : 'Guardar convocatoria'}
                  </button>
                </>
              )}

              {/* PIEZA 2: SIDEBAR VISITANTE SIN CUENTA */}
              {estadoSidebar === 'visitante' && (
                <>
                  <div className="bg-[#EEF2F7] border border-[#DBE3EE] rounded-md p-3 text-xs text-[#1A2B4C] leading-relaxed">
                    ⓘ Necesitas una cuenta de estudiante con correo institucional para postular.
                  </div>

                  <button className="w-full py-3 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm">
                    Iniciar sesión para postular
                  </button>
                  <button className="w-full py-2.5 border border-[#1A2B4C] text-[#1A2B4C] text-xs font-bold rounded hover:bg-gray-50 transition">
                    Crear cuenta de estudiante
                  </button>
                  <p className="text-[11px] text-[#6B7280] text-center">
                    El botón «Guardar» también pide iniciar sesión.
                  </p>
                </>
              )}

              {/* PIEZA 3: SIDEBAR YA POSTULADO */}
              {estadoSidebar === 'postulado' && (
                <>
                  <div className="bg-[#EEF2F7] border border-[#DBE3EE] rounded-md p-3 text-xs text-[#1A2B4C]">
                    <p className="font-bold mb-0.5">Ya postulaste a esta convocatoria</p>
                    <p className="text-[#6B7280] text-[11px]">Enviada el 20/08/2026 · estado: en revisión</p>
                  </div>

                  <button disabled className="w-full py-3 bg-[#F3F4F6] text-[#9CA3AF] text-xs font-bold rounded cursor-not-allowed">
                    Ya postulaste
                  </button>
                  <button className="w-full py-2.5 border border-[#1A2B4C] text-[#1A2B4C] text-xs font-bold rounded hover:bg-gray-50 transition">
                    Ver mi postulación
                  </button>
                  <div className="text-center pt-2">
                    <button className="text-xs font-medium text-[#DC2626] hover:underline">
                      Retirar postulación
                    </button>
                  </div>
                </>
              )}

              {/* PIEZA 4: SIDEBAR CONVOCATORIA CERRADA */}
              {estadoSidebar === 'cerrada' && (
                <>
                  <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-md p-3 text-xs text-[#374151]">
                    <p className="font-bold mb-0.5">Convocatoria cerrada</p>
                    <p className="text-[#6B7280] text-[11px]">Cerró el 31/08/2026 con 41 postulantes.</p>
                  </div>

                  <button disabled className="w-full py-3 bg-[#F3F4F6] text-[#9CA3AF] text-xs font-bold rounded cursor-not-allowed">
                    Postulaciones cerradas
                  </button>
                  <Link to="/convocatorias" className="block w-full py-3 bg-[#1A2B4C] text-white text-xs font-bold rounded text-center hover:bg-[#121E36] transition shadow-sm">
                    Ver convocatorias similares
                  </Link>
                  <p className="text-[11px] text-[#6B7280] text-center">
                    La convocatoria sigue visible, pero sin acción de postular.
                  </p>
                </>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}