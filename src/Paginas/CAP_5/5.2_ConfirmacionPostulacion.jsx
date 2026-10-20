import { Link } from 'react-router-dom';

export default function ConfirmacionPostulacion() {
  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans py-12 px-4 sm:px-6">
      
      {/* CONTENEDOR CENTRADO DE ÉXITO */}
      <div className="max-w-[720px] mx-auto text-center">
        
        {/* ÍCONO DE CHECK VERDE */}
        <div className="w-20 h-20 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-6 text-[#059669] text-4xl font-bold shadow-sm">
          ✓
        </div>

        {/* TÍTULO Y DESCRIPCIÓN */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A2B4C] mb-3">
          Tu postulación fue enviada
        </h1>
        <p className="text-sm text-[#6B7280] leading-relaxed max-w-[560px] mx-auto mb-8">
          Consultora Andes Perú recibió tu perfil y tu mensaje para <strong>«Practicante de Desarrollo de Software»</strong>. Te avisaremos por correo cada vez que el estado cambie.
        </p>

        {/* CARD DE ESTADO DE LA POSTULACIÓN */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4 md:p-5 mb-8 flex items-center justify-between gap-4 text-left shadow-sm">
          <div>
            <h3 className="text-base font-bold text-[#1A2B4C]">
              Practicante de Desarrollo de Software
            </h3>
            <p className="text-xs text-[#6B7280] mt-1">
              Enviada el 07/09/2026 · 10:24
            </p>
          </div>

          <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 shrink-0">
            Recibida
          </span>
        </div>

        {/* BOTONES PRINCIPALES DE NAVEGACIÓN */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            to="/postulaciones"
            className="w-full sm:w-auto px-6 py-3 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm text-center"
          >
            Ir a mis postulaciones
          </Link>
          <Link
            to="/convocatorias"
            className="w-full sm:w-auto px-6 py-3 border border-[#1A2B4C] bg-white text-[#1A2B4C] text-xs font-bold rounded-md hover:bg-gray-50 transition text-center"
          >
            Seguir buscando
          </Link>
        </div>

        {/* SECCIÓN OTRAS CONVOCATORIAS DE TU CARRERA */}
        <div className="text-left pt-8 border-t border-[#E5E7EB]">
          <h2 className="text-xl font-bold text-[#1A2B4C] mb-4">
            Otras convocatorias de tu carrera
          </h2>

          <div className="space-y-3">
            
            {/* Tarjeta 1: Software Vilcanota */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-2 sm:col-span-1 w-11 h-11 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                  SV
                </div>

                <div className="col-span-10 sm:col-span-8">
                  <Link to="/convocatorias/detalle" className="text-sm font-bold text-[#1A2B4C] hover:underline block truncate">
                    Practicante de Desarrollo Backend
                  </Link>
                  <p className="text-xs text-[#6B7280] mt-0.5 truncate">
                    Software Vilcanota · Tecnología
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-medium px-2 py-0.5 rounded">
                      Ingeniería de Sistemas
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Híbrido · Medio tiempo · Miraflores
                    </span>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-3 text-left sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3F4F6]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,900.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 20/09/2026</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Nexolink Telecom */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-sm hover:border-[#1A2B4C] transition">
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-2 sm:col-span-1 w-11 h-11 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                  NT
                </div>

                <div className="col-span-10 sm:col-span-8">
                  <Link to="/convocatorias/detalle" className="text-sm font-bold text-[#1A2B4C] hover:underline block truncate">
                    Practicante de Soporte TI
                  </Link>
                  <p className="text-xs text-[#6B7280] mt-0.5 truncate">
                    Nexolink Telecom · Telecomunicaciones
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-medium px-2 py-0.5 rounded">
                      Ingeniería de Sistemas
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Híbrido · Medio tiempo · San Isidro
                    </span>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-3 text-left sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3F4F6]">
                  <p className="text-base font-bold text-[#1A2B4C]">S/ 1,450.00</p>
                  <p className="text-xs text-[#6B7280]">Cierra 22/09/2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}