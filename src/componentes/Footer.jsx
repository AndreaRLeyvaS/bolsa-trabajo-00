export default function Footer() {
  return (
    <footer className="bg-[#0C2A46] px-6 py-8 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">

        {/* Nombre y descripción */}
        <div className="lg:col-span-2">
          <p className="font-bold">PrácticaLima</p>

          <p className="mt-2 max-w-[260px] text-xs text-[#A3B8C9]">
            Bolsa de prácticas pre-profesionales para estudiantes
            de la Universidad de Lima.
          </p>
        </div>

        {/* Plataforma */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            PLATAFORMA
          </h2>

          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#convocatorias">Convocatorias</a></li>
            <li><a href="#empresas">Empresas</a></li>
            <li><a href="#publicar">Publicar convocatoria</a></li>
          </ul>
        </div>

        {/* Ayuda */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            AYUDA
          </h2>

          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#preguntas">Preguntas frecuentes</a></li>
            <li><a href="#terminos">Términos del servicio</a></li>
            <li><a href="#privacidad">Privacidad de datos</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-xs tracking-widest text-[#A3B8C9]">
            CONTACTO
          </h2>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:practicas@ulima.edu.pe">
                practicas@ulima.edu.pe
              </a>
            </li>
            <li>Av. Javier Prado Este 4600</li>
            <li>Sede Monterrico, Lima</li>
          </ul>
        </div>

        {/* Derechos */}
        <p className="text-xs text-[#A3B8C9] lg:text-right">
          © Universidad de Lima
        </p>

      </div>
    </footer>
  );
}