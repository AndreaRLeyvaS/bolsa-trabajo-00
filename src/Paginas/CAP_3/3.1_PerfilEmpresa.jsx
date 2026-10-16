import { Link } from 'react-router-dom';

export default function PerfilEmpresa() {
  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA]">
      
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
            <Link to="#" className="flex items-center gap-3 px-6 py-2.5 text-xs text-[#374151] hover:bg-[#F9FAFB] transition">
              <span className="text-gray-400">■</span> Bandeja de postulantes
            </Link>
          </nav>
        </div>

        {/* Bloque EMPRESA (Item activo) */}
        <div className="mb-6">
          <h3 className="px-6 text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
            EMPRESA
          </h3>
          <nav className="space-y-0.5">
            <Link to="/empresa/perfil" className="flex items-center gap-3 px-6 py-2.5 text-xs font-bold text-[#1A2B4C] bg-[#EEF2F7] border-l-4 border-[#1A2B4C]">
              <span>■</span> Perfil de la empresa
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

      {/* 2. CONTENIDO PRINCIPAL DEL CENTRO */}
      <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Empresa <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Perfil de la empresa</span>
        </div>

        {/* Encabezado con Título y Botones de Acción */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#1A2B4C]">Perfil de la empresa</h1>
            <span className="inline-flex items-center gap-1 bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
              ✓ Cuenta verificada
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/empresa/ficha-publica" 
              className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition"
            >
              Ver ficha pública
            </Link>
            <Link 
              to="/empresa/editar" 
              className="px-4 py-2 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm"
            >
              Editar perfil
            </Link>
          </div>
        </div>

        {/* TARJETA 1: DATOS GENERALES */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-5 pb-3 border-b border-[#E5E7EB]">
            Datos generales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">RAZÓN SOCIAL</span>
              <p className="text-sm text-[#1A2B4C] font-medium">Consultora Andes Perú S.A.C.</p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">NOMBRE COMERCIAL</span>
              <p className="text-sm text-[#1A2B4C] font-medium">Andes Perú</p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">RUC</span>
              <p className="text-sm text-[#1A2B4C] font-medium">20548712936</p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">SECTOR</span>
              <p className="text-sm text-[#1A2B4C] font-medium">Consultoría</p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">SITIO WEB</span>
              <a href="https://andesperu.com.pe" target="_blank" rel="noreferrer" className="text-sm text-[#1A2B4C] underline font-medium">
                andesperu.com.pe
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">TAMAÑO</span>
              <p className="text-sm text-[#1A2B4C] font-medium">De 51 a 200 colaboradores</p>
            </div>

            <div className="md:col-span-2 pt-2">
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">DESCRIPCIÓN</span>
              <p className="text-sm text-[#374151] leading-relaxed">
                Consultora peruana de transformación digital con 14 años en el mercado. Acompañamos a bancos, retailers y operadores de telecomunicaciones en la mejora de sus procesos y en el desarrollo de sus plataformas internas. Nuestro programa de prácticas dura seis meses y cada practicante trabaja con un mentor asignado.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 2: DIRECCIÓN Y CONTACTO */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-5 pb-3 border-b border-[#E5E7EB]">
            Dirección y contacto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            <div className="md:col-span-2">
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">DIRECCIÓN</span>
              <p className="text-sm text-[#1A2B4C] font-medium">
                Av. Canaval y Moreyra 480, piso 9 — San Isidro, Lima
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">CORREO DE CONTACTO</span>
              <p className="text-sm text-[#1A2B4C] font-medium">seleccion@andesperu.com.pe</p>
            </div>

            <div>
              <span className="block text-[11px] font-bold text-[#374151] uppercase mb-1">TELÉFONO</span>
              <p className="text-sm text-[#1A2B4C] font-medium">(01) 415 8820</p>
            </div>
          </div>
        </div>

        {/* TARJETA 3: RESUMEN DE ACTIVIDAD */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
          <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-5 pb-3 border-b border-[#E5E7EB]">
            Resumen de actividad
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-[#F5F7FA] rounded-lg border border-[#E5E7EB]">
              <p className="text-3xl font-bold text-[#1A2B4C] mb-1">4</p>
              <p className="text-xs text-[#6B7280] font-medium">Convocatorias vigentes</p>
            </div>

            <div className="p-4 bg-[#F5F7FA] rounded-lg border border-[#E5E7EB]">
              <p className="text-3xl font-bold text-[#1A2B4C] mb-1">86</p>
              <p className="text-xs text-[#6B7280] font-medium">Postulaciones recibidas</p>
            </div>

            <div className="p-4 bg-[#F5F7FA] rounded-lg border border-[#E5E7EB]">
              <p className="text-3xl font-bold text-[#1A2B4C] mb-1">4.3 <span className="text-base text-[#6B7280] font-normal">/ 5.0</span></p>
              <p className="text-xs text-[#6B7280] font-medium">Calificación promedio</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}