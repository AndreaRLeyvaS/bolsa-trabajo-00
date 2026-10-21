import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GestionUsuarios() {
  // Lista oficial de los 15 usuarios
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Mariana Quispe Ramírez", tipo: "Estudiante", correo: "mariana.quispe@aloe.ulima.edu.pe", registro: "14/03/2026", estado: "Activa" },
    { id: 2, nombre: "Renzo Vilchez Ccahuana", tipo: "Estudiante", correo: "renzo.vilchez@aloe.ulima.edu.pe", registro: "18/03/2026", estado: "Activa" },
    { id: 3, nombre: "Consultora Andes Perú S.A.C.", tipo: "Empresa", correo: "seleccion@andesperu.com.pe", registro: "02/04/2026", estado: "Activa" },
    { id: 4, nombre: "Camila Sotelo Paredes", tipo: "Estudiante", correo: "camila.sotelo@aloe.ulima.edu.pe", registro: "11/04/2026", estado: "Activa" },
    { id: 5, nombre: "Banco Marítimo del Sur S.A.", tipo: "Empresa", correo: "practicas@bmsur.com.pe", registro: "22/04/2026", estado: "Activa" },
    { id: 6, nombre: "Diego Ramos Huamán", tipo: "Estudiante", correo: "diego.ramos@aloe.ulima.edu.pe", registro: "05/05/2026", estado: "Activa" },
    { id: 7, nombre: "Textiles Pariataca S.A.C.", tipo: "Empresa", correo: "rrhh@pariataca.com.pe", registro: "19/05/2026", estado: "Pendiente" },
    { id: 8, nombre: "Fiorella Chávez Ríos", tipo: "Estudiante", correo: "fiorella.chavez@aloe.ulima.edu.pe", registro: "30/05/2026", estado: "Activa" },
    { id: 9, nombre: "Julio Romero Alcántara", tipo: "Administrador", correo: "jromero@ulima.edu.pe", registro: "02/06/2026", estado: "Activa" },
    { id: 10, nombre: "Álvaro Ccopa Mendoza", tipo: "Estudiante", correo: "alvaro.ccopa@aloe.ulima.edu.pe", registro: "14/06/2026", estado: "Bloqueada" },
    { id: 11, nombre: "Minera Illariy S.A.A.", tipo: "Empresa", correo: "talento@illariy.com.pe", registro: "28/06/2026", estado: "Activa" },
    { id: 12, nombre: "Valeria Núñez Bustamante", tipo: "Estudiante", correo: "valeria.nunez@aloe.ulima.edu.pe", registro: "09/07/2026", estado: "Activa" },
    { id: 13, nombre: "Logística Chinchaysuyo E.I.R.L.", tipo: "Empresa", correo: "contacto@chinchaysuyo.pe", registro: "21/07/2026", estado: "Pendiente" },
    { id: 14, nombre: "Sebastián Loayza Torres", tipo: "Estudiante", correo: "sebastian.loayza@aloe.ulima.edu.pe", registro: "08/08/2026", estado: "Activa" },
    { id: 15, nombre: "Andrea Palomino Zárate", tipo: "Estudiante", correo: "andrea.palomino@aloe.ulima.edu.pe", registro: "25/08/2026", estado: "Activa" }
  ]);

  // Estados para filtros y búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('Tipo: todos');
  const [filtroEstado, setFiltroEstado] = useState('Estado: todos');

  // Estado para controlar el Modal de Bloqueo
  const [modalBloqueo, setModalBloqueo] = useState(null);
  const [motivoBloqueo, setMotivoBloqueo] = useState('Información falsa en el perfil');
  const [detalleInterno, setDetalleInterno] = useState('');

  // Filtrado de usuarios en tiempo real
  const usuariosFiltrados = usuarios.filter((u) => {
    const coincideTexto = u.nombre.toLowerCase().includes(busqueda.toLowerCase()) || u.correo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = filtroTipo === 'Tipo: todos' || u.tipo === filtroTipo;
    const coincideEstado = filtroEstado === 'Estado: todos' || u.estado === filtroEstado;
    return coincideTexto && coincideTipo && coincideEstado;
  });

  // Ejecución del bloqueo
  const confirmarBloqueo = () => {
    if (!modalBloqueo || !detalleInterno.trim()) return;
    setUsuarios(usuarios.map(u => u.id === modalBloqueo.id ? { ...u, estado: 'Bloqueada' } : u));
    setModalBloqueo(null);
    setDetalleInterno('');
  };

  return (
    <div className="min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans pb-12">
      
      {/* HEADER EXCLUSIVO PANEL ADMIN (80px) */}
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

        <div className="hidden md:block w-[420px]">
          <input
            type="text"
            placeholder="Buscar usuarios, empresas o convocatorias"
            className="w-full h-10 px-4 bg-white/10 border border-white/20 rounded-md text-xs text-white placeholder-white/60 focus:outline-none focus:bg-white/20"
          />
        </div>

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

      {/* CONTENEDOR CON SIDEBAR (240px) Y MAIN */}
      <div className="flex">
        
        {/* SIDEBAR ADMINISTRATIVO */}
        <aside className="w-60 bg-white border-r border-[#E5E7EB] py-6 shrink-0 hidden md:block min-h-[calc(100vh-192px)]">
          <div className="mb-6">
            <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              MÉTRICAS
            </h3>
            <nav className="space-y-0.5">
              <Link to="/admin/metricas" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
                <span className="text-gray-400">■</span> Tablero de métricas
              </Link>
              <Link to="/empresa/ranking" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
                <span className="text-gray-400">■</span> Ranking de empresas
              </Link>
            </nav>
          </div>

          <div className="mb-6">
            <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              CUENTAS
            </h3>
            <nav className="space-y-0.5">
              <Link to="/admin/usuarios" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
                <span>■</span> Gestión de usuarios
              </Link>
              <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
                <span className="text-gray-400">■</span> Empresas registradas
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              CONTENIDO
            </h3>
            <nav className="space-y-0.5">
              <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
                <span className="text-gray-400">■</span> Convocatorias publicadas
              </Link>
              <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
                <span className="text-gray-400">■</span> Reseñas reportadas
              </Link>
            </nav>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
          
          {/* Breadcrumb */}
          <div className="text-xs text-[#6B7280] mb-3">
            Cuentas <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Gestión de usuarios</span>
          </div>

          {/* Título y Subtítulo */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#1A2B4C]">Gestión de usuarios</h1>
            <p className="text-sm text-[#6B7280] mt-1">
              2,294 cuentas registradas · 12 pendientes de verificación
            </p>
          </div>

          {/* BARRA DE FILTROS Y BÚSQUEDA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="Buscar por nombre o correo"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full sm:w-72 h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A2B4C] bg-white shadow-sm"
              />

              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]"
              >
                <option value="Tipo: todos">Tipo: todos</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Empresa">Empresa</option>
                <option value="Administrador">Administrador</option>
              </select>

              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]"
              >
                <option value="Estado: todos">Estado: todos</option>
                <option value="Activa">Activa</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Bloqueada">Bloqueada</option>
              </select>

              <select className="h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]">
                <option>Registro: últimos 90 días</option>
                <option>Registro: este año</option>
              </select>
            </div>

            <span className="text-xs text-[#6B7280] font-medium">
              Mostrando 1-15 de 2,294
            </span>
          </div>

          {/* TABLA DE USUARIOS */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                    <th className="py-3 px-4">USUARIO</th>
                    <th className="py-3 px-4">TIPO</th>
                    <th className="py-3 px-4">CORREO</th>
                    <th className="py-3 px-4">REGISTRO</th>
                    <th className="py-3 px-4">ESTADO</th>
                    <th className="py-3 px-4 text-center">ACCIONES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6] text-xs">
                  {usuariosFiltrados.map((u) => (
                    <tr key={u.id} className="hover:bg-[#F9FAFB] transition">
                      
                      {/* Usuario con Avatar */}
                      <td className="py-3.5 px-4 font-bold text-[#1A2B4C]">
                        <div className="flex items-center gap-2.5">
                          {u.nombre === 'Mariana Quispe Ramírez' ? (
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=85"
                              alt="Mariana Quispe"
                              className="h-8 w-8 shrink-0 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-[#EEF2F7] rounded-full text-[#1A2B4C] font-bold text-[11px] flex items-center justify-center shrink-0">
                              {u.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                          )}
                          <Link to="/admin/usuario/detalle" className="hover:underline">
                            {u.nombre}
                          </Link>
                        </div>
                      </td>

                      {/* Tipo */}
                      <td className="py-3.5 px-4 text-[#374151] font-medium">
                        {u.tipo}
                      </td>

                      {/* Correo */}
                      <td className="py-3.5 px-4 text-[#6B7280]">
                        {u.correo}
                      </td>

                      {/* Registro */}
                      <td className="py-3.5 px-4 text-[#374151]">
                        {u.registro}
                      </td>

                      {/* Estado (Badges Semánticos) */}
                      <td className="py-3.5 px-4">
                        {u.estado === 'Activa' && (
                          <span className="inline-block bg-[#D1FAE5] text-[#065F46] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200">
                            Activa
                          </span>
                        )}
                        {u.estado === 'Pendiente' && (
                          <span className="inline-block bg-[#FEF3C7] text-[#92400E] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-amber-200">
                            Pendiente
                          </span>
                        )}
                        {u.estado === 'Bloqueada' && (
                          <span className="inline-block bg-[#FEE2E2] text-[#991B1B] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-red-200">
                            Bloqueada
                          </span>
                        )}
                      </td>

                      {/* Acciones */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => setModalBloqueo(u)}
                          title="Bloquear cuenta"
                          className="text-[#6B7280] hover:text-[#1A2B4C] font-bold px-2 py-1 rounded hover:bg-gray-100 transition"
                        >
                          ⋮
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PAGINACIÓN (PIEZA SUELTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280] pt-2">
            <div>
              15 filas por página
            </div>

            <div className="flex items-center gap-1 font-medium">
              <button className="px-3 py-1.5 border border-[#E5E7EB] bg-white rounded text-[#374151] hover:bg-gray-50 disabled:opacity-50">
                Anterior
              </button>
              <button className="w-8 h-8 bg-[#1A2B4C] text-white rounded font-bold">
                1
              </button>
              <button className="w-8 h-8 border border-[#E5E7EB] bg-white text-[#374151] rounded hover:bg-gray-50">
                2
              </button>
              <button className="w-8 h-8 border border-[#E5E7EB] bg-white text-[#374151] rounded hover:bg-gray-50">
                3
              </button>
              <span className="px-1 text-gray-400">...</span>
              <button className="px-2.5 h-8 border border-[#E5E7EB] bg-white text-[#374151] rounded hover:bg-gray-50">
                153
              </button>
              <button className="px-3 py-1.5 border border-[#E5E7EB] bg-white rounded text-[#374151] hover:bg-gray-50">
                Siguiente
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* PIEZA SUELTA 7.3: MODAL DE BLOQUEO DE CUENTA */}
      {modalBloqueo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-[#E5E7EB]">
            
            <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">
              ¿Bloquear la cuenta de {modalBloqueo.nombre.split(' ')[0]} {modalBloqueo.nombre.split(' ')[1]}?
            </h3>
            
            <p className="text-xs text-[#374151] leading-relaxed mb-5">
              No podrá iniciar sesión ni postular. Sus postulaciones quedan visibles para las empresas, pero se marcan como «cuenta bloqueada».
            </p>

            {/* Motivo del Bloqueo */}
            <div className="mb-4">
              <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                MOTIVO DEL BLOQUEO · OBLIGATORIO
              </label>
              <select
                value={motivoBloqueo}
                onChange={(e) => setMotivoBloqueo(e.target.value)}
                className="w-full h-10 px-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] bg-white focus:outline-none focus:border-[#1A2B4C]"
              >
                <option value="Información falsa en el perfil">Información falsa en el perfil</option>
                <option value="Conducta inapropiada en proceso">Conducta inapropiada en proceso</option>
                <option value="Solicitud del área de disciplina">Solicitud del área de disciplina</option>
                <option value="Otro motivo">Otro motivo</option>
              </select>
            </div>

            {/* Detalle para Registro Interno */}
            <div className="mb-4">
              <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                DETALLE PARA EL REGISTRO INTERNO
              </label>
              <textarea
                rows={3}
                value={detalleInterno}
                onChange={(e) => setDetalleInterno(e.target.value)}
                placeholder="Escribe el detalle del motivo. Queda en el registro de auditoría."
                className="w-full p-3 border border-[#E5E7EB] rounded-md text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C] leading-relaxed"
              />
              <p className="text-[11px] text-[#DC2626] mt-1">
                Escribe el detalle del motivo. Queda en el registro de auditoría.
              </p>
            </div>

            {/* Alerta Informativa */}
            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-md p-3 mb-6 flex items-start gap-2.5 text-xs text-[#991B1B]">
              <span className="font-bold">!</span>
              <p className="leading-tight">
                La estudiante recibirá un correo con el motivo. Puedes desbloquear la cuenta desde esta misma ficha.
              </p>
            </div>

            {/* Botones */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setModalBloqueo(null);
                  setDetalleInterno('');
                }}
                className="px-5 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              
              <button
                onClick={confirmarBloqueo}
                disabled={!detalleInterno.trim()}
                className={`px-5 py-2.5 text-xs font-bold rounded-md transition ${
                  detalleInterno.trim()
                    ? 'bg-[#B91C1C] text-white hover:bg-red-800 shadow-sm'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Bloquear cuenta
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
