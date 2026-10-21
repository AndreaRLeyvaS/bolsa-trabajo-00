import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetalleUsuario() {
  const [estadoCuenta, setEstadoCuenta] = useState('Activa');
  const [modalBloqueo, setModalBloqueo] = useState(false);
  const [motivoBloqueo, setMotivoBloqueo] = useState('Información falsa en el perfil');
  const [detalleInterno, setDetalleInterno] = useState('');
  const [notificacionAccion, setNotificacionAccion] = useState(null);

  const mostrarNotificacion = (msj) => {
    setNotificacionAccion(msj);
    setTimeout(() => setNotificacionAccion(null), 3000);
  };

  const ejecutarBloqueo = () => {
    if (!detalleInterno.trim()) return;
    setEstadoCuenta('Bloqueada');
    setModalBloqueo(false);
    setDetalleInterno('');
    mostrarNotificacion('Cuenta bloqueada exitosamente.');
  };

  const desbloquearCuenta = () => {
    setEstadoCuenta('Activa');
    mostrarNotificacion('Cuenta reactivada exitosamente.');
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

      {/* NOTIFICACIÓN FLOTANTE */}
      {notificacionAccion && (
        <div className="fixed top-24 right-6 bg-[#1A2B4C] text-white text-xs font-bold px-4 py-3 rounded-lg shadow-xl z-50 transition-all">
          ✓ {notificacionAccion}
        </div>
      )}

      {/* ESTRUCTURA PRINCIPAL */}
      <div className="flex">
        
        {/* SIDEBAR ADMIN (240px) */}
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
            Cuentas <span className="mx-1">·</span> <Link to="/admin/usuarios" className="hover:underline">Gestión de usuarios</Link> <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Mariana Quispe Ramírez</span>
          </div>

          {/* HERO DEL USUARIO */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=85" alt="Mariana Quispe" className="h-20 w-20 shrink-0 rounded-lg border border-[#E5E7EB] object-cover" />

            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold text-[#1A2B4C]">Mariana Lucía Quispe Ramírez</h1>
                
                {estadoCuenta === 'Activa' ? (
                  <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-0.5 rounded-full border border-emerald-200">
                    Activa
                  </span>
                ) : (
                  <span className="bg-[#FEE2E2] text-[#991B1B] text-xs font-bold px-3 py-0.5 rounded-full border border-red-200">
                    Bloqueada
                  </span>
                )}

                <span className="bg-[#F3F4F6] text-[#374151] text-xs font-medium px-2.5 py-0.5 rounded">
                  Estudiante
                </span>
              </div>

              <p className="text-xs text-[#6B7280]">
                mariana.quispe@aloe.ulima.edu.pe · código 20211234
              </p>
            </div>
          </div>

          {/* GRID PRINCIPAL (8 COLS / 4 COLS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* COLUMNA IZQUIERDA (8 COLS) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* DATOS DE LA CUENTA */}
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4">
                <h2 className="text-base font-bold text-[#1A2B4C] border-b border-[#F3F4F6] pb-3">
                  Datos de la cuenta
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Carrera</span>
                    <span className="font-semibold text-[#1A2B4C]">Ingeniería de Sistemas</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Ciclo</span>
                    <span className="font-semibold text-[#1A2B4C]">Octavo</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Registro</span>
                    <span className="font-semibold text-[#1A2B4C]">14/03/2026</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Último acceso</span>
                    <span className="font-semibold text-[#1A2B4C]">06/09/2026 · 19:42</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Correo verificado</span>
                    <span className="font-bold text-[#059669]">Sí</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-[#F3F4F6]">
                    <span className="text-[#6B7280]">Perfil completo</span>
                    <span className="font-semibold text-[#1A2B4C]">78 %</span>
                  </div>
                </div>
              </div>

              {/* ACTIVIDAD RECIENTE */}
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-[#F3F4F6] pb-3">
                  <h2 className="text-base font-bold text-[#1A2B4C]">Actividad reciente</h2>
                  <span className="text-xs text-[#6B7280]">Últimos 30 días</span>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Item 1 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1A2B4C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A2B4C]">Postuló a «Practicante de Data Analytics»</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Banco Marítimo del Sur · estado actual: recibida</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">02/09/2026 · 11:18</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1A2B4C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A2B4C]">Guardó «Practicante de Arquitectura de Datos»</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Consumo Pacífico</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">02/09/2026 · 10:52</span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1A2B4C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A2B4C]">Actualizó su resumen profesional</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Perfil completo: 68% → 78%</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">01/09/2026 · 20:04</span>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1A2B4C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A2B4C]">Postuló a «Practicante de Desarrollo Backend»</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Software Vilcanota · estado actual: recibida</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">01/09/2026 · 19:36</span>
                  </div>

                  {/* Item 5 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1A2B4C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#1A2B4C]">Publicó una reseña</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Retail Terravista · 4 de 5 estrellas</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">05/09/2026 · 09:11</span>
                  </div>

                  {/* Item 6 */}
                  <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#F3F4F6]">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#059669] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#059669]">Su postulación fue aceptada</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Retail Terravista · Practicante de Inteligencia de Negocios</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">05/09/2026 · 08:40</span>
                  </div>

                  {/* Item 7 */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-[#DC2626]">Su postulación fue descartada</p>
                        <p className="text-[#6B7280] text-[11px] mt-0.5">Nexolink Telecom · Practicante de Soporte TI</p>
                      </div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] shrink-0">22/08/2026 · 15:05</span>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (4 COLS) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* RESUMEN DE ACTIVIDAD */}
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm space-y-3">
                <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                  RESUMEN DE ACTIVIDAD
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-md p-3 text-center">
                    <p className="text-2xl font-bold text-[#1A2B4C]">7</p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">Postulaciones</p>
                  </div>

                  <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-md p-3 text-center">
                    <p className="text-2xl font-bold text-[#1A2B4C]">2</p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">Reseñas</p>
                  </div>

                  <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-md p-3 text-center">
                    <p className="text-2xl font-bold text-[#1A2B4C]">5</p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">Guardadas</p>
                  </div>

                  <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-md p-3 text-center">
                    <p className="text-2xl font-bold text-[#059669]">1</p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">Aceptación</p>
                  </div>
                </div>
              </div>

              {/* ACCIONES ADMINISTRATIVAS */}
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm space-y-3">
                <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#F3F4F6] pb-2">
                  ACCIONES ADMINISTRATIVAS
                </h2>

                <div className="space-y-2">
                  <button
                    onClick={() => mostrarNotificacion('Correo de verificación reenviado.')}
                    className="w-full py-2.5 px-3 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition text-left"
                  >
                    Reenviar verificación de correo
                  </button>

                  <button
                    onClick={() => mostrarNotificacion('Enlace de restablecimiento enviado.')}
                    className="w-full py-2.5 px-3 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition text-left"
                  >
                    Restablecer contraseña
                  </button>

                  {estadoCuenta === 'Activa' ? (
                    <button
                      onClick={() => setModalBloqueo(true)}
                      className="w-full py-2.5 px-3 bg-[#B91C1C] text-white text-xs font-bold rounded hover:bg-red-800 transition shadow-sm text-center mt-2"
                    >
                      Bloquear cuenta
                    </button>
                  ) : (
                    <button
                      onClick={desbloquearCuenta}
                      className="w-full py-2.5 px-3 bg-[#059669] text-white text-xs font-bold rounded hover:bg-emerald-700 transition shadow-sm text-center mt-2"
                    >
                      Desbloquear cuenta
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

      {/* MODAL DE BLOQUEO DE CUENTA */}
      {modalBloqueo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-[#E5E7EB]">
            
            <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">
              ¿Bloquear la cuenta de Mariana Quispe?
            </h3>
            
            <p className="text-xs text-[#374151] leading-relaxed mb-5">
              No podrá iniciar sesión ni postular. Sus 7 postulaciones quedan visibles para las empresas, pero se marcan como «cuenta bloqueada».
            </p>

            {/* Motivo */}
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

            {/* Detalle interno */}
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

            {/* Banner alerta */}
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
                  setModalBloqueo(false);
                  setDetalleInterno('');
                }}
                className="px-5 py-2.5 border border-[#D1D5DB] bg-white text-[#374151] text-xs font-semibold rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              
              <button
                onClick={ejecutarBloqueo}
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
