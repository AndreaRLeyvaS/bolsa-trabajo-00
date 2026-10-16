import { Link } from 'react-router-dom';

export default function FichaPublicaEmpresa() {
  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] py-8 px-4 sm:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-4">
          Empresas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Consultora Andes Perú</span>
        </div>

        {/* HERO / ENCABEZADO DE LA EMPRESA */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm flex flex-col md:flex-row gap-6 items-start sm:items-center">
          {/* Cuadro de Logotipo */}
          <div className="w-32 h-32 md:w-36 md:h-36 bg-[repeating-linear-gradient(45deg,#F3F4F6,#F3F4F6_10px,#E5E7EB_10px,#E5E7EB_20px)] border border-[#E5E7EB] rounded-lg flex items-center justify-center shrink-0">
            <span className="text-sm text-[#9CA3AF] font-medium">logotipo</span>
          </div>

          {/* Información Principal */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#1A2B4C] mb-2">
              Consultora Andes Perú
            </h1>
            
            <p className="text-xs text-[#6B7280] mb-4 leading-relaxed">
              Consultoría <span className="mx-1.5">•</span> De 51 a 200 colaboradores <span className="mx-1.5">•</span> San Isidro, Lima <span className="mx-1.5">•</span>{' '}
              <a href="https://andesperu.com.pe" target="_blank" rel="noreferrer" className="text-[#1A2B4C] underline font-medium">
                andesperu.com.pe
              </a>
            </p>

            {/* Calificación y Estrellas */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#1A2B4C]">4.3 / 5.0</span>
              <div className="flex text-[#F59E0B] text-sm">
                ★ ★ ★ ★ <span className="text-[#D1D5DB]">★</span>
              </div>
              <span className="text-xs text-[#6B7280] ml-1">
                28 reseñas de practicantes
              </span>
            </div>
          </div>
        </div>

        {/* PESTAÑAS (TABS) */}
        <div className="border-b border-[#E5E7EB] mb-6 flex gap-8">
          <button className="pb-3 text-sm font-bold text-[#1A2B4C] border-b-2 border-[#1A2B4C]">
            Convocatorias vigentes (4)
          </button>
          <button className="pb-3 text-sm font-medium text-[#6B7280] hover:text-[#1A2B4C] transition">
            Reseñas (28)
          </button>
        </div>

        {/* CONTENIDO EN 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA: LISTA DE CONVOCATORIAS (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Convocatoria 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-[#1A2B4C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#1A2B4C]">
                        Practicante de Desarrollo de Software
                      </h3>
                      <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded">
                        Vigente
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      Consultora Andes Perú · Consultoría
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Ingeniería de Sistemas · Híbrido · Medio tiempo · San Isidro · Publicada 18/08/2026
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,850.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 30/09/2026</p>
                </div>
              </div>
            </div>

            {/* Convocatoria 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-[#1A2B4C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#1A2B4C]">
                        Practicante de Mejora de Procesos
                      </h3>
                      <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded">
                        Vigente
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      Consultora Andes Perú · Consultoría
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Ingeniería Industrial · Presencial · Tiempo completo · San Isidro · Publicada 12/08/2026
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,600.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 26/09/2026</p>
                </div>
              </div>
            </div>

            {/* Convocatoria 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-[#1A2B4C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#1A2B4C]">
                        Practicante de Gestión Humana
                      </h3>
                      <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded">
                        Vigente
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      Consultora Andes Perú · Consultoría
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Psicología y Administración · Híbrido · Medio tiempo · San Isidro · Publicada 05/08/2026
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,300.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 20/09/2026</p>
                </div>
              </div>
            </div>

            {/* Convocatoria 4 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-[#1A2B4C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#1A2B4C]">
                        Practicante de Soporte TI
                      </h3>
                      <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded">
                        Vigente
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      Consultora Andes Perú · Consultoría
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Ingeniería de Sistemas · Presencial · Medio tiempo · San Isidro · Publicada 02/08/2026
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,150.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 18/09/2026</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: SIDEBAR DE DETALLES Y RESEÑAS (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sobre la empresa */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
              <h2 className="text-sm font-bold text-[#1A2B4C] mb-3">
                Sobre la empresa
              </h2>
              <p className="text-xs text-[#374151] leading-relaxed">
                Consultora peruana de transformación digital con 14 años en el mercado. El programa de prácticas dura seis meses con un mentor asignado.
              </p>
            </div>

            {/* Aspectos mejor calificados */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
              <h2 className="text-sm font-bold text-[#1A2B4C] mb-4">
                Aspectos mejor calificados
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#F3F4F6]">
                  <span className="text-xs text-[#374151] font-medium">Aprendizaje</span>
                  <span className="text-sm font-bold text-[#1A2B4C]">4.6</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#F3F4F6]">
                  <span className="text-xs text-[#374151] font-medium">Ambiente</span>
                  <span className="text-sm font-bold text-[#1A2B4C]">4.4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#374151] font-medium">Carga horaria</span>
                  <span className="text-sm font-bold text-[#1A2B4C]">3.9</span>
                </div>
              </div>
            </div>

            {/* ¿Practicaste aquí? */}
            <div className="bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-lg p-5 text-center">
              <h3 className="text-xs font-bold text-[#1A2B4C] mb-1">
                ¿Practicaste aquí?
              </h3>
              <p className="text-xs text-[#6B7280] mb-4">
                Tu reseña ayuda a otros estudiantes a decidir.
              </p>
              <button className="w-full py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm">
                Escribir una reseña
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}