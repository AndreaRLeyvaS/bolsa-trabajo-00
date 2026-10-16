import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BandejaPostulantes() {
  // Lista inicial de los 12 postulantes del PDF
  const [postulantes, setPostulantes] = useState([
    { id: 1, nombre: "Renzo Vilchez Ccahuana", carrera: "Ingeniería de Sistemas", ciclo: "9.º", postulo: "02/09/2026", estado: "Recibida", seleccionado: true },
    { id: 2, nombre: "Camila Sotelo Paredes", carrera: "Ingeniería de Sistemas", ciclo: "8.º", postulo: "01/09/2026", estado: "Recibida", seleccionado: true },
    { id: 3, nombre: "Diego Ramos Huamán", carrera: "Ingeniería de Sistemas", ciclo: "10.º", postulo: "31/08/2026", estado: "Recibida", seleccionado: true },
    { id: 4, nombre: "Mariana Quispe Ramírez", carrera: "Ingeniería de Sistemas", ciclo: "8.º", postulo: "20/08/2026", estado: "En revisión", seleccionado: false },
    { id: 5, nombre: "Álvaro Ccopa Mendoza", carrera: "Ingeniería de Sistemas", ciclo: "9.º", postulo: "29/08/2026", estado: "En revisión", seleccionado: false },
    { id: 6, nombre: "Fiorella Chávez Ríos", carrera: "Ingeniería de Sistemas", ciclo: "7.º", postulo: "28/08/2026", estado: "En revisión", seleccionado: false },
    { id: 7, nombre: "Sebastián Loayza Torres", carrera: "Ingeniería de Sistemas", ciclo: "9.º", postulo: "27/08/2026", estado: "En revisión", seleccionado: false },
    { id: 8, nombre: "Valeria Núñez Bustamante", carrera: "Ingeniería Industrial", ciclo: "8.º", postulo: "26/08/2026", estado: "Aceptada", seleccionado: false },
    { id: 9, nombre: "Joaquin Espinoza Vargas", carrera: "Ingeniería de Sistemas", ciclo: "10.º", postulo: "25/08/2026", estado: "Aceptada", seleccionado: false },
    { id: 10, nombre: "Andrea Palomino Zárate", carrera: "Ingeniería de Sistemas", ciclo: "7.º", postulo: "24/08/2026", estado: "Descartada", seleccionado: false },
    { id: 11, nombre: "Gustavo Salazar Ochoa", carrera: "Ingeniería de Sistemas", ciclo: "8.º", postulo: "23/08/2026", estado: "Descartada", seleccionado: false },
    { id: 12, nombre: "Lucía Bermúdez Aguilar", carrera: "Ingeniería Industrial", ciclo: "9.º", postulo: "22/08/2026", estado: "Descartada", seleccionado: false }
  ]);

  // Filtro por término de búsqueda y por estado
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('Todos los estados');
  const [filtroCiclo, setFiltroCiclo] = useState('Ciclo: todos');

  // Conteo de elementos seleccionados
  const seleccionados = postulantes.filter(p => p.seleccionado);
  const totalSeleccionados = seleccionados.length;

  // Toggle de selección individual
  const toggleSeleccion = (id) => {
    setPostulantes(postulantes.map(p => p.id === id ? { ...p, seleccionado: !p.seleccionado } : p));
  };

  // Toggle de selección global
  const toggleSeleccionarTodos = () => {
    const todosSeleccionados = postulantes.every(p => p.seleccionado);
    setPostulantes(postulantes.map(p => ({ ...p, seleccionado: !todosSeleccionados })));
  };

  // Quitar toda la selección
  const quitarSeleccion = () => {
    setPostulantes(postulantes.map(p => ({ ...p, seleccionado: false })));
  };

  // Acciones en lote
  const aplicarEstadoEnLote = (nuevoEstado) => {
    setPostulantes(postulantes.map(p => p.seleccionado ? { ...p, estado: nuevoEstado, seleccionado: false } : p));
  };

  // Filtrado de la lista
  const postulantesFiltrados = postulantes.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtroEstado === 'Todos los estados' || p.estado === filtroEstado;
    const coincideCiclo = filtroCiclo === 'Ciclo: todos' || p.ciclo.includes(filtroCiclo.replace('Ciclo: ', ''));
    return coincideNombre && coincideEstado && coincideCiclo;
  });

  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* 1. SIDEBAR LATERAL (240px) */}
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
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Convocatorias <span className="mx-1">·</span> Mis convocatorias <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Bandeja de postulantes</span>
        </div>

        {/* CARD DE CONTEXTO DE LA CONVOCATORIA */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 mb-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-[#1A2B4C]">Practicante de Desarrollo de Software</h1>
            <p className="text-xs text-[#6B7280] mt-1">
              Publicada el 18/08/2026 · cierra el 30/09/2026 · 2 vacantes · Ingeniería de Sistemas
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/empresa/nueva-convocatoria"
              className="px-3.5 py-2 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition"
            >
              Editar convocatoria
            </Link>
            <button
              className="px-3.5 py-2 border border-[#1A2B4C] text-[#1A2B4C] text-xs font-bold rounded hover:bg-gray-50 transition"
            >
              Cerrar convocatoria
            </button>
          </div>
        </div>

        {/* STAT CARDS (5 CONTADORES DE ESTADO) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1A2B4C]">23</p>
            <p className="text-xs text-[#6B7280] mt-1">Total de postulantes</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1A2B4C]">9</p>
            <p className="text-xs text-[#6B7280] mt-1">Recibidas</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1A2B4C]">7</p>
            <p className="text-xs text-[#6B7280] mt-1">En revisión</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1A2B4C]">2</p>
            <p className="text-xs text-[#6B7280] mt-1">Aceptadas</p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1A2B4C]">5</p>
            <p className="text-xs text-[#6B7280] mt-1">Descartadas</p>
          </div>
        </div>

        {/* ACCIONES EN LOTE (MUESTRA CUANDO HAY SELECCIONADOS) */}
        {totalSeleccionados > 0 && (
          <div className="bg-[#EEF2F7] border border-[#CBD5E1] rounded-lg px-4 py-2.5 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#1A2B4C]">
                {totalSeleccionados} postulante{totalSeleccionados > 1 ? 's' : ''} seleccionado{totalSeleccionados > 1 ? 's' : ''}
              </span>
              <button
                onClick={() => aplicarEstadoEnLote('En revisión')}
                className="px-3 py-1.5 bg-[#1A2B4C] text-white font-medium rounded hover:bg-[#121E36] transition"
              >
                Marcar en revisión
              </button>
              <button
                onClick={() => aplicarEstadoEnLote('Aceptada')}
                className="px-3 py-1.5 bg-white border border-[#10B981] text-[#059669] font-bold rounded hover:bg-emerald-50 transition"
              >
                Aceptar
              </button>
              <button
                onClick={() => aplicarEstadoEnLote('Descartada')}
                className="px-3 py-1.5 bg-white border border-[#DC2626] text-[#DC2626] font-bold rounded hover:bg-red-50 transition"
              >
                Descartar
              </button>
            </div>

            <button
              onClick={quitarSeleccion}
              className="text-[#1A2B4C] font-medium underline text-right hover:text-[#121E36]"
            >
              Quitar selección
            </button>
          </div>
        )}

        {/* BARRA DE FILTROS Y BÚSQUEDA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full sm:w-64 h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A2B4C] bg-white shadow-sm"
            />

            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]"
            >
              <option value="Todos los estados">Todos los estados</option>
              <option value="Recibida">Recibidas</option>
              <option value="En revisión">En revisión</option>
              <option value="Aceptada">Aceptadas</option>
              <option value="Descartada">Descartadas</option>
            </select>

            <select
              value={filtroCiclo}
              onChange={(e) => setFiltroCiclo(e.target.value)}
              className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]"
            >
              <option value="Ciclo: todos">Ciclo: todos</option>
              <option value="Ciclo: 7.º">Ciclo 7.º</option>
              <option value="Ciclo: 8.º">Ciclo 8.º</option>
              <option value="Ciclo: 9.º">Ciclo 9.º</option>
              <option value="Ciclo: 10.º">Ciclo 10.º</option>
            </select>
          </div>

          <span className="text-xs text-[#6B7280]">
            {postulantesFiltrados.length} de 23 postulantes · ordenados por fecha
          </span>
        </div>

        {/* TABLA DE POSTULANTES */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  <th className="py-3 px-4 w-10 text-center">
                    <input
                      type="checkbox"
                      checked={postulantes.length > 0 && postulantes.every(p => p.seleccionado)}
                      onChange={toggleSeleccionarTodos}
                      className="w-4 h-4 accent-[#1A2B4C] rounded border-[#E5E7EB]"
                    />
                  </th>
                  <th className="py-3 px-4">POSTULANTE</th>
                  <th className="py-3 px-4">CARRERA</th>
                  <th className="py-3 px-4">CICLO</th>
                  <th className="py-3 px-4">POSTULÓ</th>
                  <th className="py-3 px-4">ESTADO</th>
                  <th className="py-3 px-4 text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] text-xs">
                {postulantesFiltrados.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F9FAFB] transition">
                    
                    <td className="py-3.5 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={item.seleccionado}
                        onChange={() => toggleSeleccion(item.id)}
                        className="w-4 h-4 accent-[#1A2B4C] rounded border-[#E5E7EB]"
                      />
                    </td>

                    <td className="py-3.5 px-4 font-bold text-[#1A2B4C]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-[#EEF2F7] rounded-full text-[#1A2B4C] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {item.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <Link to="/empresa/perfil-postulante" className="hover:underline">
                          {item.nombre}
                        </Link>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-[#374151]">
                      {item.carrera}
                    </td>

                    <td className="py-3.5 px-4 text-[#374151]">
                      {item.ciclo}
                    </td>

                    <td className="py-3.5 px-4 text-[#6B7280]">
                      {item.postulo}
                    </td>

                    <td className="py-3.5 px-4">
                      {item.estado === "Recibida" && (
                        <span className="inline-block bg-[#EEF2F7] text-[#1A2B4C] font-medium text-[11px] px-2.5 py-0.5 rounded-full border border-[#DBE3EE]">
                          Recibida
                        </span>
                      )}
                      {item.estado === "En revisión" && (
                        <span className="inline-block bg-[#FEF3C7] text-[#92400E] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-amber-200">
                          En revisión
                        </span>
                      )}
                      {item.estado === "Aceptada" && (
                        <span className="inline-block bg-[#D1FAE5] text-[#065F46] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200">
                          Aceptada
                        </span>
                      )}
                      {item.estado === "Descartada" && (
                        <span className="inline-block bg-[#FEE2E2] text-[#991B1B] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-red-200">
                          Descartada
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
        </div>

      </main>
    </div>
  );
}