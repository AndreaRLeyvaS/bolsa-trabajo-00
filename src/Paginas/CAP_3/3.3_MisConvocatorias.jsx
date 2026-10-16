import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MisConvocatorias() {
  // Estados para simular las piezas sueltas
  const [modalCierre, setModalCierre] = useState(false);
  const [verFiltrosActivos, setVerFiltrosActivos] = useState(false);
  const [sinConvocatorias, setSinConvocatorias] = useState(false);

  const convocatorias = [
    { id: 1, puesto: "Practicante de Soporte TI", carreras: "Ing. de Sistemas", publicacion: "02/08/2026", cierre: "18/09/2026", postulantes: 31, estado: "Vigente" },
    { id: 2, puesto: "Practicante de Gestión Humana", carreras: "Psicología, Administración", publicacion: "05/08/2026", cierre: "20/09/2026", postulantes: 14, estado: "Vigente" },
    { id: 3, puesto: "Practicante de Mejora de Procesos", carreras: "Ing. Industrial", publicacion: "12/08/2026", cierre: "26/09/2026", postulantes: 22, estado: "Vigente" },
    { id: 4, puesto: "Practicante de Desarrollo de Software", carreras: "Ing. de Sistemas", publicacion: "18/08/2026", cierre: "30/09/2026", postulantes: 23, estado: "Vigente" },
    { id: 5, puesto: "Practicante de Finanzas", carreras: "Contabilidad, Administración", publicacion: "02/07/2026", cierre: "31/07/2026", postulantes: 18, estado: "Cerrada" },
    { id: 6, puesto: "Practicante de Comercio Exterior", carreras: "Administración", publicacion: "15/06/2026", cierre: "14/07/2026", postulantes: 9, estado: "Cerrada" },
    { id: 7, puesto: "Practicante de Data Analytics", carreras: "Ing. de Sistemas, Ing. Industrial", publicacion: "01/06/2026", cierre: "30/06/2026", postulantes: 27, estado: "Cerrada" },
    { id: 8, puesto: "Practicante de Marketing Digital", carreras: "Marketing, Comunicación", publicacion: "—", cierre: "—", postulantes: 0, estado: "Borrador" },
    { id: 9, puesto: "Practicante de Arquitectura de Datos", carreras: "Ing. de Sistemas", publicacion: "—", cierre: "—", postulantes: 0, estado: "Borrador" }
  ];

  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans">
      
      {/* SIDEBAR LATERAL */}
      <aside className="w-60 bg-white border-r border-[#E5E7EB] py-6 shrink-0 hidden md:block">
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">CONVOCATORIAS</h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/convocatorias" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
              <span>■</span> Mis convocatorias
            </Link>
            <Link to="/empresa/nueva-convocatoria" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Nueva convocatoria
            </Link>
          </nav>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Convocatorias <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Mis convocatorias</span>
        </div>

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">Mis convocatorias</h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              placeholder="Buscar por puesto o carrera"
              className="w-full sm:w-80 h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A2B4C] bg-white shadow-sm"
            />
            <Link
              to="/empresa/nueva-convocatoria"
              className="px-4 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm text-center"
            >
              + Nueva convocatoria
            </Link>
          </div>
        </div>

        {/* CONTROLES DENTRO DE LA DEMO (Para probar con tu profesor) */}
        <div className="mb-4 p-2 bg-gray-100 rounded border border-gray-300 flex gap-4 text-xs">
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" checked={verFiltrosActivos} onChange={() => setVerFiltrosActivos(!verFiltrosActivos)} />
            Simular Filtros Activos
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" checked={sinConvocatorias} onChange={() => setSinConvocatorias(!sinConvocatorias)} />
            Simular Estado Vacío
          </label>
        </div>

        {/* PIEZA SUELTA 2: BARRA DE FILTROS ACTIVOS */}
        {verFiltrosActivos && (
          <div className="mb-4 flex flex-wrap items-center gap-2 bg-white p-3 border border-[#E5E7EB] rounded-lg shadow-sm">
            <span className="text-xs text-[#6B7280] font-bold uppercase mr-1">Filtros:</span>
            <span className="inline-flex items-center gap-1 bg-[#EEF2F7] border border-[#CBD5E1] text-[#1A2B4C] text-xs font-medium px-2.5 py-0.5 rounded-full">
              Vigentes <button onClick={() => setVerFiltrosActivos(false)} className="ml-1 font-bold">✕</button>
            </span>
            <span className="inline-flex items-center gap-1 bg-[#EEF2F7] border border-[#CBD5E1] text-[#1A2B4C] text-xs font-medium px-2.5 py-0.5 rounded-full">
              Ingeniería de Sistemas <button onClick={() => setVerFiltrosActivos(false)} className="ml-1 font-bold">✕</button>
            </span>
            <button onClick={() => setVerFiltrosActivos(false)} className="text-xs text-[#1A2B4C] font-bold hover:underline ml-2">
              Limpiar todo
            </button>
          </div>
        )}

        {/* Filtros por Estado (Tabs) */}
        <div className="border-b border-[#E5E7EB] mb-4 flex gap-6 text-sm font-medium">
          <button className="pb-3 text-[#1A2B4C] font-bold border-b-2 border-[#1A2B4C]">Todas • 9</button>
          <button className="pb-3 text-[#6B7280]">Vigentes • 4</button>
          <button className="pb-3 text-[#6B7280]">Cerradas • 3</button>
          <button className="pb-3 text-[#6B7280]">Borradores • 2</button>
        </div>

        {/* PIEZA SUELTA 1: ESTADO VACÍO vs TABLA */}
        {sinConvocatorias ? (
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-10 text-center my-6 shadow-sm max-w-lg mx-auto">
            <div className="w-12 h-12 bg-[#F3F4F6] text-[#1A2B4C] rounded-lg flex items-center justify-center mx-auto mb-4 text-xl">
              📄
            </div>
            <h3 className="text-base font-bold text-[#1A2B4C] mb-2">Aún no publicas convocatorias</h3>
            <p className="text-xs text-[#6B7280] mb-6 leading-relaxed">
              Publica tu primera convocatoria y aparecerá en el catálogo de los estudiantes cuya carrera coincida con el perfil buscado.
            </p>
            <Link to="/empresa/nueva-convocatoria" className="px-5 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm">
              Crear mi primera convocatoria
            </Link>
          </div>
        ) : (
          /* TABLA DE CONVOCATORIAS */
          <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase">
                  <th className="py-3 px-4">PUESTO</th>
                  <th className="py-3 px-4">CARRERAS</th>
                  <th className="py-3 px-4">PUBLICACIÓN</th>
                  <th className="py-3 px-4">CIERRE</th>
                  <th className="py-3 px-4 text-center">POSTULANTES</th>
                  <th className="py-3 px-4">ESTADO</th>
                  <th className="py-3 px-4 text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] text-xs">
                {convocatorias.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F9FAFB] transition">
                    <td className="py-3.5 px-4 font-semibold text-[#1A2B4C]">{item.puesto}</td>
                    <td className="py-3.5 px-4 text-[#374151]">{item.carreras}</td>
                    <td className="py-3.5 px-4 text-[#6B7280]">{item.publicacion}</td>
                    <td className="py-3.5 px-4 text-[#6B7280]">{item.cierre}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#1A2B4C]">{item.postulantes}</td>
                    <td className="py-3.5 px-4">
                      {item.estado === "Vigente" && <span className="bg-[#D1FAE5] text-[#065F46] font-bold text-[10px] px-2.5 py-0.5 rounded-full">Vigente</span>}
                      {item.estado === "Cerrada" && <span className="bg-[#F3F4F6] text-[#6B7280] font-bold text-[10px] px-2.5 py-0.5 rounded-full">Cerrada</span>}
                      {item.estado === "Borrador" && <span className="bg-[#FEF3C7] text-[#92400E] font-bold text-[10px] px-2.5 py-0.5 rounded-full">Borrador</span>}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button onClick={() => setModalCierre(true)} className="text-[#6B7280] hover:text-[#1A2B4C] font-bold px-2 py-1 rounded hover:bg-gray-100">
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PIEZA SUELTA 4: MODAL DE CIERRE DE CONVOCATORIA */}
        {modalCierre && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg border border-[#E5E7EB]">
              <h3 className="text-base font-bold text-[#1A2B4C] mb-2">¿Cerrar esta convocatoria?</h3>
              <p className="text-xs text-[#374151] mb-4 leading-relaxed">
                «Practicante de Desarrollo de Software» tiene 23 postulantes. Al cerrarla, los estudiantes ya no podrán postular y la convocatoria saldrá del catálogo.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded text-xs text-amber-800 mb-6">
                ⚠️ <strong>Esta acción no se puede deshacer.</strong> Las postulaciones recibidas se conservan en tu bandeja.
              </div>
              <div className="flex items-center justify-end gap-3">
                <button onClick={() => setModalCierre(false)} className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded">
                  Mantener abierta
                </button>
                <button onClick={() => setModalCierre(false)} className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded">
                  Cerrar convocatoria
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}