export default function LandingPublica() {
  return (
    <>
      {/* Presentación y buscador */}
      <section className="bg-[#E6EEF5] px-6 py-6">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-[28px] font-semibold leading-8 text-[#123A5F]">
              Tu primera práctica empieza aquí
            </h1>

            <p className="mt-4 max-w-[520px] text-[15px] leading-[22px] text-[#16212B]">
              Convocatorias de prácticas pre-profesionales publicadas por
              empresas para estudiantes de la Universidad de Lima. Postula
              con tu perfil y sigue el estado de cada postulación.
            </p>

            <div className="mt-5 grid items-end gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <div>
                <label
                  htmlFor="puesto"
                  className="mb-2 block text-xs font-semibold tracking-widest text-[#123A5F]"
                >
                  PUESTO
                </label>

                <input
                  id="puesto"
                  type="text"
                  placeholder="Ej. Practicante de Data Analytics"
                  className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#16212B]"
                />
              </div>

              <div>
                <label
                  htmlFor="carrera"
                  className="mb-2 block text-xs font-semibold tracking-widest text-[#123A5F]"
                >
                  CARRERA
                </label>

                <select
                  id="carrera"
                  className="h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#67757F]"
                >
                  <option>Todas las carreras</option>
                  <option>Ingeniería de Sistemas</option>
                  <option>Ingeniería Industrial</option>
                  <option>Marketing</option>
                </select>
              </div>

              <button
                type="button"
                className="h-12 rounded-md bg-[#123A5F] px-6 text-sm font-semibold text-white hover:bg-[#0C2A46]"
              >
                Buscar
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-xs text-[#67757F]">
              <p>128 convocatorias vigentes</p>
              <p>46 empresas publicando</p>
              <p>10 carreras</p>
            </div>
          </div>

          <div
            className="flex h-[152px] items-center justify-center rounded-md border border-[#DCE3EA] bg-[repeating-linear-gradient(135deg,#E6EEF5_0px,#E6EEF5_8px,#DCE3EA_8px,#DCE3EA_16px)]"
          >
            <p className="px-4 text-center text-xs text-[#67757F]">
              foto hero · estudiantes en oficina
            </p>
          </div>
        </div>
      </section>

      {/* Convocatorias */}
      <section
        id="convocatorias"
        className="mx-auto max-w-[1200px] px-6 py-5 xl:px-0"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[#123A5F]">
            Convocatorias destacadas
          </h2>

          <a
            href="#convocatorias"
            className="text-sm font-semibold text-[#0F8B7E]"
          >
            Ver todas las convocatorias →
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E6EEF5] text-xs font-bold text-[#123A5F]">
                AP
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-[#123A5F]">
                  Practicante de Desarrollo de Software
                </h3>

                <p className="mt-1 text-sm text-[#16212B]">
                  Consultora Andes Perú · Consultoría
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-[#67757F]">
                    Ing. de Sistemas · Híbrido · San Isidro
                  </p>

                  <p className="text-sm font-bold text-[#16212B]">
                    S/ 1,850.00
                  </p>

                  <p className="text-xs text-[#67757F]">
                    Cierra 30/09/2026
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E6EEF5] text-xs font-bold text-[#123A5F]">
                BM
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-[#123A5F]">
                  Practicante de Data Analytics
                </h3>

                <p className="mt-1 text-sm text-[#16212B]">
                  Banco Marítimo del Sur · Banca y finanzas
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-[#67757F]">
                    Ing. de Sistemas · Presencial · Miraflores
                  </p>

                  <p className="text-sm font-bold text-[#16212B]">
                    S/ 2,100.00
                  </p>

                  <p className="text-xs text-[#67757F]">
                    Cierra 24/09/2026
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E6EEF5] text-xs font-bold text-[#123A5F]">
                TR
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-[#123A5F]">
                  Practicante de Marketing Digital
                </h3>

                <p className="mt-1 text-sm text-[#16212B]">
                  Retail Terravista · Retail
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-[#67757F]">
                    Marketing · Remoto · Surco
                  </p>

                  <p className="text-sm font-bold text-[#16212B]">
                    S/ 1,400.00
                  </p>

                  <p className="text-xs text-[#67757F]">
                    Cierra 12/10/2026
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E6EEF5] text-xs font-bold text-[#123A5F]">
                MI
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-[#123A5F]">
                  Practicante de Mejora de Procesos
                </h3>

                <p className="mt-1 text-sm text-[#16212B]">
                  Minera Illari · Minería
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-[#67757F]">
                    Ing. Industrial · Híbrido · San Borja
                  </p>

                  <p className="text-sm font-bold text-[#16212B]">
                    S/ 2,300.00
                  </p>

                  <p className="text-xs text-[#67757F]">
                    Cierra 05/10/2026
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Cómo funciona */}
        <div
          id="como-funciona"
          className="mt-3 grid gap-3 md:grid-cols-3"
        >
          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#123A5F] text-xs text-white">
                1
              </span>

              <h3 className="text-sm font-semibold text-[#16212B]">
                Crea tu perfil
              </h3>
            </div>

            <p className="mt-2 text-sm text-[#67757F]">
              Carrera, ciclo, habilidades y experiencia en un solo lugar.
            </p>
          </article>

          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#123A5F] text-xs text-white">
                2
              </span>

              <h3 className="text-sm font-semibold text-[#16212B]">
                Postula en un clic
              </h3>
            </div>

            <p className="mt-2 text-sm text-[#67757F]">
              Enviamos tu perfil y un mensaje opcional al reclutador.
            </p>
          </article>

          <article className="rounded-md border border-[#DCE3EA] bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#123A5F] text-xs text-white">
                3
              </span>

              <h3 className="text-sm font-semibold text-[#16212B]">
                Sigue el estado
              </h3>
            </div>

            <p className="mt-2 text-sm text-[#67757F]">
              Recibida, en revisión, aceptada o descartada, sin llamadas.
            </p>
          </article>
        </div>

        {/* Sección para empresas */}
        <div
          id="empresas"
          className="mt-4 flex flex-col justify-between gap-4 rounded-md bg-[#123A5F] p-6 text-white md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-xl font-semibold">
              ¿Buscas practicantes de la Universidad de Lima?
            </h2>

            <p className="mt-2 text-sm text-[#E6EEF5]">
              Publica tu convocatoria y recibe postulaciones filtradas
              por carrera y ciclo.
            </p>
          </div>

          <button
            id="publicar"
            type="button"
            className="shrink-0 rounded-md bg-[#0F8B7E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0C756A]"
          >
            Publicar convocatoria
          </button>
        </div>
      </section>
    </>
  );
}