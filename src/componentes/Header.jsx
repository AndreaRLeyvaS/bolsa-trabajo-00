import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  // 1. RUTA LOGIN ADMIN (7.1): Sin Header
  if (path === '/admin/login') {
    return null;
  }

  // 2. ROL ADMINISTRADOR (7.2 - 7.4): Cabecera oscura Admin de 80px
  if (path.startsWith('/admin')) {
    return (
      <header className="h-20 bg-[#123A5F] px-6 flex items-center justify-between text-white shadow-md font-sans sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded text-[#123A5F] font-bold text-sm flex items-center justify-center shrink-0">
            PL
          </div>
          <span className="text-base font-bold tracking-tight">PrácticaLima</span>
          <span className="h-5 w-[1px] bg-white/20 mx-1 hidden sm:block" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A3B8C9] hidden sm:block">
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
          <div className="w-10 h-10 bg-[#0C2A46] rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/20">
            JR
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <p className="text-xs font-bold text-white">Julio Romero</p>
            <p className="text-[11px] text-[#A3B8C9]">Administrador · Gestión académica</p>
          </div>
        </div>
      </header>
    );
  }

  // 3. ROL EMPRESA (3.1, 3.1.2, 3.3, 3.4, 5.5, 5.6): Cabecera oscura Empresa (64px)
  const esRutaEmpresa =
    path === '/empresa/perfil' ||
    path === '/empresa/editar-perfil' ||
    path === '/empresa/convocatorias' ||
    path === '/empresa/nueva-convocatoria' ||
    path === '/empresa/bandeja' ||
    path === '/empresa/perfil-postulante';

  if (esRutaEmpresa) {
    return (
      <header className="h-16 bg-[#0C2A46] text-white px-6 flex items-center justify-between shadow-md font-sans sticky top-0 z-40">
        
        {/* Lado Izquierdo: Logo + Separador + Título */}
        <div className="flex items-center gap-4">
          <Link to="/empresa/convocatorias" className="flex items-center gap-2 font-bold text-white text-lg">
            <span aria-hidden="true" className="h-7 w-7 rounded-md bg-white text-[#123A5F] text-xs font-bold flex items-center justify-center">
              PL
            </span>
            PrácticaLima
          </Link>
          
          {/* Separador Vertical */}
          <span className="h-5 w-[1px] bg-white/20 mx-1 hidden sm:block" />
          
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3B8C9] hidden sm:inline-block mt-0.5">
            PANEL DE EMPRESA
          </span>
        </div>

        {/* Centro: Buscador con Lupa */}
        <div className="hidden md:block w-[320px] relative">
          <svg 
            className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar en mis convocatorias"
            className="w-full h-9 pl-9 pr-3 bg-white/5 border border-white/20 rounded-md text-xs text-white placeholder-white/50 focus:outline-none focus:bg-white/10 focus:border-white/40 transition-all"
          />
        </div>

        {/* Lado Derecho: Perfil de Empresa */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2A5A8B] text-white font-bold text-xs rounded-full flex items-center justify-center shrink-0">
            AP
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <p className="text-xs font-bold text-white flex items-center gap-1">
              Consultora Andes Perú S.A.C.
              <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </p>
            <p className="text-[10px] text-[#A3B8C9] mt-0.5">Empresa · Cuenta verificada</p>
          </div>
        </div>
        
      </header>
    );
  }

  // 4. ROL VISITANTE (1.1 - 1.5): Cabecera blanca pública
  const esRutaVisitante =
    path === '/' ||
    path === '/login' ||
    path === '/registro-estudiante' ||
    path === '/registro-empresa' ||
    path === '/recuperar';

  if (esRutaVisitante) {
    return (
      <header className="border-b border-[#DCE3EA] bg-white sticky top-0 z-40 font-sans">
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap items-center gap-8">
            <Link to="/" className="flex items-center gap-2 font-bold text-[#123A5F]">
              <span aria-hidden="true" className="h-6 w-6 rounded-md bg-[#123A5F]" />
              PrácticaLima
            </Link>

            <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-6 text-sm text-[#67757F]">
              <a href="#convocatorias" className="hover:text-[#123A5F]">Convocatorias</a>
              <a href="#empresas" className="hover:text-[#123A5F]">Empresas</a>
              <a href="#como-funciona" className="hover:text-[#123A5F]">Cómo funciona</a>
            </nav>
          </div>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="rounded-md border border-[#DCE3EA] px-4 py-2 text-sm font-semibold text-[#123A5F] inline-block hover:bg-[#F5F7FA]"
            >
              Iniciar sesión
            </Link>

            <Link
              to="/registro-estudiante"
              className="rounded-md bg-[#123A5F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0C2A46] inline-block"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </header>
    );
  }

    // 5. ROL ESTUDIANTE (Con Sesión): Cabecera blanca con Navegación + Avatar
  return (
    <header className="border-b border-[#DCE3EA] bg-white sticky top-0 z-40 font-sans">
      {/* Ajustamos el padding vertical a 0 para que las líneas toquen el borde inferior */}
      <div className="flex items-center justify-between px-6 h-16 gap-4"> 
        
        <div className="flex items-center gap-8 h-full">
          <Link to="/" className="flex items-center gap-2 font-bold text-[#123A5F] text-lg">
            <span aria-hidden="true" className="h-7 w-7 rounded-md bg-[#123A5F]" />
            PrácticaLima
          </Link>

          {/* Navegación con subrayado */}
          <nav aria-label="Navegación principal" className="flex items-center h-full gap-6 text-sm text-[#67757F]">
            <Link 
              to="/convocatorias" 
              className={`h-full flex items-center transition-colors hover:text-[#123A5F] ${
                path === '/convocatorias' 
                ? 'border-b-[3px] border-[#123A5F] font-bold text-[#123A5F]' 
                : 'border-b-[3px] border-transparent'
              }`}
            >
              Convocatorias
            </Link>

            <Link 
              to="/postulaciones" 
              className={`h-full flex items-center transition-colors hover:text-[#123A5F] ${
                path === '/postulaciones' 
                ? 'border-b-[3px] border-[#123A5F] font-bold text-[#123A5F]' 
                : 'border-b-[3px] border-transparent'
              }`}
            >
              Mis postulaciones
            </Link>

            <Link 
              to="/guardadas" 
              className={`h-full flex items-center transition-colors hover:text-[#123A5F] ${
                path === '/guardadas' 
                ? 'border-b-[3px] border-[#123A5F] font-bold text-[#123A5F]' 
                : 'border-b-[3px] border-transparent'
              }`}
            >
              Guardadas
            </Link>

            <Link 
              to="/empresa/ranking" 
              className={`h-full flex items-center transition-colors hover:text-[#123A5F] ${
                path.includes('/empresa') 
                ? 'border-b-[3px] border-[#123A5F] font-bold text-[#123A5F]' 
                : 'border-b-[3px] border-transparent'
              }`}
            >
              Empresas
            </Link>

            <Link 
              to="/estudiante/perfil" 
              className={`h-full flex items-center transition-colors hover:text-[#123A5F] ${
                path.includes('/estudiante') 
                ? 'border-b-[3px] border-[#123A5F] font-bold text-[#123A5F]' 
                : 'border-b-[3px] border-transparent'
              }`}
            >
              Mi perfil
            </Link>
          </nav>
        </div>

        {/* Lado Derecho: Buscador + Perfil */}
        <div className="flex items-center gap-5">
          
          {/* BUSCADOR (Basado en tu imagen) */}
          <div className="hidden lg:flex items-center relative">
            <svg 
              className="w-4 h-4 text-gray-400 absolute left-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar convocatorias"
              className="w-64 h-9 pl-9 pr-3 border border-[#DCE3EA] rounded-md text-xs text-[#16212B] placeholder-gray-400 focus:outline-none focus:border-[#123A5F] focus:ring-1 focus:ring-[#123A5F] transition-all"
            />
          </div>

          {/* Perfil de Usuario */}
          <Link to="/estudiante/perfil" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=85" alt="Mariana Quispe" className="h-8 w-8 shrink-0 rounded-full object-cover" />
            <span className="text-sm font-bold text-[#16212B] hidden md:flex items-center gap-1">
              Mariana Quispe
              {/* Flecha hacia abajo */}
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );}
