import { Link } from 'react-router-dom';

export default function PerfilEmpresa() {
  return (
    <div className="flex min-h-[650px] bg-[#F7F9FB] text-[#16212B]">

      {/* Menú lateral */}
      <aside className="hidden w-[280px] shrink-0 border-r border-[#DCE3EA] bg-white px-5 py-7 md:block">
        <div className="mb-7">
          <h2 className="mb-3 px-3 text-xs font-semibold tracking-widest text-[#67757F]">
            CONVOCATORIAS
          </h2>

          <nav className="space-y-1">
            <Link
              to="/empresa/convocatorias"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Mis convocatorias
            </Link>

            <Link
              to="/empresa/nueva-convocatoria"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Nueva convocatoria
            </Link>

            <Link
              to="/empresa/bandeja"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Bandeja de postulantes
            </Link>
          </nav>
        </div>

        <div className="mb-7">
          <h2 className="mb-3 px-3 text-xs font-semibold tracking-widest text-[#67757F]">
            EMPRESA
          </h2>

          <nav className="space-y-1">
            <Link
              to="/empresa/perfil"
              className="block rounded bg-[#E6EEF5] px-3 py-2 text-sm font-semibold text-[#123A5F]"
            >
              Perfil de la empresa
            </Link>

            <Link
              to="/empresa/resenas-ficha"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Reseñas recibidas
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-3 px-3 text-xs font-semibold tracking-widest text-[#67757F]">
            CUENTA
          </h2>

          <nav className="space-y-1">
            <Link
              to="/cambiar-password"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Cambiar contraseña
            </Link>

            <Link
              to="/login"
              className="block rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              Cerrar sesión
            </Link>
          </nav>
        </div>
      </aside>

      {/* Contenido del perfil */}
      <div className="min-w-0 flex-1 p-5 lg:p-8">

        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs text-[#67757F]">
              Empresa ·
              <span className="ml-1 font-semibold text-[#16212B]">
                Perfil de la empresa
              </span>
            </p>

            <h1 className="text-[28px] font-semibold leading-8">
              Perfil de la empresa
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/empresa/ficha-publica"
              className="rounded-md border border-[#DCE3EA] bg-white px-4 py-3 text-sm font-semibold hover:bg-[#E6EEF5]"
            >
              Ver ficha pública
            </Link>

            <Link
              to="/empresa/editar-perfil"
              className="rounded-md bg-[#123A5F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0C2A46]"
            >
              Editar perfil
            </Link>
          </div>
        </div>

        {/* Identificación de la empresa */}
        <section className="mb-5 flex flex-wrap items-center gap-6 rounded-md border border-[#DCE3EA] bg-white px-6 py-5">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md border border-[#BDCEDD] bg-[repeating-linear-gradient(135deg,#E6EEF5_0px,#E6EEF5_8px,#DCE3EA_8px,#DCE3EA_16px)]">
            <span className="text-xs text-[#67757F]">
              logotipo
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#123A5F]">
              Consultora Andes Perú S.A.C.
            </h2>

            <p className="mt-1 text-sm">
              Andes Perú · Consultoría · De 51 a 200 colaboradores
            </p>
          </div>

          <span className="ml-auto rounded bg-[#E4F2EB] px-3 py-2 text-xs font-semibold text-[#1E7F4D]">
            Cuenta verificada
          </span>
        </section>

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">

          {/* Datos generales */}
          <section className="rounded-md border border-[#DCE3EA] bg-white p-6 xl:min-h-[600px]">
            <h2 className="mb-5 text-xl font-semibold text-[#123A5F]">
              Datos generales
            </h2>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  RAZÓN SOCIAL
                </p>
                <p className="text-sm">
                  Consultora Andes Perú S.A.C.
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  NOMBRE COMERCIAL
                </p>
                <p className="text-sm">Andes Perú</p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  RUC
                </p>
                <p className="text-sm">20548712936</p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  SECTOR
                </p>
                <p className="text-sm">Consultoría</p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  SITIO WEB
                </p>

                <a
                  href="https://andesperu.com.pe"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#123A5F] hover:underline"
                >
                  andesperu.com.pe
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                  TAMAÑO
                </p>
                <p className="text-sm">
                  De 51 a 200 colaboradores
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-[#DCE3EA] pt-5">
              <p className="mb-2 text-xs font-semibold tracking-wider text-[#67757F]">
                DESCRIPCIÓN
              </p>

              <p className="text-sm leading-[22px]">
                Consultora peruana de transformación digital con 14 años
                en el mercado. Acompañamos a bancos, retailers y operadores
                de telecomunicaciones en la mejora de sus procesos y en el
                desarrollo de sus plataformas internas. Nuestro programa
                de prácticas dura seis meses y cada practicante trabaja
                con un mentor asignado.
              </p>
            </div>
          </section>

          {/* Columna derecha */}
          <div className="space-y-5">

            <section className="rounded-md border border-[#DCE3EA] bg-white p-6">
              <h2 className="mb-5 text-xl font-semibold text-[#123A5F]">
                Dirección y contacto
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                    DIRECCIÓN
                  </p>
                  <p className="text-sm">
                    Av. Canaval y Moreyra 480, piso 9 — San Isidro, Lima
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                    CORREO DE CONTACTO
                  </p>
                  <p className="break-words text-sm">
                    seleccion@andesperu.com.pe
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold tracking-wider text-[#67757F]">
                    TELÉFONO
                  </p>
                  <p className="text-sm">(01) 415 8820</p>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-[#DCE3EA] bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-[#123A5F]">
                Resumen de actividad
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between gap-4">
                  <p className="text-sm text-[#67757F]">
                    Convocatorias vigentes
                  </p>
                  <p className="font-semibold">4</p>
                </div>

                <div className="flex justify-between gap-4">
                  <p className="text-sm text-[#67757F]">
                    Postulaciones recibidas
                  </p>
                  <p className="font-semibold">86</p>
                </div>

                <div className="flex justify-between gap-4">
                  <p className="text-sm text-[#67757F]">
                    Calificación promedio
                  </p>
                  <p className="font-semibold">4.3 / 5.0</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}