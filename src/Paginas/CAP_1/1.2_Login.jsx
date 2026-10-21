import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  // Estados del formulario (Formulario controlado)
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Estados para las piezas sueltas de la pantalla 1.2
  const [cargando, setCargando] = useState(false);
  const [errorCredenciales, setErrorCredenciales] = useState(false);
  const [errorCamposVacios, setErrorCamposVacios] = useState(false);
  const [intentosRestantes, setIntentosRestantes] = useState(5);

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar estados de error previos
    setErrorCredenciales(false);
    setErrorCamposVacios(false);

    // 1. Pieza suelta: Campo vacío
    if (!correo.trim() || !contrasena.trim()) {
      setErrorCamposVacios(true);
      return;
    }

    // 2. Pieza suelta: Botón en carga
    setCargando(true);

    setTimeout(() => {
      setCargando(false);

      // Simulación de autenticación y redirección según rol
      if (correo.endsWith('@aloe.ulima.edu.pe') && contrasena === '123456') {
        navigate('/estudiante/perfil');
      } else if (correo.endsWith('@andesperu.com.pe') && contrasena === '123456') {
        navigate('/empresa/perfil');
      } else {
        // 3. Pieza suelta: Error de credenciales
        setErrorCredenciales(true);
        setIntentosRestantes((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1500);
  };

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

          {/* PIEZA SUELTA: MENSAJE DE ERROR DE CREDENCIALES */}
          {errorCredenciales && (
            <div className="mt-4 rounded-md border border-[#B4322B] bg-[#B4322B]/10 p-3 text-xs text-[#B4322B]">
              Correo o contraseña incorrectos. Te quedan {intentosRestantes} intentos antes del bloqueo temporal.
            </div>
          )}

          {/* PIEZA SUELTA: MENSAJE DE CAMPOS VACÍOS */}
          {errorCamposVacios && (
            <div className="mt-4 rounded-md border border-[#B7791F] bg-[#B7791F]/10 p-3 text-xs text-[#B7791F]">
              Completa 2 campos para continuar.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6">
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
                disabled={cargando}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                autoComplete="username"
                placeholder="mariana.quispe@aloe.ulima.edu.pe"
                className={`h-12 w-full rounded-md border px-3 text-sm text-[#16212B] outline-none transition-colors ${
                  errorCamposVacios && !correo
                    ? 'border-[#B4322B] focus:border-[#B4322B]'
                    : 'border-[#DCE3EA] focus:border-[#123A5F]'
                } ${cargando ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
              />
              {errorCamposVacios && !correo && (
                <span className="mt-1 block text-xs text-[#B4322B]">Ingresa tu correo.</span>
              )}
            </div>

            {/* Contraseña */}
            <div className="mt-5">
              <label
                htmlFor="contrasena"
                className="mb-2 block text-xs font-semibold tracking-widest text-[#16212B]"
              >
                CONTRASEÑA
              </label>

              <div
                className={`flex items-center rounded-md border transition-colors ${
                  errorCamposVacios && !contrasena
                    ? 'border-[#B4322B] focus-within:border-[#B4322B]'
                    : 'border-[#DCE3EA] focus-within:border-[#123A5F]'
                }`}
              >
                <input
                  id="contrasena"
                  name="contrasena"
                  type={mostrarPassword ? 'text' : 'password'}
                  disabled={cargando}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  className={`h-12 min-w-0 flex-1 rounded-md px-3 text-sm text-[#16212B] outline-none ${
                    cargando ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                  }`}
                />

                <button
                  type="button"
                  disabled={cargando}
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="px-3 text-xs font-medium text-[#123A5F] hover:underline"
                >
                  {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              {errorCamposVacios && !contrasena && (
                <span className="mt-1 block text-xs text-[#B4322B]">Ingresa tu contraseña.</span>
              )}
            </div>

            {/* Recordarme y recuperación */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-[#16212B]">
                <input
                  name="recordarme"
                  type="checkbox"
                  disabled={cargando}
                  className="h-4 w-4 accent-[#123A5F]"
                />
                Recordarme
              </label>

              {/* CONEXIÓN 1: Recuperar contraseña */}
              <Link
                to="/recuperar"
                className="text-sm text-[#123A5F] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* BOTÓN CON ESTADO DE CARGA */}
            <button
              type="submit"
              disabled={cargando}
              className="mt-5 flex h-12 w-full items-center justify-center rounded-md bg-[#123A5F] text-sm font-semibold text-white transition-colors hover:bg-[#0C2A46] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {cargando ? (
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Ingresando...</span>
                </div>
              ) : (
                'Ingresar'
              )}
            </button>
          </form>

          {/* Opciones de registro */}
          <div className="mt-5 border-t border-[#DCE3EA] pt-5">
            <p className="text-sm text-[#67757F]">
              ¿Aún no tienes cuenta?
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {/* CONEXIÓN 2: Registro Estudiante */}
              <Link
                to="/registro-estudiante"
                className="block rounded-md border border-[#123A5F] px-3 py-3 text-center text-xs font-semibold text-[#123A5F] hover:bg-[#E6EEF5]"
              >
                Registrarme como estudiante
              </Link>

              {/* CONEXIÓN 3: Registro Empresa */}
              <Link
                to="/registro-empresa"
                className="block rounded-md border border-[#DCE3EA] px-3 py-3 text-center text-xs font-semibold text-[#16212B] hover:bg-[#F7F9FB]"
              >
                Registrar mi empresa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}