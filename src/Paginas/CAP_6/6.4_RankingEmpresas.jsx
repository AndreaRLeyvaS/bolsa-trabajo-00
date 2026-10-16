import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RankingEmpresas() {
  const [filtroSector, setFiltroSector] = useState('Todos los sectores');

  // Listado oficial de las 10 empresas del ranking según la documentación
  const empresasRanking = [
    { posicion: 1, nombre: "Software Vilcanota", iniciales: "SV", sector: "Tecnología", promedio: 4.7, resenas: 22, convocatorias: 5 },
    { posicion: 2, nombre: "Consultora Andes Perú", iniciales: "AP", sector: "Consultoría", promedio: 4.3, resenas: 28, convocatorias: 4 },
    { posicion: 3, nombre: "Banco Marítimo del Sur", iniciales: "BM", sector: "Banca y finanzas", promedio: 4.2, resenas: 41, convocatorias: 6 },
    { posicion: 4, nombre: "Retail Terravista", iniciales: "RT", sector: "Retail", promedio: 4.1, resenas: 34, convocatorias: 3 },
    { posicion: 5, nombre: "Minera Illariy", iniciales: "MI", sector: "Minería", promedio: 4.0, resenas: 19, convocatorias: 2 },
    { posicion: 6, nombre: "Consumo Pacífico", iniciales: "CP", sector: "Consumo masivo", promedio: 3.9, resenas: 26, convocatorias: 3 },
    { posicion: 7, nombre: "Salud Huascarán", iniciales: "SH", sector: "Salud", promedio: 3.8, resenas: 15, convocatorias: 2 },
    { posicion: 8, nombre: "Nexolink Telecom", iniciales: "NT", sector: "Telecomunicaciones", promedio: 3.6, resenas: 30, convocatorias: 4 },
    { posicion: 9, nombre: "Textiles Pariataca", iniciales: "TP", sector: "Retail", promedio: 3.5, resenas: 12, convocatorias: 1 },
    { posicion: 10, nombre: "Logística Chinchaysuyo", iniciales: "LC", sector: "Consultoría", promedio: 3.3, resenas: 11, convocatorias: 1 }
  ];

  // Filtrado dinámico por sector
  const empresasFiltradas = empresasRanking.filter((e) => {
    if (filtroSector === 'Todos los sectores') return true;
    return e.sector === filtroSector;
  });

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Empresas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Ranking</span>
        </div>

        {/* Encabezado y Regla de Negocio */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2B4C]">
            Ranking de empresas mejor calificadas
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Solo empresas con 10 reseñas o más. Actualizado el 06/09/2026.
          </p>
        </div>

        {/* FILTRO POR SECTOR */}
        <div className="mb-6">
          <select
            value={filtroSector}
            onChange={(e) => setFiltroSector(e.target.value)}
            className="h-10 px-4 border border-[#E5E7EB] rounded-md text-sm text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C] shadow-sm cursor-pointer"
          >
            <option value="Todos los sectores">Todos los sectores</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Consultoría">Consultoría</option>
            <option value="Banca y finanzas">Banca y finanzas</option>
            <option value="Retail">Retail</option>
            <option value="Minería">Minería</option>
            <option value="Consumo masivo">Consumo masivo</option>
            <option value="Salud">Salud</option>
            <option value="Telecomunicaciones">Telecomunicaciones</option>
          </select>
        </div>

        {/* TABLA DE RANKING */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  <th className="py-3 px-4 w-16 text-center">#</th>
                  <th className="py-3 px-4">EMPRESA</th>
                  <th className="py-3 px-4">SECTOR</th>
                  <th className="py-3 px-4">PROMEDIO</th>
                  <th className="py-3 px-4">RESEÑAS</th>
                  <th className="py-3 px-4">CONVOCATORIAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] text-sm">
                {empresasFiltradas.map((item) => (
                  <tr key={item.posicion} className="hover:bg-[#F9FAFB] transition">
                    
                    {/* Posición # */}
                    <td className="py-4 px-4 text-center font-bold text-[#6B7280] text-base">
                      {item.posicion}
                    </td>

                    {/* Nombre y Logo de Empresa */}
                    <td className="py-4 px-4 font-medium text-[#1A2B4C]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#EEF2F7] rounded-md text-[#1A2B4C] font-bold text-xs flex items-center justify-center shrink-0">
                          {item.iniciales}
                        </div>
                        <Link to="/empresa/ficha-publica" className="hover:underline font-semibold text-[#1A2B4C]">
                          {item.nombre}
                        </Link>
                      </div>
                    </td>

                    {/* Sector */}
                    <td className="py-4 px-4 text-[#374151]">
                      {item.sector}
                    </td>

                    {/* Promedio con Estrella ★ */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1.5 font-bold text-[#1A2B4C]">
                        <span className="text-[#F59E0B] text-base leading-none">★</span>
                        <span>{item.promedio.toFixed(1)}</span>
                      </div>
                    </td>

                    {/* Número de Reseñas */}
                    <td className="py-4 px-4 text-[#374151]">
                      {item.resenas}
                    </td>

                    {/* Convocatorias Vigentes */}
                    <td className="py-4 px-4 text-[#374151]">
                      {item.convocatorias}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}