import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PerfilPostulante() {
  // Estado para gestionar el cambio de estado de la postulación
  const [estado, setEstado] = useState('En revisión');

  // Estado para las notas internas privadas
  const [notaInterna, setNotaInterna] = useState(
    "Buen manejo de SQL en la entrevista técnica del 02/09. Coordinar segunda entrevista con el líder de producto."
  );
  const [notaGuardada, setNotaGuardada] = useState(false);

  const guardarNota = () => {
    setNotaGuardada(true);
    setTimeout(() => setNotaGuardada(false), 2500);
  };

  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* 1. SIDEBAR LATERAL EMPRESA (240px) */}
      <aside className="w-60 bg-white border-r border-[#E5E7EB] py-6 shrink-0 hidden md:block">
        
        {/* Bloque CONVOCATORIAS */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            CONVOCATORIAS
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/convocatorias" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Mis convocatorias
            </Link>
            <Link to="/empresa/nueva-convocatoria" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Nueva convocatoria
            </Link>
            <Link to="/empresa/bandeja" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
              <span>■</span> Bandeja de postulantes
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
        
        {/* NAVEGACIÓN Y PAGINADOR DE CANDIDATOS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="text-xs text-[#6B7280]">
            <Link to="/empresa/bandeja" className="hover:underline">Bandeja de postulantes</Link> <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Mariana Quispe Ramírez</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#6B7280] font-medium">Postulante 4 de 23</span>
            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 border border-[#D1D5DB] bg-white rounded text-[#374151] hover:bg-gray-50 transition font-medium">
                ← Anterior
              </button>
              <button className="px-2.5 py-1 border border-[#D1D5DB] bg-white rounded text-[#374151] hover:bg-gray-50 transition font-medium">
                Siguiente →
              </button>
            </div>
          </div>
        </div>

        {/* HERO CARD DEL CANDIDATO */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=85"
            alt="Mariana Quispe"
            className="h-20 w-20 shrink-0 rounded-lg border border-[#E5E7EB] object-cover"
          />

          <div className="flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl font-bold text-[#1A2B4C]">Mariana Lucía Quispe Ramírez</h1>
              
              {/* Badge de Estado Actual */}
              {estado === 'Recibida' && (
                <span className="bg-[#EEF2F7] text-[#1A2B4C] text-xs font-medium px-3 py-0.5 rounded-full border border-[#DBE3EE]">
                  Recibida
                </span>
              )}
              {estado === 'En revisión' && (
                <span className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-0.5 rounded-full border border-amber-200">
                  En revisión
                </span>
              )}
              {estado === 'Aceptada' && (
                <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-0.5 rounded-full border border-emerald-200">
                  Aceptada
                </span>
              )}
              {estado === 'Descartada' && (
                <span className="bg-[#FEE2E2] text-[#991B1B] text-xs font-bold px-3 py-0.5 rounded-full border border-red-200">
                  Descartada
                </span>
              )}
            </div>

            <p className="text-xs text-[#6B7280]">
              Ingeniería de Sistemas · Octavo ciclo · La Molina
            </p>

            <p className="text-xs text-[#374151]">
              mariana.quispe@aloe.ulima.edu.pe · 987 654 321 · <span className="text-[#6B7280]">postuló el 20/08/2026</span>
            </p>
          </div>
        </div>

        {/* MENSAJE DE LA POSTULANTE */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 mb-6 shadow-sm space-y-2">
          <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
            MENSAJE DE LA POSTULANTE
          </h2>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-4 text-xs text-[#374151] leading-relaxed">
            "Me interesa el módulo de reportes que mencionan en la convocatoria: hice algo parecido con SQL y React en un proyecto del curso de Bases de Datos, donde reduje en 40% el tiempo de consulta del reporte de ventas."
          </div>
        </div>

        {/* GRID PRINCIPAL (8 COLS / 4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* COLUMNA IZQUIERDA: PERFIL COMPLETO (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* RESUMEN PROFESIONAL */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-2">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                RESUMEN PROFESIONAL
              </h3>
              <p className="text-xs text-[#374151] leading-relaxed pt-1">
                Estudiante de octavo ciclo de Ingeniería de Sistemas con interés en desarrollo web y analítica de datos. Busco prácticas híbridas en Lima para aplicar React y SQL en un equipo de producto.
              </p>
            </div>

            {/* EXPERIENCIA */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                EXPERIENCIA
              </h3>

              <div className="space-y-4 text-xs">
                {/* Item 1 */}
                <div className="pb-3 border-b border-[#F3F4F6] last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-[#1A2B4C]">Asistente de Soporte TI</h4>
                  <p className="text-[#6B7280]">Centro de Cómputo - Universidad de Lima · 03/2025 – actualidad</p>
                </div>

                {/* Item 2 */}
                <div className="pb-3 border-b border-[#F3F4F6] last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-[#1A2B4C]">Practicante de Analítica (proyecto de curso)</h4>
                  <p className="text-[#6B7280]">Cátedra de Bases de Datos - Universidad de Lima · 08/2025 – 12/2025</p>
                </div>

                {/* Item 3 */}
                <div>
                  <h4 className="font-bold text-[#1A2B4C]">Voluntaria de logística</h4>
                  <p className="text-[#6B7280]">Feria de Innovación Universitaria · 04/2025 – 05/2025</p>
                </div>
              </div>
            </div>

            {/* HABILIDADES DECLARADAS */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                HABILIDADES DECLARADAS
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {['JavaScript', 'React', 'SQL', 'Python', 'Power BI', 'Git', 'Figma', 'Docker', 'Excel avanzado'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#EEF2F7] text-[#1A2B4C] text-xs font-medium px-3 py-1 rounded-full border border-[#CBD5E1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: CONSOLA DEL RECLUTADOR (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CAMBIAR ESTADO */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                CAMBIAR ESTADO
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => setEstado('En revisión')}
                  className={`w-full py-2 px-3 rounded text-xs font-bold transition ${
                    estado === 'En revisión'
                      ? 'bg-[#1A2B4C] text-white shadow-sm'
                      : 'bg-white border border-[#D1D5DB] text-[#374151] hover:bg-gray-50'
                  }`}
                >
                  Marcar en revisión
                </button>

                <button
                  onClick={() => setEstado('Aceptada')}
                  className={`w-full py-2 px-3 rounded text-xs font-bold transition ${
                    estado === 'Aceptada'
                      ? 'bg-[#059669] text-white shadow-sm'
                      : 'bg-white border border-[#10B981] text-[#059669] hover:bg-emerald-50'
                  }`}
                >
                  Aceptar postulante
                </button>

                <button
                  onClick={() => setEstado('Descartada')}
                  className={`w-full py-2 px-3 rounded text-xs font-bold transition ${
                    estado === 'Descartada'
                      ? 'bg-[#DC2626] text-white shadow-sm'
                      : 'bg-white border border-[#DC2626] text-[#DC2626] hover:bg-red-50'
                  }`}
                >
                  Descartar postulante
                </button>
              </div>

              <p className="text-[11px] text-[#6B7280] leading-relaxed pt-1">
                Al cambiar el estado, la postulante recibe un correo automático: <strong>{estado}</strong>
              </p>
            </div>

            {/* COMPLETITUD DEL PERFIL */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1A2B4C]">Perfil completo</span>
                <span className="font-bold text-[#1A2B4C]">78%</span>
              </div>
              <div className="w-full bg-[#F3F4F6] h-2 rounded-full overflow-hidden">
                <div className="bg-[#1A2B4C] h-full w-[78%]" />
              </div>
            </div>

            {/* NOTAS INTERNAS PRIVADAS */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                NOTAS INTERNAS
              </h3>

              <textarea
                rows={4}
                value={notaInterna}
                onChange={(e) => setNotaInterna(e.target.value)}
                className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C] leading-relaxed"
                placeholder="Escribe comentarios de la entrevista..."
              />

              <p className="text-[11px] text-[#6B7280]">
                Solo tu equipo ve estas notas. La postulante nunca las verá.
              </p>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={guardarNota}
                  className="px-4 py-2 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm"
                >
                  Guardar nota
                </button>

                {notaGuardada && (
                  <span className="text-xs text-[#059669] font-bold">
                    ✓ Nota guardada
                  </span>
                )}
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
