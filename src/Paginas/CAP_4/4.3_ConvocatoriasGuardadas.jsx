import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ConvocatoriasGuardadas() {
  // Lista inicial con las 5 convocatorias guardadas requeridas
  const [listaGuardadas, setListaGuardadas] = useState([
    {
      id: 1,
      puesto: "Practicante de Arquitectura de Datos",
      empresa: "Consumo Pacífico",
      sector: "Consumo masivo",
      iniciales: "CP",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      fechaGuardada: "02/09/2026",
      subvencion: "S/ 1,600.00",
      cierre: "12/09/2026",
      urgente: true // Cierra en 5 días
    },
    {
      id: 2,
      puesto: "Practicante de Data Analytics",
      empresa: "Banco Marítimo del Sur",
      sector: "Banca y finanzas",
      iniciales: "BM",
      carrera: "Ing. de Sistemas e Ing. Industrial",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      fechaGuardada: "30/08/2026",
      subvencion: "S/ 2,100.00",
      cierre: "24/09/2026",
      urgente: false
    },
    {
      id: 3,
      puesto: "Practicante de Desarrollo Backend",
      empresa: "Software Vilcanota",
      sector: "Tecnología",
      iniciales: "SV",
      carrera: "Ingeniería de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "Miraflores",
      fechaGuardada: "28/08/2026",
      subvencion: "S/ 1,900.00",
      cierre: "20/09/2026",
      urgente: false
    },
    {
      id: 4,
      puesto: "Practicante de Automatización de Procesos",
      empresa: "Minera Illariy",
      sector: "Minería",
      iniciales: "MI",
      carrera: "Ing. de Sistemas e Ing. Industrial",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      fechaGuardada: "24/08/2026",
      subvencion: "S/ 2,300.00",
      cierre: "14/09/2026",
      urgente: false
    },
    {
      id: 5,
      puesto: "Practicante de Soporte TI",
      empresa: "Nexolink Telecom",
      sector: "Telecomunicaciones",
      iniciales: "NT",
      carrera: "Ingeniería de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      fechaGuardada: "20/08/2026",
      subvencion: "S/ 1,450.00",
      cierre: "22/09/2026",
      urgente: false
    }
  ]);

  // Estado para el menú contextual abierto por tarjeta
  const [menuAbiertoId, setMenuAbiertoId] = useState(null);

  // Función para quitar una convocatoria de la lista
  const quitarConvocatoria = (id) => {
    setListaGuardadas(listaGuardadas.filter(item => item.id !== id));
    setMenuAbiertoId(null);
  };

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* BARRA DE DEMO (Para simular la Pieza Suelta Estado Vacío) */}
      <div className="bg-gray-100 border-b border-gray-300 px-6 py-2">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-xs">
          <span className="font-bold text-[#1A2B4C]">Probar Pieza Suelta (Estado Vacío):</span>
          <div className="flex gap-2">
            <button
              onClick={() => setListaGuardadas([])}
              className="px-3 py-1 bg-white border border-gray-300 rounded text-[#374151] hover:bg-gray-50 font-medium"
            >
              Simular Lista Vacía
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 bg-[#1A2B4C] text-white rounded font-medium"
            >
              Restablecer 5 Guardadas
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Inicio <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Convocatorias guardadas</span>
        </div>

        {/* Título e Información Resumida */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">Convocatorias guardadas</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            {listaGuardadas.length} convocatorias guardadas
            {listaGuardadas.some(i => i.urgente) && " - 1 cierra esta semana"}
          </p>
        </div>

        {/* ALERTA DESTACADA DE URGENCIA */}
        {listaGuardadas.some(i => i.urgente) && (
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3.5 mb-6 flex items-center gap-3 text-sm text-[#92400E]">
            <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white font-bold flex items-center justify-center shrink-0 text-xs">
              !
            </span>
            <p className="leading-tight">
              <strong>«Practicante de Arquitectura de Datos»</strong> cierra el 12/09/2026. Postula antes de esa fecha.
            </p>
          </div>
        )}

        {/* LISTADO DE CONVOCATORIAS GUARDADAS O ESTADO VACÍO */}
        {listaGuardadas.length > 0 ? (
          <div className="space-y-3">
            {listaGuardadas.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Avatar de la empresa (Col 2) */}
                  <div className="md:col-span-2 flex items-center justify-start">
                    <div className="w-12 h-12 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                      {item.iniciales}
                    </div>
                  </div>

                  {/* Información central (Col 8) */}
                  <div className="md:col-span-8 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link to="/convocatorias/detalle" className="text-base font-bold text-[#1A2B4C] hover:underline">
                        {item.puesto}
                      </Link>

                      {item.urgente ? (
                        <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-2 py-0.5 rounded">
                          Cierra en 5 días
                        </span>
                      ) : (
                        <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded">
                          Vigente
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#6B7280]">
                      {item.empresa} · {item.sector}
                    </p>

                    <p className="text-xs text-[#6B7280]">
                      {item.carrera} · {item.modalidad} · {item.jornada} · {item.distrito} · <span className="text-[#374151]">Guardada el {item.fechaGuardada}</span>
                    </p>
                  </div>

                  {/* Subvención y Cierre (Col 2) */}
                  <div className="md:col-span-2 text-left md:text-right shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#F3F4F6] flex md:block justify-between items-center">
                    <div>
                      <p className="text-base font-bold text-[#1A2B4C]">{item.subvencion}</p>
                      <p className="text-xs text-[#6B7280]">Cierra {item.cierre}</p>
                    </div>

                    {/* Menú de tres puntos para eliminar */}
                    <div className="relative inline-block text-left md:mt-2">
                      <button
                        onClick={() => setMenuAbiertoId(menuAbiertoId === item.id ? null : item.id)}
                        className="p-1 text-[#6B7280] hover:text-[#1A2B4C] font-bold rounded hover:bg-gray-100"
                      >
                        ⋮
                      </button>

                      {menuAbiertoId === item.id && (
                        <div className="absolute right-0 mt-1 w-44 bg-white border border-[#E5E7EB] rounded-md shadow-lg z-10 py-1">
                          <button
                            onClick={() => quitarConvocatoria(item.id)}
                            className="w-full text-left px-4 py-2 text-xs text-[#DC2626] hover:bg-red-50 font-medium"
                          >
                            Quitar de guardadas
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* PIEZA SUELTA: ESTADO VACÍO */
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-12 text-center my-8 shadow-sm max-w-lg mx-auto">
            <div className="w-24 h-24 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-[#1A2B4C]">
              🔖
            </div>
            <h2 className="text-xl font-bold text-[#1A2B4C] mb-2">
              Aún no has guardado convocatorias
            </h2>
            <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
              Guarda las oportunidades que te interesen para revisarlas o postular más tarde.
            </p>
            <Link
              to="/convocatorias"
              className="inline-block px-6 py-3 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
            >
              Explorar convocatorias
            </Link>
          </div>
        )}

      </div>

    </div>
  );
}