import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MisPostulaciones() {
  // Filtro activo por pestaña
  const [tabActiva, setTabActiva] = useState('Todas');

  // Estado para el modal de retiro de postulación
  const [modalRetiro, setModalRetiro] = useState(null); // almacena el objeto de la postulación a retirar

  // Listado completo de las 7 postulaciones según el PDF
  const [postulaciones, setPostulaciones] = useState([
    {
      id: 1,
      puesto: "Practicante de Desarrollo de Software",
      empresa: "Consultora Andes Perú",
      sector: "Consultoría",
      iniciales: "AP",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,850.00",
      fechaPostulo: "20/08/2026",
      fechaEstado: "28/08/2026",
      estado: "En revisión"
    },
    {
      id: 2,
      puesto: "Practicante de Data Analytics",
      empresa: "Banco Marítimo del Sur",
      sector: "Banca y finanzas",
      iniciales: "BM",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      subvencion: "S/ 2,100.00",
      fechaPostulo: "02/09/2026",
      fechaEstado: "02/09/2026",
      estado: "Recibida"
    },
    {
      id: 3,
      puesto: "Practicante de Desarrollo Backend",
      empresa: "Software Vilcanota",
      sector: "Tecnología",
      iniciales: "SV",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "Miraflores",
      subvencion: "S/ 1,900.00",
      fechaPostulo: "01/09/2026",
      fechaEstado: "01/09/2026",
      estado: "Recibida"
    },
    {
      id: 4,
      puesto: "Practicante de Automatización de Procesos",
      empresa: "Minera Illariy",
      sector: "Minería",
      iniciales: "MI",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      subvencion: "S/ 2,300.00",
      fechaPostulo: "26/08/2026",
      fechaEstado: "04/09/2026",
      estado: "En revisión"
    },
    {
      id: 5,
      puesto: "Practicante de Inteligencia de Negocios",
      empresa: "Retail Terravista",
      sector: "Retail",
      iniciales: "RT",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,700.00",
      fechaPostulo: "12/08/2026",
      fechaEstado: "05/09/2026",
      estado: "Aceptada"
    },
    {
      id: 6,
      puesto: "Practicante de Soporte TI",
      empresa: "Nexolink Telecom",
      sector: "Telecomunicaciones",
      iniciales: "NT",
      modalidad: "Presencial",
      jornada: "Medio tiempo",
      distrito: "Lince",
      subvencion: "S/ 1,150.00",
      fechaPostulo: "05/08/2026",
      fechaEstado: "22/08/2026",
      estado: "Descartada"
    },
    {
      id: 7,
      puesto: "Practicante de Marketing Digital",
      empresa: "Consumo Pacífico",
      sector: "Consumo masivo",
      iniciales: "CP",
      modalidad: "Remoto",
      jornada: "Medio tiempo",
      distrito: "Surco",
      subvencion: "S/ 1,300.00",
      fechaPostulo: "28/07/2026",
      fechaEstado: "30/07/2026",
      estado: "Retirada"
    }
  ]);

  // Filtrado de la lista según la pestaña seleccionada
  const postulacionesFiltradas = postulaciones.filter((item) => {
    if (tabActiva === 'Todas') return true;
    if (tabActiva === 'Recibidas') return item.estado === 'Recibida';
    if (tabActiva === 'En revisión') return item.estado === 'En revisión';
    if (tabActiva === 'Aceptadas') return item.estado === 'Aceptada';
    if (tabActiva === 'Descartadas') return item.estado === 'Descartada';
    if (tabActiva === 'Retiradas') return item.estado === 'Retirada';
    return true;
  });

  // Función para confirmar el retiro de la postulación
  const confirmarRetiro = () => {
    if (!modalRetiro) return;
    setPostulaciones(
      postulaciones.map((item) =>
        item.id === modalRetiro.id
          ? { ...item, estado: 'Retirada', fechaEstado: '07/09/2026' }
          : item
      )
    );
    setModalRetiro(null);
  };

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Inicio <span className="mx-1">•</span> <span className="text-[#1A2B4C] font-medium">Mis postulaciones</span>
        </div>

        {/* Encabezado */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">Mis postulaciones</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            7 postulaciones • última actualización 06/09/2026
          </p>
        </div>

        {/* Tabs de Filtro por Estado */}
        <div className="border-b border-[#E5E7EB] mb-6 flex flex-wrap gap-6 text-sm font-medium">
          {[
            { label: 'Todas', count: 7 },
            { label: 'Recibidas', count: 2 },
            { label: 'En revisión', count: 2 },
            { label: 'Aceptadas', count: 1 },
            { label: 'Descartadas', count: 1 },
            { label: 'Retiradas', count: 1 }
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => setTabActiva(tab.label)}
              className={`pb-3 text-xs font-semibold transition ${
                tabActiva === tab.label
                  ? 'text-[#1A2B4C] border-b-2 border-[#1A2B4C]'
                  : 'text-[#6B7280] hover:text-[#1A2B4C]'
              }`}
            >
              {tab.label} • {tab.count}
            </button>
          ))}
        </div>

        {/* LISTA DE POSTULACIONES */}
        <div className="space-y-3">
          {postulacionesFiltradas.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:border-[#1A2B4C] transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Logo / Avatar (Col 2) */}
                <div className="md:col-span-2 flex items-center justify-start">
                  <div className="w-12 h-12 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                    {item.iniciales}
                  </div>
                </div>

                {/* Detalles de la postulación (Col 7) */}
                <div className="md:col-span-7 space-y-1">
                  <Link
                    to="/postulaciones/detalle"
                    className="text-base font-bold text-[#1A2B4C] hover:underline block"
                  >
                    {item.puesto}
                  </Link>

                  <p className="text-xs text-[#6B7280]">
                    {item.empresa} · {item.modalidad} · {item.jornada} · {item.distrito} · <strong className="text-[#1A2B4C]">{item.subvencion}</strong>
                  </p>

                  <p className="text-xs text-[#6B7280]">
                    Postulaste el {item.fechaPostulo} • {
                      item.estado === 'Recibida'
                        ? 'Sin cambios desde entonces'
                        : item.estado === 'Retirada'
                        ? `Retirada por ti el ${item.fechaEstado}`
                        : `${item.estado} el ${item.fechaEstado}`
                    }
                  </p>
                </div>

                {/* Estado y Acciones (Col 3) */}
                <div className="md:col-span-3 text-left md:text-right pt-2 md:pt-0 border-t md:border-t-0 border-[#F3F4F6] flex md:block justify-between items-center">
                  
                  {/* Badge Semántico de Estado */}
                  <div className="mb-2">
                    {item.estado === 'Recibida' && (
                      <span className="bg-[#EEF2F7] text-[#1A2B4C] text-xs font-medium px-3 py-1 rounded-full border border-[#DBE3EE]">
                        Recibida
                      </span>
                    )}
                    {item.estado === 'En revisión' && (
                      <span className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                        En revisión
                      </span>
                    )}
                    {item.estado === 'Aceptada' && (
                      <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                        Aceptada
                      </span>
                    )}
                    {item.estado === 'Descartada' && (
                      <span className="bg-[#FEE2E2] text-[#991B1B] text-xs font-bold px-3 py-1 rounded-full border border-red-200">
                        Descartada
                      </span>
                    )}
                    {item.estado === 'Retirada' && (
                      <span className="bg-[#F3F4F6] text-[#6B7280] text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                        Retirada
                      </span>
                    )}
                  </div>

                  {/* Enlaces de Acción Dinámicos */}
                  <div className="flex md:flex-col items-center md:items-end gap-2 text-xs">
                    <Link
                      to="/postulaciones/detalle"
                      className="font-medium text-[#1A2B4C] hover:underline"
                    >
                      Ver detalle
                    </Link>

                    {(item.estado === 'Recibida' || item.estado === 'En revisión') && (
                      <button
                        onClick={() => setModalRetiro(item)}
                        className="font-medium text-[#DC2626] hover:underline"
                      >
                        Retirar postulación
                      </button>
                    )}

                    {item.estado === 'Aceptada' && (
                      <Link to="/postulaciones/detalle" className="font-medium text-[#1A2B4C] hover:underline">
                        Ver siguientes pasos
                      </Link>
                    )}

                    {item.estado === 'Descartada' && (
                      <Link to="/convocatorias" className="font-medium text-[#1A2B4C] hover:underline">
                        Ver convocatorias similares
                      </Link>
                    )}

                    {item.estado === 'Retirada' && (
                      <Link to="/convocatorias/detalle" className="font-medium text-[#1A2B4C] hover:underline">
                        Ver la convocatoria
                      </Link>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* MODAL DE CONFIRMACIÓN DE RETIRO */}
        {modalRetiro && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-[#E5E7EB]">
              <h3 className="text-base font-bold text-[#1A2B4C] mb-2">
                ¿Retirar postulación?
              </h3>
              <p className="text-xs text-[#374151] mb-4 leading-relaxed">
                Estás por retirar tu candidatura para <strong>«{modalRetiro.puesto}»</strong> en {modalRetiro.empresa}. La empresa dejará de evaluar tu perfil y esta acción no se puede deshacer.
              </p>

              <div className="bg-red-50 border border-red-200 p-3 rounded text-xs text-red-800 mb-6">
                ⚠️ No podrás volver a postular a esta misma oferta.
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalRetiro(null)}
                  className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50"
                >
                  Mantener postulación
                </button>
                <button
                  onClick={confirmarRetiro}
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