import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetallePostulacion() {
  // Estado para controlar el modal de confirmación de retiro
  const [modalRetiroAbierto, setModalRetiroAbierto] = useState(false);
  const [postulacionRetirada, setPostulacionRetirada] = useState(false);

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Mis postulaciones <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Practicante de Desarrollo de Software</span>
        </div>

        {/* Título y Badge de Estado General */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">Estado de la postulación</h1>
          <div>
            {postulacionRetirada ? (
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                Retirada
              </span>
            ) : (
              <span className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                En revisión
              </span>
            )}
          </div>
        </div>

        {/* GRID PRINCIPAL (8 COLS / 4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA: TIMELINE Y AUDITORÍA (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* TIMELINE VERTICAL DE ESTADOS */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-6 pb-2 border-b border-[#F3F4F6]">
                HISTORIAL DE LA CANDIDATURA
              </h2>

              <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#E5E7EB]">
                
                {/* PASO 1: RECIBIDA */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#1A2B4C] text-white font-bold text-xs flex items-center justify-center z-10">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A2B4C]">Recibida</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      20/08/2026 - 09:12 — la empresa recibió tu perfil y tu mensaje.
                    </p>
                  </div>
                </div>

                {/* PASO 2: EN REVISIÓN */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#92400E]">En revisión</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      28/08/2026 - 16:40 — el equipo de selección está evaluando tu perfil.
                    </p>
                  </div>
                </div>

                {/* PASO 3: RESULTADO */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#D1D5DB] z-10" />
                  <div>
                    <h3 className="text-sm font-bold text-[#6B7280]">Resultado</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      Pendiente — te avisaremos por correo cuando la empresa decida.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* SECCIÓN MENSAJE QUE ENVIASTE */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-[#1A2B4C]">
                Mensaje que enviaste
              </h2>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4 text-xs text-[#374151] leading-relaxed">
                "Me interesa el módulo de reportes que mencionan en la convocatoria: hice algo parecido con SQL y React en un proyecto del curso de Bases de Datos, donde reduje en 40% el tiempo de consulta del reporte de ventas."
              </div>

              <p className="text-[11px] text-[#6B7280]">
                Enviado el 20/08/2026. El mensaje no se puede editar después de postular.
              </p>
            </div>

            {/* SECCIÓN PERFIL ENVIADO */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-2">
              <h2 className="text-base font-bold text-[#1A2B4C]">
                Perfil enviado
              </h2>
              <p className="text-xs text-[#374151] font-medium">
                Ingeniería de Sistemas · Octavo ciclo · 9 habilidades · 3 experiencias · 2 enlaces externos
              </p>
              <p className="text-[11px] text-[#6B7280]">
                La empresa ve la versión de tu perfil al momento de postular.
              </p>
            </div>

          </div>

          {/* COLUMNA DERECHA: DATOS DE LA CONVOCATORIA Y RETIRO (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CARD DATOS DE LA CONVOCATORIA */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4 sticky top-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#F3F4F6]">
                <div className="w-12 h-12 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                  AP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A2B4C]">
                    Consultora Andes Perú
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Consultoría · San Isidro
                  </p>
                </div>
              </div>

              {/* Grid 2x2 de Datos */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div>
                  <span className="block text-[10px] font-bold text-[#6B7280] uppercase">SUBVENCIÓN</span>
                  <span className="font-bold text-[#1A2B4C]">S/ 1,850.00</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#6B7280] uppercase">MODALIDAD</span>
                  <span className="font-semibold text-[#374151]">Híbrido</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#6B7280] uppercase">JORNADA</span>
                  <span className="font-semibold text-[#374151]">Medio tiempo</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#6B7280] uppercase">CIERRE</span>
                  <span className="font-semibold text-[#374151]">30/09/2026</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F3F4F6]">
                <Link
                  to="/convocatorias/detalle"
                  className="text-xs font-semibold text-[#1A2B4C] underline hover:text-[#121E36]"
                >
                  Ver la convocatoria →
                </Link>
              </div>

              {/* TARJETA RETIRAR POSTULACIÓN */}
              {!postulacionRetirada && (
                <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4 mt-6 space-y-2">
                  <h4 className="text-xs font-bold text-[#991B1B]">
                    Retirar mi postulación
                  </h4>
                  <p className="text-[11px] text-[#7F1D1D] leading-relaxed">
                    Puedes retirarte mientras la convocatoria siga vigente. No podrás volver a postular a este puesto.
                  </p>
                  <button
                    onClick={() => setModalRetiroAbierto(true)}
                    className="w-full py-2 px-3 border border-[#DC2626] bg-white text-[#DC2626] text-xs font-bold rounded hover:bg-red-50 transition mt-2"
                  >
                    Retirar postulación
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* MODAL DE CONFIRMACIÓN DE RETIRO */}
        {modalRetiroAbierto && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-[#E5E7EB]">
              <h3 className="text-base font-bold text-[#1A2B4C] mb-2">
                ¿Confirmas el retiro de tu postulación?
              </h3>
              <p className="text-xs text-[#374151] mb-4 leading-relaxed">
                Estás por retirarte de <strong>«Practicante de Desarrollo de Software»</strong> en Consultora Andes Perú. La empresa no podrá seguir evaluando tu candidatura.
              </p>
              <div className="bg-red-50 border border-red-200 p-3 rounded text-xs text-red-800 mb-6">
                ⚠️ Esta acción es definitiva y no podrás postular nuevamente a esta oferta.
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalRetiroAbierto(false)}
                  className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setPostulacionRetirada(true);
                    setModalRetiroAbierto(false);
                  }}
                  className="px-4 py-2 bg-[#DC2626] text-white text-xs font-bold rounded hover:bg-red-700 transition"
                >
                  Sí, retirar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}