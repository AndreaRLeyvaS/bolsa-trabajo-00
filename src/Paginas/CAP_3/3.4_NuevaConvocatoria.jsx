import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NuevaConvocatoria() {
  const [carreras, setCarreras] = useState([
    'Ingeniería de Sistemas',
    'Ingeniería Industrial'
  ]);

  const [habilidades, setHabilidades] = useState(['React', 'SQL']);
  const [simularErrores, setSimularErrores] = useState(false);

  const campo =
    'h-12 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#16212B] outline-none focus:border-[#123A5F]';

  const etiqueta =
    'mb-2 block text-xs font-semibold tracking-wider text-[#16212B]';

  const tarjeta =
    'rounded-md border border-[#DCE3EA] bg-white p-5';

  const tituloSeccion =
    'mb-4 text-xs font-semibold tracking-widest text-[#123A5F]';

  function eliminarCarrera(carrera) {
    setCarreras(carreras.filter((item) => item !== carrera));
  }

  function eliminarHabilidad(habilidad) {
    setHabilidades(habilidades.filter((item) => item !== habilidad));
  }

  function publicar(evento) {
    evento.preventDefault();
    setSimularErrores(true);
  }

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
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
              Mis convocatorias
            </Link>

            <Link
              to="/empresa/nueva-convocatoria"
              className="flex items-center gap-3 rounded bg-[#E6EEF5] px-3 py-2 text-sm font-semibold text-[#123A5F]"
            >
              <span>▪</span>
              Nueva convocatoria
            </Link>

            <Link
              to="/empresa/bandeja"
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
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
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
              Perfil de la empresa
            </Link>

            <Link
              to="/empresa/resenas-ficha"
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
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
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
              Cambiar contraseña
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
              Cerrar sesión
            </Link>
          </nav>
        </div>
      </aside>

      {/* Formulario */}
      <form
        onSubmit={publicar}
        noValidate
        className="min-w-0 flex-1 p-5 lg:p-8"
      >

        {/* Título y acciones */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs text-[#67757F]">
              Convocatorias ·
              <span className="ml-1 font-semibold text-[#16212B]">
                Nueva convocatoria
              </span>
            </p>

            <h1 className="text-[28px] font-semibold leading-8 text-[#16212B]">
              Nueva convocatoria
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md border border-[#DCE3EA] bg-white px-5 py-3 text-sm font-semibold text-[#16212B] hover:bg-[#E6EEF5]"
            >
              Guardar como borrador
            </button>

            <button
              type="submit"
              className="rounded-md bg-[#0F8B7E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0C756A]"
            >
              Publicar convocatoria
            </button>
          </div>
        </div>

        {/* Control de simulación conservado */}
        <div className="mb-4 rounded border border-[#DCE3EA] bg-[#E6EEF5] p-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-[#123A5F]">
            <input
              type="checkbox"
              checked={simularErrores}
              onChange={() => setSimularErrores(!simularErrores)}
              className="accent-[#123A5F]"
            />

            Simular Pieza Suelta 3.4 (Errores de validación)
          </label>
        </div>

        {simularErrores && (
          <p
            role="alert"
            className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm font-semibold text-[#B4322B]"
          >
            Revisa 3 campos antes de publicar.
          </p>
        )}

        {/* Dos columnas */}
        <div className="grid items-stretch gap-4 xl:grid-cols-2">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">

            {/* 1. Puesto */}
            <section className={tarjeta}>
              <h2 className={tituloSeccion}>
                1 · PUESTO
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="puesto" className={etiqueta}>
                    TÍTULO DEL PUESTO
                  </label>

                  <input
                    key={`puesto-${simularErrores}`}
                    id="puesto"
                    name="puesto"
                    type="text"
                    defaultValue={
                      simularErrores
                        ? ''
                        : 'Practicante de Desarrollo de Software'
                    }
                    className={`${campo} ${
                      simularErrores ? 'border-red-500' : ''
                    }`}
                  />

                  {simularErrores && (
                    <p className="mt-1 text-xs text-[#B4322B]">
                      Ingresa el título del puesto.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="descripcion" className={etiqueta}>
                    DESCRIPCIÓN DE LA PRÁCTICA
                  </label>

                  <textarea
                    id="descripcion"
                    name="descripcion"
                    defaultValue="Apoyarás al equipo de producto en el desarrollo de módulos web internos con React y en la atención de requerimientos de los usuarios."
                    className="h-[118px] w-full rounded-md border border-[#DCE3EA] bg-white p-3 text-sm leading-[22px] text-[#16212B] outline-none focus:border-[#123A5F]"
                  />
                </div>

                <div>
                  <label htmlFor="funciones" className={etiqueta}>
                    FUNCIONES PRINCIPALES
                  </label>

                  <textarea
                    id="funciones"
                    name="funciones"
                    defaultValue={
                      '• Desarrollo de componentes en React.\n• Pruebas y corrección de incidencias.'
                    }
                    className="h-[104px] w-full rounded-md border border-[#DCE3EA] bg-white p-3 text-sm leading-[22px] text-[#16212B] outline-none focus:border-[#123A5F]"
                  />
                </div>
              </div>
            </section>

            {/* 2. Perfil buscado */}
            <section className={`${tarjeta} flex-1 xl:min-h-[330px]`}>
              <h2 className={tituloSeccion}>
                2 · PERFIL BUSCADO
              </h2>

              <div>
                <p className={etiqueta}>
                  CARRERAS
                </p>

                <div className="flex min-h-16 flex-wrap items-center gap-2 rounded-md border border-[#DCE3EA] bg-white p-3">
                  {carreras.map((carrera) => (
                    <span
                      key={carrera}
                      className="inline-flex items-center gap-1 rounded bg-[#E6EEF5] px-2 py-1 text-xs text-[#123A5F]"
                    >
                      {carrera}

                      <button
                        type="button"
                        onClick={() => eliminarCarrera(carrera)}
                        aria-label={`Quitar ${carrera}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}

                  <button
                    type="button"
                    className="text-xs text-[#67757F]"
                  >
                    + agregar
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ciclo" className={etiqueta}>
                    CICLO MÍNIMO
                  </label>

                  <select
                    id="ciclo"
                    name="ciclo"
                    defaultValue="Séptimo"
                    className={campo}
                  >
                    <option>Quinto</option>
                    <option>Sexto</option>
                    <option>Séptimo</option>
                    <option>Octavo</option>
                    <option>Noveno</option>
                    <option>Décimo</option>
                  </select>
                </div>

                <div>
                  <p className={etiqueta}>
                    HABILIDADES DESEADAS
                  </p>

                  <div className="flex min-h-12 flex-wrap items-center gap-2 rounded-md border border-[#DCE3EA] bg-white px-3 py-2">
                    {habilidades.map((habilidad) => (
                      <span
                        key={habilidad}
                        className="inline-flex items-center gap-1 rounded bg-[#E6EEF5] px-2 py-1 text-xs text-[#123A5F]"
                      >
                        {habilidad}

                        <button
                          type="button"
                          onClick={() => eliminarHabilidad(habilidad)}
                          aria-label={`Quitar ${habilidad}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-4">

            {/* 3. Condiciones */}
            <section className={tarjeta}>
              <h2 className={tituloSeccion}>
                3 · CONDICIONES
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modalidad" className={etiqueta}>
                    MODALIDAD
                  </label>

                  <select
                    id="modalidad"
                    name="modalidad"
                    defaultValue="Híbrido"
                    className={campo}
                  >
                    <option>Híbrido</option>
                    <option>Presencial</option>
                    <option>Remoto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="jornada" className={etiqueta}>
                    JORNADA
                  </label>

                  <select
                    id="jornada"
                    name="jornada"
                    defaultValue="Medio tiempo"
                    className={campo}
                  >
                    <option>Medio tiempo</option>
                    <option>Tiempo completo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="distrito" className={etiqueta}>
                    DISTRITO
                  </label>

                  <select
                    id="distrito"
                    name="distrito"
                    defaultValue="San Isidro"
                    className={campo}
                  >
                    <option>San Isidro</option>
                    <option>Miraflores</option>
                    <option>San Borja</option>
                    <option>Santiago de Surco</option>
                    <option>La Molina</option>
                    <option>Lima</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subvencion" className={etiqueta}>
                    SUBVENCIÓN MENSUAL
                  </label>

                  <input
                    key={`subvencion-${simularErrores}`}
                    id="subvencion"
                    name="subvencion"
                    type="text"
                    defaultValue={
                      simularErrores ? 'S/ 850.00' : 'S/ 1,850.00'
                    }
                    className={`${campo} ${
                      simularErrores ? 'border-red-500' : ''
                    }`}
                  />

                  <p
                    className={`mt-2 text-xs ${
                      simularErrores
                        ? 'text-[#B4322B]'
                        : 'text-[#67757F]'
                    }`}
                  >
                    {simularErrores
                      ? 'Debe estar entre S/ 1,025.00 y S/ 2,500.00'
                      : 'Entre S/ 1,025.00 y S/ 2,500.00'}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="beneficios" className={etiqueta}>
                    BENEFICIOS
                  </label>

                  <textarea
                    id="beneficios"
                    name="beneficios"
                    defaultValue="Movilidad, seguro EPS y horario flexible en época de exámenes."
                    className="h-[92px] w-full rounded-md border border-[#DCE3EA] bg-white p-3 text-sm leading-[22px] text-[#16212B] outline-none focus:border-[#123A5F]"
                  />
                </div>
              </div>
            </section>

            {/* 4. Publicación */}
            <section className={tarjeta}>
              <h2 className={tituloSeccion}>
                4 · PUBLICACIÓN
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="publicacion" className={etiqueta}>
                    FECHA DE PUBLICACIÓN
                  </label>

                  <input
                    id="publicacion"
                    name="publicacion"
                    type="date"
                    defaultValue="2026-09-07"
                    className={campo}
                  />
                </div>

                <div>
                  <label htmlFor="cierre" className={etiqueta}>
                    FECHA DE CIERRE
                  </label>

                  <input
                    key={`cierre-${simularErrores}`}
                    id="cierre"
                    name="cierre"
                    type="date"
                    defaultValue={
                      simularErrores ? '2026-09-01' : '2026-09-30'
                    }
                    className={`${campo} ${
                      simularErrores ? 'border-red-500' : ''
                    }`}
                  />

                  {simularErrores && (
                    <p className="mt-1 text-xs text-[#B4322B]">
                      El cierre debe ser posterior a la fecha de publicación.
                    </p>
                  )}
                </div>

                <div className="max-w-[210px]">
                  <label htmlFor="vacantes" className={etiqueta}>
                    VACANTES
                  </label>

                  <input
                    id="vacantes"
                    name="vacantes"
                    type="number"
                    defaultValue={2}
                    min={1}
                    className={campo}
                  />
                </div>
              </div>

              <label
                htmlFor="avisarCorreo"
                className="mt-4 flex items-start gap-2 text-sm text-[#16212B]"
              >
                <input
                  id="avisarCorreo"
                  name="avisarCorreo"
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#123A5F]"
                />

                Avisarme por correo cada vez que llegue una postulación
              </label>
            </section>

            {/* Aviso informativo */}
            <div className="flex flex-1 items-start gap-3 rounded-md bg-[#E6EEF5] p-5 xl:min-h-[150px]">
              <span className="text-sm font-bold text-[#123A5F]">
                i
              </span>

              <p className="text-sm leading-[22px] text-[#123A5F]">
                Al publicar, la convocatoria queda visible para todos
                los estudiantes cuya carrera coincida. Puedes editarla
                o cerrarla en cualquier momento desde «Mis convocatorias».
              </p>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}