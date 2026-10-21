import { Link } from 'react-router-dom';

export default function EditarPerfilEmpresa() {
  return (
    <div className="flex min-h-[calc(100vh-112px)] bg-[#F5F7FA] font-sans">
      
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

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 md:p-8 max-w-[1200px] mx-auto w-full">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6B7280] mb-3">
          Empresa <span className="mx-1">·</span> Perfil de la empresa <span className="mx-1">·</span> <span className="text-[#1A2B4C] font-medium">Editar</span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* Header del formulario */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E7EB]">
            <h1 className="text-2xl font-bold text-[#1A2B4C]">Editar perfil de la empresa</h1>
            <div className="flex items-center gap-3">
              <Link 
                to="/empresa/perfil" 
                className="px-4 py-2 border border-[#E5E7EB] bg-white text-[#374151] text-xs font-semibold rounded hover:bg-gray-50 transition"
              >
                Cancelar
              </Link>
              <button 
                type="submit" 
                className="px-5 py-2 bg-[#1A2B4C] text-white text-xs font-bold rounded hover:bg-[#121E36] transition shadow-sm"
              >
                Guardar cambios
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 space-y-8 shadow-sm">
            
            {/* SECCIÓN 1: DATOS GENERALES */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-5 pb-2 border-b border-[#F3F4F6]">
                DATOS GENERALES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    RAZÓN SOCIAL
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Consultora Andes Perú S.A.C." 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    NOMBRE COMERCIAL
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Andes Perú" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                {/* RUC BLOQUEADO */}
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    RUC
                  </label>
                  <input 
                    type="text" 
                    disabled 
                    defaultValue="20548712936" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded bg-[#F3F4F6] text-[#9CA3AF] text-xs cursor-not-allowed font-medium"
                  />
                  <p className="text-[11px] text-[#6B7280] mt-1">
                    El RUC no se puede editar. Escribe a soporte si necesitas corregirlo.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    SECTOR
                  </label>
                  <select 
                    defaultValue="Consultoría"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
                  >
                    <option value="Consultoría">Consultoría</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Banca y Finanzas">Banca y Finanzas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    TAMAÑO
                  </label>
                  <select 
                    defaultValue="De 51 a 200 colaboradores"
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
                  >
                    <option value="De 1 a 50 colaboradores">De 1 a 50 colaboradores</option>
                    <option value="De 51 a 200 colaboradores">De 51 a 200 colaboradores</option>
                    <option value="Más de 200 colaboradores">Más de 200 colaboradores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    SITIO WEB
                  </label>
                  <input 
                    type="text" 
                    defaultValue="andesperu.com.pe" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                {/* DESCRIPCIÓN CON CONTADOR DE CARACTERES */}
                <div className="sm:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-[#374151] uppercase">
                      DESCRIPCIÓN
                    </label>
                    <span className="text-[11px] text-[#6B7280]">178/800</span>
                  </div>
                  <textarea 
                    rows={4} 
                    defaultValue="Consultora peruana de transformación digital con 14 años en el mercado. Nuestro programa de prácticas dura seis meses y cada practicante trabaja con un mentor asignado." 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#374151] focus:outline-none focus:border-[#1A2B4C]"
                  />
                  <p className="text-[11px] text-[#6B7280] mt-1">
                    Aparece en tu ficha pública.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: LOGOTIPO */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3F4F6]">
                LOGOTIPO
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src="https://www.andesoutdoors.com.pe/wp-content/uploads/favicon_andes.png"
                  alt="Logotipo de Andes Outdoors"
                  className="h-36 w-36 shrink-0 rounded-lg border border-dashed border-[#D1D5DB] bg-white object-contain p-3"
                />

                <div className="space-y-3">
                  <p className="text-xs text-[#6B7280]">
                    PNG o SVG, fondo transparente, mínimo 240 × 240 px.
                  </p>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button" 
                      className="px-4 py-2 border border-[#1A2B4C] text-[#1A2B4C] text-xs font-bold rounded hover:bg-gray-50 transition"
                    >
                      Subir logotipo
                    </button>
                    <button 
                      type="button" 
                      className="text-xs font-semibold text-red-600 hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN 3: DIRECCIÓN Y CONTACTO */}
            <div>
              <h2 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-5 pb-2 border-b border-[#F3F4F6]">
                DIRECCIÓN Y CONTACTO
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    DIRECCIÓN
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Av. Canaval y Moreyra 480, piso 9" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    DISTRITO
                  </label>
                  <input 
                    type="text" 
                    defaultValue="San Isidro" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    CORREO DE CONTACTO
                  </label>
                  <input 
                    type="email" 
                    defaultValue="seleccion@andesperu.com.pe" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] uppercase mb-1">
                    TELÉFONO
                  </label>
                  <input 
                    type="text" 
                    defaultValue="(01) 415 8820" 
                    className="w-full p-2.5 border border-[#E5E7EB] rounded text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C]"
                  />
                </div>
              </div>
            </div>

          </div>
        </form>

      </main>
    </div>
  );
}
