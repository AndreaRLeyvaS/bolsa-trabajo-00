import { Link } from 'react-router-dom';

export default function FichaPublicaEmpresa() {
  const convocatorias = [
    {
      puesto: 'Practicante de Desarrollo de Software',
      carrera: 'Ingeniería de Sistemas',
      modalidad: 'Híbrido',
      jornada: 'Medio tiempo',
      publicacion: '18/08/2026',
      subvencion: '1,850.00',
      cierre: '30/09/2026'
    },
    {
      puesto: 'Practicante de Mejora de Procesos',
      carrera: 'Ingeniería Industrial',
      modalidad: 'Presencial',
      jornada: 'Tiempo completo',
      publicacion: '12/08/2026',
      subvencion: '1,600.00',
      cierre: '26/09/2026'
    },
    {
      puesto: 'Practicante de Gestión Humana',
      carrera: 'Psicología y Administración',
      modalidad: 'Híbrido',
      jornada: 'Medio tiempo',
      publicacion: '05/08/2026',
      subvencion: '1,300.00',
      cierre: '20/09/2026'
    },
    {
      puesto: 'Practicante de Soporte TI',
      carrera: 'Ingeniería de Sistemas',
      modalidad: 'Presencial',
      jornada: 'Medio tiempo',
      publicacion: '02/08/2026',
      subvencion: '1,150.00',
      cierre: '18/09/2026'
    }
  ];

  return (
    <div className="bg-[#F7F9FB] px-5 py-6 text-[#16212B]">
      <div className="mx-auto max-w-[1200px]">

        {/* Ubicación */}
        <p className="mb-5 text-xs text-[#67757F]">
          Empresas ·
          <span className="ml-1 font-bold text-[#16212B]">
            Consultora Andes Perú
          </span>
        </p>

        {/* Presentación de la empresa */}
        <section className="flex flex-wrap items-center gap-6 rounded-md border border-[#DCE3EA] bg-white p-6">

          <img src="https://www.andesoutdoors.com.pe/wp-content/uploads/favicon_andes.png" alt="Logotipo de Andes Outdoors" className="h-24 w-24 shrink-0 rounded-md border border-[#BDCEDD] bg-white object-contain p-2" />

          <div className="min-w-0 flex-1">
            <h1 className="text-[28px] font-semibold leading-8 text-[#123A5F]">
              Consultora Andes Perú
            </h1>

            <p className="mt-2 text-sm">
              Consultoría · De 51 a 200 colaboradores · San Isidro, Lima
            </p>

            <a
              href="https://andesperu.com.pe"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs text-[#123A5F] hover:underline"
            >
              andesperu.com.pe
            </a>
          </div>

          <div className="sm:ml-auto sm:text-right">
            <p>
              <span className="text-4xl font-semibold">
                4.3
              </span>
              <span className="ml-2 text-sm text-[#67757F]">
                / 5.0
              </span>
            </p>

            <p
              aria-label="Calificación: 4.3 de 5"
              className="mt-1 text-xl tracking-tight text-[#B7791F]"
            >
              ★★★★☆
            </p>

            <p className="mt-1 text-xs text-[#67757F]">
              28 reseñas de practicantes
            </p>
          </div>
        </section>

        {/* Pestañas */}
        <nav
          aria-label="Secciones de la empresa"
          className="mt-5 flex flex-wrap border-b border-[#DCE3EA] text-sm"
        >
          <Link
            to="/empresa/ficha-publica"
            aria-current="page"
            className="border-b-2 border-[#123A5F] px-5 py-4 font-semibold text-[#123A5F]"
          >
            Convocatorias vigentes (4)
          </Link>

          <Link
            to="/empresa/resenas-ficha"
            className="px-5 py-4 font-medium text-[#67757F] hover:text-[#123A5F]"
          >
            Reseñas (28)
          </Link>

          <a
            href="#sobre-la-empresa"
            className="px-5 py-4 font-medium text-[#67757F] hover:text-[#123A5F]"
          >
            Sobre la empresa
          </a>
        </nav>

        {/* Convocatorias e información */}
        <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Listado de convocatorias */}
          <div className="space-y-3">
            {convocatorias.map((convocatoria) => (
              <article
                key={convocatoria.puesto}
                className="rounded-md border border-[#BDCEDD] bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#E6EEF5] text-xs font-semibold text-[#123A5F]">
                    AP
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#123A5F]">
                        {convocatoria.puesto}
                      </h2>

                      <span className="rounded bg-[#E4F2EB] px-2 py-1 text-[10px] font-semibold text-[#1E7F4D]">
                        Vigente
                      </span>
                    </div>

                    <p className="mt-1 text-xs">
                      Consultora Andes Perú · Consultoría
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[11px] leading-5 text-[#67757F]">
                        {convocatoria.carrera}
                        {' · '}
                        {convocatoria.modalidad}
                        {' · '}
                        {convocatoria.jornada}
                        {' · San Isidro · Publicada '}
                        {convocatoria.publicacion}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-semibold">
                          S/ {convocatoria.subvencion}
                        </p>

                        <p className="text-[11px] text-[#67757F]">
                          Cierra {convocatoria.cierre}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="space-y-4">

            {/* Sobre la empresa */}
            <section
              id="sobre-la-empresa"
              className="scroll-mt-5 rounded-md border border-[#DCE3EA] bg-white p-6"
            >
              <h2 className="mb-3 text-xl font-bold text-[#123A5F]">
                Sobre la empresa
              </h2>

              <p className="text-sm leading-[22px]">
                Consultora peruana de transformación digital con
                14 años en el mercado. El programa de prácticas
                dura seis meses con un mentor asignado.
              </p>
            </section>

            {/* Calificaciones */}
            <section className="rounded-md border border-[#DCE3EA] bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-[#123A5F]">
                Aspectos mejor calificados
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <p className="text-[#67757F]">
                    Aprendizaje
                  </p>
                  <p className="font-semibold">4.6</p>
                </div>

                <div className="flex justify-between gap-4">
                  <p className="text-[#67757F]">
                    Ambiente
                  </p>
                  <p className="font-semibold">4.4</p>
                </div>

                <div className="flex justify-between gap-4">
                  <p className="text-[#67757F]">
                    Carga horaria
                  </p>
                  <p className="font-semibold">3.9</p>
                </div>
              </div>
            </section>

            {/* Escribir reseña */}
            <section className="rounded-md border border-[#DCE3EA] bg-white p-6">
              <h2 className="text-sm font-bold">
                ¿Practicaste aquí?
              </h2>

              <p className="mt-2 text-sm leading-5 text-[#67757F]">
                Tu reseña ayuda a otros estudiantes a decidir.
              </p>

              <Link
                to="/empresa/escribir-resena"
                className="mt-4 block rounded-md border border-[#123A5F] px-3 py-3 text-center text-sm font-semibold text-[#123A5F] hover:bg-[#E6EEF5]"
              >
                Escribir una reseña
              </Link>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
