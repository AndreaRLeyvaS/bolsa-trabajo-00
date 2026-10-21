import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostulacionModal() {
  // Estado para alternar entre las 4 piezas del punto 5.1
  const [piezaActiva, setPiezaActiva] = useState('sin_guardadas'); // 'modal_confirmar' | 'perfil_incompleto' | 'sin_guardadas' | 'sin_postulaciones'
  
  // Estado para el mensaje al reclutador y contador de caracteres
  const [mensaje, setMensaje] = useState(
    "Me interesa el módulo de reportes que mencionan en la convocatoria: hice algo parecido con SQL y React en un proyecto del curso de Bases de Datos."
  );

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans p-6">
      
      {/* BARRA DE DEMO PARA EL PROFESOR (Alternar Piezas del 5.1) */}
      <div className="max-w-[1200px] mx-auto bg-gray-100 border border-gray-300 rounded-lg p-3 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-[#1A2B4C]">Probar Piezas del Punto 5.1:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPiezaActiva('modal_confirmar')}
              className={`px-3 py-1.5 rounded font-medium border ${piezaActiva === 'modal_confirmar' ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              1. Modal Confirmar Postulación
            </button>
            <button
              onClick={() => setPiezaActiva('perfil_incompleto')}
              className={`px-3 py-1.5 rounded font-medium border ${piezaActiva === 'perfil_incompleto' ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              2. Aviso Perfil Incompleto
            </button>
            <button
              onClick={() => setPiezaActiva('sin_guardadas')}
              className={`px-3 py-1.5 rounded font-medium border ${piezaActiva === 'sin_guardadas' ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              3. Sin Guardadas (4.3)
            </button>
            <button
              onClick={() => setPiezaActiva('sin_postulaciones')}
              className={`px-3 py-1.5 rounded font-medium border ${piezaActiva === 'sin_postulaciones' ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              4. Sin Postulaciones (5.3)
            </button>
          </div>
        </div>
      </div>

      {/* 🧩 PIEZA 1: MODAL DE CONFIRMAR POSTULACIÓN */}
      {piezaActiva === 'modal_confirmar' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-[560px] w-full shadow-2xl border border-[#E5E7EB] relative max-h-[90vh] overflow-y-auto">
            
            {/* Header del Modal */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1A2B4C]">Confirmar postulación</h2>
                <p className="text-sm text-[#6B7280] mt-1">Revisa lo que enviarás a la empresa.</p>
              </div>
              <button 
                onClick={() => setPiezaActiva('modal_confirmar')}
                className="text-gray-400 hover:text-black font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Resumen de Convocatoria */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4 my-5">
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-2 w-10 h-10 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-xs flex items-center justify-center shrink-0">
                  AP
                </div>
                <div className="col-span-7">
                  <h3 className="text-sm font-bold text-[#1A2B4C] truncate">
                    Practicante de Desarrollo de Software
                  </h3>
                  <p className="text-xs text-[#6B7280] truncate mt-0.5">
                    Consultora Andes Perú · Híbrido · San Isidro · cierra 30/09/2026
                  </p>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-base font-bold text-[#1A2B4C]">S/ 1,850.00</span>
                </div>
              </div>
            </div>

            {/* Perfil que se enviará */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  PERFIL QUE SE ENVIARÁ
                </span>
                <button className="text-xs font-semibold text-[#1A2B4C] underline hover:text-[#121E36]">
                  Editar mi perfil
                </button>
              </div>

              <div className="border border-[#E5E7EB] rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-[repeating-linear-gradient(45deg,#F3F4F6,#F3F4F6_8px,#E5E7EB_8px,#E5E7EB_16px)] rounded-lg border border-[#E5E7EB] shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#1A2B4C]">Mariana Lucía Quispe Ramírez</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    Ingeniería de Sistemas · Octavo ciclo · 9 habilidades · 3 experiencias
                  </p>
                </div>
              </div>
            </div>

            {/* Mensaje al Reclutador */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">
                MENSAJE AL RECLUTADOR — OPCIONAL
              </span>
              <textarea
                rows={3}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                maxLength={500}
                className="w-full p-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C] leading-relaxed"
              />
              <div className="flex justify-between text-[11px] text-[#6B7280]">
                <span>Cuenta en una o dos frases por qué te interesa el puesto.</span>
                <span>{mensaje.length} / 500</span>
              </div>
            </div>

            {/* Footer Botones */}
            <div className="flex justify-end gap-3 pt-5 mt-6 border-t border-[#F3F4F6]">
              <button 
                onClick={() => setPiezaActiva('modal_confirmar')}
                className="px-5 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
              <Link 
                to="/postulaciones/confirmacion"
                className="px-6 py-2.5 bg-[#0F8B7E] text-white text-[15px] font-semibold rounded-[6px] hover:bg-[#0C6F65] transition shadow-[0_1px_2px_rgba(18,58,95,0.06)] inline-block"
              >
                Enviar postulación
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* 🧩 PIEZA 2: AVISO DE PERFIL INCOMPLETO */}
      {piezaActiva === 'perfil_incompleto' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-7 max-w-[520px] w-full shadow-2xl border border-[#E5E7EB]">
            
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-lg flex items-center justify-center mb-4">
              !
            </div>

            <p className="text-sm text-[#374151] leading-relaxed mb-4">
              Tu perfil está completo al <strong>42 %</strong>. Puedes postular igual, pero las empresas priorizan perfiles con habilidades y experiencia.
            </p>

            {/* Barra de Progreso */}
            <div className="w-full bg-[#F3F4F6] h-2 rounded-full mb-6 overflow-hidden">
              <div className="bg-[#F59E0B] h-full w-[42%]" />
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-5 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50 transition">
                Postular así
              </button>
              <button className="px-5 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm">
                Completar mi perfil
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 🧩 PIEZA 3: ESTADO VACÍO - 4.3 SIN CONVOCATORIAS GUARDADAS */}
      {piezaActiva === 'sin_guardadas' && (
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-12 text-center max-w-[520px] mx-auto my-8 shadow-sm">
          <div className="w-24 h-24 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-5 text-4xl text-[#1A2B4C]">
            ☆
          </div>
          <h2 className="text-xl font-bold text-[#1A2B4C] mb-2">
            No has guardado convocatorias
          </h2>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm mx-auto mb-6">
            Guarda las que te interesen desde el catálogo y compáralas antes de postular.
          </p>
          <Link
            to="/convocatorias"
            className="inline-block px-6 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
          >
            Ir al catálogo
          </Link>
        </div>
      )}

      {/* 🧩 PIEZA 4: ESTADO VACÍO - 5.3 SIN POSTULACIONES */}
      {piezaActiva === 'sin_postulaciones' && (
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-12 text-center max-w-[560px] mx-auto my-8 shadow-sm">
          <div className="w-24 h-24 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-5 text-4xl text-[#1A2B4C]">
            📄
          </div>
          <h2 className="text-xl font-bold text-[#1A2B4C] mb-2">
            Aún no postulas a ninguna convocatoria
          </h2>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-md mx-auto mb-6">
            Hay 38 convocatorias vigentes para Ingeniería de Sistemas. Aquí verás el estado de cada postulación que envíes.
          </p>
          <Link
            to="/convocatorias"
            className="inline-block px-6 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
          >
            Ver convocatorias de mi carrera
          </Link>
        </div>
      )}

    </div>
  );
}