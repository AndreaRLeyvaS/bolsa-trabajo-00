import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TableroMetricas() {
  const [rangoFecha, setRangoFecha] = useState('01/08/2026 — 06/09/2026');

  // Datos para el gráfico de barras horizontales por carrera
  const datosCarreras = [
    { carrera: 'Ingeniería de Sistemas', cantidad: 38, max: 40 },
    { carrera: 'Ingeniería Industrial', cantidad: 26, max: 40 },
    { carrera: 'Administración', cantidad: 21, max: 40 },
    { carrera: 'Marketing', cantidad: 15, max: 40 },
    { carrera: 'Contabilidad', cantidad: 11, max: 40 },
    { carrera: 'Comunicación', cantidad: 9, max: 40 },
    { carrera: 'Psicología', cantidad: 5, max: 40 },
    { carrera: 'Ingeniería Civil', cantidad: 3, max: 40 }
  ];

  // Datos para el gráfico de dona por estado de postulación
  const datosEstados = [
    { estado: 'Recibidas', cantidad: 1297, color: '#1A2B4C' },
    { estado: 'En revisión', cantidad: 819, color: '#F59E0B' },
    { estado: 'Aceptadas', cantidad: 410, color: '#10B981' },
    { estado: 'Descartadas', cantidad: 682, color: '#DC2626' },
    { estado: 'Retiradas', cantidad: 204, color: '#CBD5E1' }
  ];

  // Datos de empresas más activas
  const empresasActivas = [
    { id: 1, nombre: 'Banco Marítimo del Sur', sector: 'Banca y finanzas', convocatorias: 6, postulaciones: 412, aceptadas: 38 },
    { id: 2, nombre: 'Software Vilcanota', sector: 'Tecnología', convocatorias: 5, postulaciones: 298, aceptadas: 26 },
    { id: 3, nombre: 'Consultora Andes Perú', sector: 'Consultoría', convocatorias: 4, postulaciones: 264, aceptadas: 19 },
    { id: 4, nombre: 'Nexolink Telecom', sector: 'Telecomunicaciones', convocatorias: 4, postulaciones: 231, aceptadas: 14 },
    { id: 5, nombre: 'Retail Terravista', sector: 'Retail', convocatorias: 3, postulaciones: 187, aceptadas: 12 }
  ];

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* 1. HEADER EXCLUSIVO PANEL ADMINISTRADOR (80px) */}
      <header className="h-20 bg-[#1A2B4C] px-6 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-md text-[#1A2B4C] font-bold text-sm flex items-center justify-center shrink-0">
            PL
          </div>
          <span className="text-base font-bold tracking-tight">PrácticaLima</span>
          <span className="h-5 w-[1px] bg-white/20 mx-1 hidden sm:block" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A0B4D0] hidden sm:block">
            PANEL DE ADMINISTRACIÓN
          </span>
        </div>

        {/* BUSCADOR DEDICADO Y EXTENDIDO */}
        <div className="hidden md:block w-[420px]">
          <input
            type="text"
            placeholder="Buscar usuarios, empresas o convocatorias"
            className="w-full h-10 px-4 bg-white/10 border border-white/20 rounded-md text-xs text-white placeholder-white/60 focus:outline-none focus:bg-white/20"
          />
        </div>

        {/* IDENTIDAD ADMINISTRADOR */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2E4A7D] rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/20">
            JR
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <p className="text-xs font-bold text-white">Julio Romero</p>
            <p className="text-[11px] text-[#A0B4D0]">Administrador · Gestión académica</p>
          </div>
        </div>
      </header>

      {/* 2. FRANJA SUPERIOR DE CONTEXTO */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-3.5 shadow-sm mb-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
              HISTORIA 7 · ADMINISTRACIÓN Y MÉTRICAS · COMPLEMENTARIA
            </p>
            <h1 className="text-xl font-bold text-[#1A2B4C]">
              7.2 Tablero de métricas
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6B7280] hidden lg:inline max-w-md text-right leading-tight">
              Cuatro indicadores, barras por carrera, dona de postulaciones por estado, empresas más activas y selector de rango de fechas.
            </span>
            <span className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full border border-amber-200 uppercase shrink-0">
              ADMINISTRADOR
            </span>
          </div>
        </div>
      </div>

      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO Y CONTROLES DE RANGO */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs text-[#6B7280] mb-1">
              Métricas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Tablero</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1A2B4C]">Tablero de métricas</h2>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={rangoFecha}
              onChange={(e) => setRangoFecha(e.target.value)}
              className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white font-medium focus:outline-none focus:border-[#1A2B4C] shadow-sm"
            >
              <option value="01/08/2026 — 06/09/2026">01/08/2026 — 06/09/2026</option>
              <option value="01/07/2026 — 31/07/2026">01/07/2026 — 31/07/2026</option>
              <option value="Últimos 90 días">Últimos 90 días</option>
            </select>

            <button className="h-10 px-4 bg-white border border-[#D1D5DB] text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50 transition shadow-sm">
              Exportar
            </button>
          </div>
        </div>

        {/* GRID DE 4 KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
            <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              ESTUDIANTES ACTIVOS
            </span>
            <p className="text-3xl font-bold text-[#1A2B4C] mb-1">2,148</p>
            <p className="text-xs font-semibold text-[#059669]">
              +184 en el periodo
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
            <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              EMPRESAS VERIFICADAS
            </span>
            <p className="text-3xl font-bold text-[#1A2B4C] mb-1">146</p>
            <p className="text-xs font-semibold text-[#059669]">
              +9 en el periodo
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
            <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              CONVOCATORIAS VIGENTES
            </span>
            <p className="text-3xl font-bold text-[#1A2B4C] mb-1">128</p>
            <p className="text-xs font-semibold text-[#92400E]">
              31 cierran esta semana
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm">
            <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              POSTULACIONES DEL PERIODO
            </span>
            <p className="text-3xl font-bold text-[#1A2B4C] mb-1">3,412</p>
            <p className="text-xs text-[#6B7280] font-medium">
              1.6 por estudiante activo
            </p>
          </div>

        </div>

        {/* GRID DE BARRAS POR CARRERA Y DONA DE POSTULACIONES (7 COLS / 5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* BARRAS POR CARRERA (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
            <h3 className="text-base font-bold text-[#1A2B4C] mb-5">
              Convocatorias vigentes por carrera
            </h3>

            <div className="space-y-3.5">
              {datosCarreras.map((item) => (
                <div key={item.carrera} className="flex items-center gap-3 text-xs">
                  <span className="w-40 font-medium text-[#374151] truncate shrink-0">
                    {item.carrera}
                  </span>
                  
                  <div className="flex-1 bg-[#F3F4F6] h-5 rounded overflow-hidden">
                    <div
                      className="bg-[#1A2B4C] h-full rounded transition-all duration-500"
                      style={{ width: `${(item.cantidad / item.max) * 100}%` }}
                    />
                  </div>

                  <span className="w-8 text-right font-bold text-[#1A2B4C] shrink-0">
                    {item.cantidad}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DONA DE POSTULACIONES POR ESTADO (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-bold text-[#1A2B4C] mb-4">
              Postulaciones por estado
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              {/* Anillo de Dona SVG (Col 6) */}
              <div className="sm:col-span-6 flex justify-center relative my-2">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 36 36">
                  {/* Recibidas (1297/3412 = 38%) */}
                  <path
                    className="text-[#1A2B4C]"
                    strokeDasharray="38 100"
                    strokeDashoffset="0"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* En revisión (819/3412 = 24%) */}
                  <path
                    className="text-[#F59E0B]"
                    strokeDasharray="24 100"
                    strokeDashoffset="-38"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Aceptadas (410/3412 = 12%) */}
                  <path
                    className="text-[#10B981]"
                    strokeDasharray="12 100"
                    strokeDashoffset="-62"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Descartadas (682/3412 = 20%) */}
                  <path
                    className="text-[#DC2626]"
                    strokeDasharray="20 100"
                    strokeDashoffset="-74"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Retiradas (204/3412 = 6%) */}
                  <path
                    className="text-[#CBD5E1]"
                    strokeDasharray="6 100"
                    strokeDashoffset="-94"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                {/* Texto Central */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-lg font-bold text-[#1A2B4C]">3,412</span>
                  <span className="text-[10px] text-[#6B7280]">total</span>
                </div>
              </div>

              {/* Leyenda Derecha (Col 6) */}
              <div className="sm:col-span-6 space-y-2 text-xs">
                {datosEstados.map((item) => (
                  <div key={item.estado} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-[#374151] font-medium">{item.estado}</span>
                    </div>
                    <span className="font-bold text-[#1A2B4C]">{item.cantidad.toLocaleString()}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* TABLA: EMPRESAS MÁS ACTIVAS DEL PERIODO */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden">
          
          <div className="p-5 border-b border-[#E5E7EB] flex items-center justify-between">
            <h3 className="text-base font-bold text-[#1A2B4C]">Empresas más activas del periodo</h3>
            <Link to="/admin/usuarios" className="text-xs font-semibold text-[#1A2B4C] hover:underline">
              Ver todas →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  <th className="py-3 px-5">EMPRESA</th>
                  <th className="py-3 px-5">SECTOR</th>
                  <th className="py-3 px-5 text-right">CONVOCATORIAS</th>
                  <th className="py-3 px-5 text-right">POSTULACIONES</th>
                  <th className="py-3 px-5 text-right">ACEPTADAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] text-xs">
                {empresasActivas.map((emp) => (
                  <tr key={emp.id} className="hover:bg-[#F9FAFB] transition">
                    <td className="py-3.5 px-5 font-bold text-[#1A2B4C]">
                      {emp.nombre}
                    </td>
                    <td className="py-3.5 px-5 text-[#374151]">
                      {emp.sector}
                    </td>
                    <td className="py-3.5 px-5 text-right text-[#374151]">
                      {emp.convocatorias}
                    </td>
                    <td className="py-3.5 px-5 text-right text-[#374151]">
                      {emp.postulaciones}
                    </td>
                    <td className="py-3.5 px-5 text-right font-bold text-[#059669]">
                      {emp.aceptadas}
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