import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CatalogoConvocatorias() {
  // Estados de simulación para las Piezas Sueltas de P2 (Cargando y Sin resultados)
  const [cargando, setCargando] = useState(false);
  const [sinResultados, setSinResultados] = useState(false);

  // Estados de filtros interactivos
  const [modalidadSel, setModalidadSel] = useState('Híbrido');
  const [jornadaSel, setJornadaSel] = useState('Medio tiempo');
  const [subvencionMin, setSubvencionMin] = useState(1400);
  const [soloVigentes, setSoloVigentes] = useState(true);

  // Lista con las 8 convocatorias requeridas en la vista
  const convocatorias = [
    {
      id: 1,
      puesto: "Practicante de Desarrollo de Software",
      empresa: "Consultora Andes Perú",
      sector: "Consultoría",
      iniciales: "AP",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,850.00",
      cierre: "30/09/2026",
      urgente: false
    },
    {
      id: 2,
      puesto: "Practicante de Data Analytics",
      empresa: "Banco Marítimo del Sur",
      sector: "Banca y finanzas",
      iniciales: "BM",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      subvencion: "S/ 2,100.00",
      cierre: "28/09/2026",
      urgente: false
    },
    {
      id: 3,
      puesto: "Practicante de Soporte TI",
      empresa: "Nexolink Telecom",
      sector: "Telecomunicaciones",
      iniciales: "NT",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,450.00",
      cierre: "22/09/2026",
      urgente: false
    },
    {
      id: 4,
      puesto: "Practicante de Desarrollo Backend",
      empresa: "Software Vilcanota",
      sector: "Tecnología",
      iniciales: "SV",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "Miraflores",
      subvencion: "S/ 1,900.00",
      cierre: "25/09/2026",
      urgente: false
    },
    {
      id: 5,
      puesto: "Practicante de Inteligencia de Negocios",
      empresa: "Retail Tarvavista",
      sector: "Retail",
      iniciales: "RT",
      carrera: "Ing. Industrial",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,700.00",
      cierre: "18/09/2026",
      urgente: false
    },
    {
      id: 6,
      puesto: "Practicante de Aseguramiento de Calidad",
      empresa: "Salud Huascarán",
      sector: "Salud",
      iniciales: "SH",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,500.00",
      cierre: "20/09/2026",
      urgente: false
    },
    {
      id: 7,
      puesto: "Practicante de Automatización de Procesos",
      empresa: "Minera Illariy",
      sector: "Minería",
      iniciales: "MI",
      carrera: "Ing. Industrial",
      modalidad: "Híbrido",
      jornada: "Tiempo completo",
      distrito: "Miraflores",
      subvencion: "S/ 2,300.00",
      cierre: "14/09/2026",
      urgente: false
    },
    {
      id: 8,
      puesto: "Practicante de Arquitectura de Datos",
      empresa: "Consumo Pacífico",
      sector: "Consumo masivo",
      iniciales: "CP",
      carrera: "Ing. de Sistemas",
      modalidad: "Híbrido",
      jornada: "Medio tiempo",
      distrito: "San Isidro",
      subvencion: "S/ 1,600.00",
      cierre: "12/09/2026",
      urgente: true // Badge "Cierra en 5 días"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* BARRA DE DEMO PARA PROBAR PIEZAS SUELTAS P2 */}
      <div className="bg-gray-100 border-b border-gray-300 px-6 py-2">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-xs">
          <span className="font-bold text-[#1A2B4C]">Probar Piezas Sueltas 4.1 (Página 2):</span>
          <div className="flex gap-2">
            <button
              onClick={() => { setCargando(!cargando); setSinResultados(false); }}
              className={`px-3 py-1 rounded font-medium border ${cargando ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              Simular Estado Cargando (Esqueletos)
            </button>
            <button
              onClick={() => { setSinResultados(!sinResultados); setCargando(false); }}
              className={`px-3 py-1 rounded font-medium border ${sinResultados ? 'bg-[#1A2B4C] text-white' : 'bg-white text-[#374151]'}`}
            >
              Simular Sin Resultados (Búsqueda Vacía)
            </button>
          </div>
        </div>
      </div>

      {/* CUERPO PRINCIPAL (GRID 12 COLUMNAS) */}
      <div className="max-w-[1200px] mx-auto p-6 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR DE FILTROS (3 Cols) */}
          <aside className="lg:col-span-3">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm sticky top-6 space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-3">
                <h2 className="text-base font-bold text-[#1A2B4C]">Filtros</h2>
                <button 
                  onClick={() => setSinResultados(false)}
                  className="text-xs text-[#1A2B4C] font-semibold underline hover:text-[#121E36]"
                >
                  Limpiar todo
                </button>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Buscar puesto o empresa"
                  className="w-full h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A2B4C]"
                />
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                  CARRERA
                </h3>
                
                <div className="bg-[#EEF2F7] border border-[#DBE3EE] rounded-md p-2.5 mb-3 text-xs text-[#1A2B4C] flex gap-2">
                  <span className="font-bold">ⓘ</span>
                  <p className="leading-tight">
                    Preseleccionamos <strong>Ingeniería de Sistemas</strong>, tu carrera. Puedes agregar otras.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#374151]">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="accent-[#1A2B4C] w-4 h-4" />
                      <span>Ingeniería de Sistemas</span>
                    </div>
                    <span className="text-[#6B7280] text-[11px]">38</span>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#1A2B4C] w-4 h-4" />
                      <span>Ingeniería Industrial</span>
                    </div>
                    <span className="text-[#6B7280] text-[11px]">26</span>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#1A2B4C] w-4 h-4" />
                      <span>Administración</span>
                    </div>
                    <span className="text-[#6B7280] text-[11px]">21</span>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#1A2B4C] w-4 h-4" />
                      <span>Marketing</span>
                    </div>
                    <span className="text-[#6B7280] text-[11px]">15</span>
                  </label>
                </div>

                <button className="text-xs text-[#1A2B4C] font-semibold mt-2 hover:underline">
                  Ver las 10 carreras
                </button>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                  MODALIDAD
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Híbrido', 'Presencial', 'Remoto'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setModalidadSel(item)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                        modalidadSel === item
                          ? 'bg-[#1A2B4C] text-white'
                          : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                  JORNADA
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Medio tiempo', 'Tiempo completo'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setJornadaSel(item)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                        jornadaSel === item
                          ? 'bg-[#1A2B4C] text-white'
                          : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                  DISTRITO
                </h3>
                <select
                  defaultValue="San Isidro, Miraflores"
                  className="w-full h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] bg-white focus:outline-none focus:border-[#1A2B4C]"
                >
                  <option value="San Isidro, Miraflores">San Isidro, Miraflores</option>
                  <option value="Surco, La Molina">Surco, La Molina</option>
                  <option value="Lima Centro">Lima Centro</option>
                  <option value="Todos los distritos">Todos los distritos</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                    SUBVENCIÓN MÍNIMA
                  </h3>
                </div>
                <input
                  type="range"
                  min="1025"
                  max="2500"
                  step="50"
                  value={subvencionMin}
                  onChange={(e) => setSubvencionMin(e.target.value)}
                  className="w-full accent-[#1A2B4C] bg-[#E5E7EB] h-1.5 rounded-lg cursor-pointer"
                />
                <p className="text-xs text-[#6B7280] mt-1 font-medium">
                  Desde S/ {Number(subvencionMin).toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#F3F4F6]">
                <span className="text-xs text-[#374151] font-medium">
                  Solo convocatorias vigentes
                </span>
                <button
                  onClick={() => setSoloVigentes(!soloVigentes)}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition ${
                    soloVigentes ? 'bg-[#1A2B4C]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                      soloVigentes ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          </aside>

          {/* CONTENIDO PRINCIPAL DE RESULTADOS (9 Cols) */}
          <main className="lg:col-span-9">
            
            {/* OPCIÓN A: PIEZA SUELTA - CARGANDO CON ESQUELETOS */}
            {cargando ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-60 h-5 bg-[#E5E7EB] rounded animate-pulse" />
                  <div className="w-32 h-5 bg-[#E5E7EB] rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-sm space-y-3">
                      <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-3 w-11 h-11 bg-[#E5E7EB] rounded animate-pulse" />
                        <div className="col-span-9 space-y-2">
                          <div className="w-3/4 h-3.5 bg-[#E5E7EB] rounded animate-pulse" />
                          <div className="w-1/2 h-3 bg-[#E5E7EB] rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-[#F3F4F6]">
                        <div className="w-20 h-3 bg-[#E5E7EB] rounded animate-pulse" />
                        <div className="w-16 h-3 bg-[#E5E7EB] rounded animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : sinResultados ? (
              
              /* OPCIÓN B: PIEZA SUELTA - ESTADO SIN RESULTADOS */
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-12 text-center my-4 shadow-sm max-w-xl mx-auto">
                <div className="w-24 h-24 bg-[#EEF2F7] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-[#1A2B4C]">
                  ?
                </div>
                <h2 className="text-xl font-bold text-[#1A2B4C] mb-2">
                  Ninguna convocatoria coincide con tus filtros
                </h2>
                <p className="text-sm text-[#6B7280] mb-6 leading-relaxed max-w-md mx-auto">
                  Prueba con otro término, baja la subvención mínima o agrega más carreras y modalidades.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => setSinResultados(false)}
                    className="px-6 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm"
                  >
                    Quitar todos los filtros
                  </button>
                  <button
                    onClick={() => setSinResultados(false)}
                    className="px-6 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-medium rounded-md hover:bg-gray-50 transition"
                  >
                    Ver todas las convocatorias
                  </button>
                </div>
              </div>

            ) : (

              /* OPCIÓN C: RESULTADOS NORMALES (8 CARDS) */
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A2B4C]">Convocatorias vigentes</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      38 resultados para Ingeniería de Sistemas
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6B7280]">Ordenar por:</span>
                    <select className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] bg-white focus:outline-none">
                      <option value="cierre">Cierre más próximo</option>
                      <option value="recientes">Más recientes</option>
                      <option value="subvencion">Mayor subvención</option>
                    </select>
                  </div>
                </div>

                {/* Chips de Filtros Activos */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-[#EEF2F7] border border-[#DBE3EE] text-[#1A2B4C] text-xs font-medium px-2.5 py-1 rounded-md">
                    Ingeniería de Sistemas <button className="text-[#6B7280] hover:text-black">✕</button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#EEF2F7] border border-[#DBE3EE] text-[#1A2B4C] text-xs font-medium px-2.5 py-1 rounded-md">
                    Híbrido <button className="text-[#6B7280] hover:text-black">✕</button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#EEF2F7] border border-[#DBE3EE] text-[#1A2B4C] text-xs font-medium px-2.5 py-1 rounded-md">
                    San Isidro, Miraflores <button className="text-[#6B7280] hover:text-black">✕</button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#EEF2F7] border border-[#DBE3EE] text-[#1A2B4C] text-xs font-medium px-2.5 py-1 rounded-md">
                    Desde S/ 1,400.00 <button className="text-[#6B7280] hover:text-black">✕</button>
                  </span>
                </div>

                {/* GRID DE CONVOCATORIAS (2 COLUMNAS) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {convocatorias.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-sm hover:border-[#1A2B4C] transition flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-11 h-11 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
                          {item.iniciales}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <Link to="/convocatorias/detalle" className="text-sm font-bold text-[#1A2B4C] hover:underline truncate">
                              {item.puesto}
                            </Link>
                          </div>
                          <p className="text-xs text-[#6B7280] mt-0.5 truncate">
                            {item.empresa} · {item.sector}
                          </p>
                          <p className="text-[11px] text-[#6B7280] mt-1 truncate">
                            {item.carrera} · {item.modalidad} · {item.jornada} · {item.distrito}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
                        <div>
                          <p className="text-sm font-bold text-[#1A2B4C]">{item.subvencion}</p>
                          <p className="text-[11px] text-[#6B7280]">Cierra {item.cierre}</p>
                        </div>

                        {item.urgente && (
                          <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-2 py-0.5 rounded">
                            Cierra en 5 días
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* BARRA DE PAGINACIÓN */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xs text-[#6B7280]">
                    Mostrando 1–8 de 38 convocatorias
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button disabled className="px-3 py-1.5 border border-[#E5E7EB] rounded text-xs text-gray-400 bg-white cursor-not-allowed">
                      Anterior
                    </button>
                    <button className="w-8 h-8 bg-[#1A2B4C] text-white font-bold text-xs rounded flex items-center justify-center">
                      1
                    </button>
                    <button className="w-8 h-8 bg-white border border-[#E5E7EB] text-[#374151] font-medium text-xs rounded flex items-center justify-center hover:bg-gray-50">
                      2
                    </button>
                    <button className="w-8 h-8 bg-white border border-[#E5E7EB] text-[#374151] font-medium text-xs rounded flex items-center justify-center hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-1.5 border border-[#E5E7EB] rounded text-xs text-[#374151] bg-white hover:bg-gray-50 transition">
                      Siguiente
                    </button>
                  </div>
                </div>
              </>
            )}

          </main>

        </div>
      </div>

    </div>
  );
}