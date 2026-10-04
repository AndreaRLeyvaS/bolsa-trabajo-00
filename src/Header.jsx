export default function Header() {
  return (
    <header className="border-b border-[#DCE3EA] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-[#123A5F]"
        >
          <span
            aria-hidden="true"
            className="h-6 w-6 rounded-md bg-[#123A5F]"
          />
          PrácticaLima
        </a>

        <nav
          aria-label="Navegación principal"
          className="flex flex-wrap gap-6 text-sm text-[#67757F]"
        >
          <a href="#convocatorias" className="hover:text-[#123A5F]">
            Convocatorias
          </a>
          <a href="#empresas" className="hover:text-[#123A5F]">
            Empresas
          </a>
          <a href="#como-funciona" className="hover:text-[#123A5F]">
            Cómo funciona
          </a>
        </nav>

        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-md border border-[#DCE3EA] px-4 py-2 text-sm font-semibold text-[#123A5F]"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="rounded-md bg-[#123A5F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0C2A46]"
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  )
}