import { Link } from 'react-router-dom';

export default function MisConvocatorias() {
  // Lista de las 9 convocatorias requeridas
  const convocatorias = [
    {
      id: 1,
      puesto: "Practicante de Soporte TI",
      carreras: "Ing. de Sistemas",
      publicacion: "02/08/2026",
      cierre: "18/09/2026",
      postulantes: 31,
      estado: "Vigente"
    },
    {
      id: 2,
      puesto: "Practicante de Gestión Humana",
      carreras: "Psicología, Administración",
      publicacion: "05/08/2026",
      cierre: "20/09/2026",
      postulantes: 14,
      estado: "Vigente"
    },
    {
      id: 3,
      puesto: "Practicante de Mejora de Procesos",
      carreras: "Ing. Industrial",
      publicacion: "12/08/2026",
      cierre: "26/09/2026",
      postulantes: 22,
      estado: "Vigente"
    },
    {
      id: 4,
      puesto: "Practicante de Desarrollo de Software",
      carreras: "Ing. de Sistemas",
      publicacion: "18/08/2026",
      cierre: "30/09/2026",
      postulantes: 23,
      estado: "Vigente"
    },
    {
      id: 5,
      puesto: "Practicante de Finanzas",
      carreras: "Contabilidad, Administración",
      publicacion: "02/07/2026",
      cierre: "31/07/2026",
      postulantes: 18,
      estado: "Cerrada"
    },
    {
      id: 6,
      puesto: "Practicante de Comercio Exterior",
      carreras: "Administración",
      publicacion: "15/06/2026",
      cierre: "14/07/2026",
      postulantes: 9,
      estado: "Cerrada"
    },
    {
      id: 7,
      puesto: "Practicante de Data Analytics",
      carreras: "Ing. de Sistemas, Ing. Industrial",
      publicacion: "01/06/2026",
      cierre: "30/06/2026",
      postulantes: 27,
      estado: "Cerrada"
    },
    {
      id: 8,
      puesto: "Practicante de Marketing Digital",
      carreras: "Marketing, Comunicación",
      publicacion: "—",
      cierre: "—",
      postulantes: 0,
      estado: "Borrador"
    },
    {
      id: 9,
      puesto: "Practicante de Arquitectura de Datos",
      carreras: "Ing. de Sistemas",
      publicacion: "—",
      cierre: "—",
      postulantes: 0,
      estado: "Borrador"
    }
  ];

  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans">
      
      {/* 1. SIDEBAR LATERAL (240px) */}
      <aside className="w-60 bg-white border-r border-[#E5E7EB] py-6 shrink-0 hidden md:block">
        
        {/* Bloque CONVOCATORIAS (Activo) */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            CONVOCATORIAS
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/convocatorias" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
              <span>■</span> Mis convocatorias
            </Link>
            <Link to="/empresa/nueva-convocatoria" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Nueva convocatoria
            </Link>
            <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Bandeja de postulantes
            </Link>
          </nav>
        </div>

        {/* Bloque EMPRESA */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            EMPRESA
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/perfil" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Perfil de la empresa
            </Link>
            <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Reseñas recibidas
            </Link>
          </nav>
        </div>

        {/* Bloque CUENTA */}
        <div>
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            CUENTA
          </h3>
          <nav className="space-y-0.5">
            <Link to="/cambiar-password" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Cambiar contraseña
            </Link>
            <Link to="/login" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Cerrar sesión
            </Link>
          </nav>
        </div>

      </aside>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Convocatorias <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Mis convocatorias</span>
        </div>

        {/* Encabezado: Título + Buscador + Botón Nueva Convocatoria */}
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
              className="px-4 py-2.5 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm whitespace-nowrap text-center"
            >
              + Nueva convocatoria
            </Link>
          </div>
        </div>

        {/* Filtros por Estado (Tabs) */}
        <div className="border-b border-[#E5E7EB] mb-4 flex gap-6 text-sm font-medium">
          <button className="pb-3 text-[#1A2B4C] font-bold border-b-2 border-[#1A2B4C]">
            Todas • 9
          </button>
          <button className="pb-3 text-[#6B7280] hover:text-[#1A2B4C] transition">
            Vigentes • 4
          </button>
          <button className="pb-3 text-[#6B7280] hover:text-[#1A2B4C] transition">
            Cerradas • 3
          </button>
          <button className="pb-3 text-[#6B7280] hover:text-[#1A2B4C] transition">
            Borradores • 2
          </button>
        </div>

        {/* Leyenda de ordenamiento */}
        <p className="text-xs text-[#6B7280] mb-4">
          9 convocatorias • ordenadas por cierre
        </p>

        {/* TABLA DE CONVOCATORIAS */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
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
                    <td className="py-3.5 px-4 font-semibold text-[#1A2B4C]">
                      {item.puesto}
                    </td>
                    <td className="py-3.5 px-4 text-[#374151]">
                      {item.carreras}
                    </td>
                    <td className="py-3.5 px-4 text-[#6B7280]">
                      {item.publicacion}
                    </td>
                    <td className="py-3.5 px-4 text-[#6B7280]">
                      {item.cierre}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#1A2B4C]">
                      {item.postulantes}
                    </td>
                    <td className="py-3.5 px-4">
                      {item.estado === "Vigente" && (
                        <span className="inline-block bg-[#D1FAE5] text-[#065F46] font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          Vigente
                        </span>
                      )}
                      {item.estado === "Cerrada" && (
                        <span className="inline-block bg-[#F3F4F6] text-[#6B7280] font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          Cerrada
                        </span>
                      )}
                      {item.estado === "Borrador" && (
                        <span className="inline-block bg-[#FEF3C7] text-[#92400E] font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          Borrador
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button className="text-[#6B7280] hover:text-[#1A2B4C] font-bold px-2 py-1 rounded hover:bg-gray-100 transition">
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pie de Tabla (Paginación) */}
          <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
            <span>Mostrando 1-9 de 9 convocatorias</span>
            <div className="flex items-center gap-1">
              <button disabled className="px-3 py-1 border border-[#E5E7EB] rounded bg-white text-gray-400 cursor-not-allowed">
                Anterior
              </button>
              <button className="px-3 py-1 bg-[#1A2B4C] text-white font-bold rounded">
                1
              </button>
              <button disabled className="px-3 py-1 border border-[#E5E7EB] rounded bg-white text-gray-400 cursor-not-allowed">
                Siguiente
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}