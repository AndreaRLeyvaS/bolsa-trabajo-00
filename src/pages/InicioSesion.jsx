export default function InicioSesion() {
  return (
    <section className="flex min-h-[650px] items-center px-6 py-12">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        {/* Presentación */}
        <div className="max-w-[460px]">
          <h1 className="text-[28px] font-semibold leading-8 text-[#123A5F]">
            Vuelve a tu búsqueda
            <br />
            de prácticas
          </h1>

          <p className="mt-5 text-[15px] leading-[22px] text-[#67757F]">
            Retoma tus postulaciones, tus convocatorias guardadas
            y tu perfil profesional donde los dejaste.
          </p>

          <div className="mt-5 flex h-[220px] items-center justify-center rounded-md border border-[#DCE3EA] bg-[repeating-linear-gradient(135deg,#E6EEF5_0px,#E6EEF5_8px,#DCE3EA_8px,#DCE3EA_16px)]">
            <p className="px-4 text-center text-xs text-[#67757F]">
              ilustración · campus Monterrico
            </p>
          </div>
        </div>

        {/* Tarjeta de inicio de sesión */}
        <div className="w-full max-w-[528px] rounded-md border border-[#DCE3EA] bg-white p-6 shadow-sm sm:p-9 lg:justify-self-end">
          <h2 className="text-xl font-semibold text-[#16212B]">
            Inicia sesión
          </h2>

          <p className="mt-2 text-sm text-[#67757F]">
            Usa tu correo institucional o el correo de tu empresa.
          </p>

          <form className="mt-6">
            {/* Correo */}
            <div>
              <label
                htmlFor="correo"
                className="mb-2 block text-xs font-semibold tracking-widest text-[#16212B]"
              >
                CORREO
              </label>

              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="username"
                placeholder="mariana.quispe@aloe.ulima.edu.pe"
                className="h-12 w-full rounded-md border border-[#DCE3EA] px-3 text-sm text-[#16212B] outline-none focus:border-[#123A5F]"
              />
            </div>

            {/* Contraseña */}
            <div className="mt-5">
              <label
                htmlFor="contrasena"
                className="mb-2 block text-xs font-semibold tracking-widest text-[#16212B]"
              >
                CONTRASEÑA
              </label>

              <div className="flex items-center rounded-md border border-[#DCE3EA] focus-within:border-[#123A5F]">
                <input
                  id="contrasena"
                  name="contrasena"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  className="h-12 min-w-0 flex-1 rounded-md px-3 text-sm text-[#16212B] outline-none"
                />

                <button
                  type="button"
                  className="px-3 text-xs font-medium text-[#123A5F]"
                >
                  Mostrar
                </button>
              </div>
            </div>

            {/* Recordarme y recuperación */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-[#16212B]">
                <input
                  name="recordarme"
                  type="checkbox"
                  className="h-4 w-4 accent-[#123A5F]"
                />
                Recordarme
              </label>

              <button
                type="button"
                className="text-sm text-[#123A5F] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="button"
              className="mt-5 h-12 w-full rounded-md bg-[#123A5F] text-sm font-semibold text-white hover:bg-[#0C2A46]"
            >
              Ingresar
            </button>
          </form>

          {/* Opciones de registro */}
          <div className="mt-5 border-t border-[#DCE3EA] pt-5">
            <p className="text-sm text-[#67757F]">
              ¿Aún no tienes cuenta?
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-md border border-[#123A5F] px-3 py-3 text-xs font-semibold text-[#123A5F] hover:bg-[#E6EEF5]"
              >
                Registrarme como estudiante
              </button>

              <button
                type="button"
                className="rounded-md border border-[#DCE3EA] px-3 py-3 text-xs font-semibold text-[#16212B] hover:bg-[#F7F9FB]"
              >
                Registrar mi empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
