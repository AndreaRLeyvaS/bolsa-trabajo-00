import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MisConvocatorias() {
  const [modalCierre, setModalCierre] = useState(false);
  const [verFiltrosActivos, setVerFiltrosActivos] = useState(false);
  const [sinConvocatorias, setSinConvocatorias] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [estadoSeleccionado, setEstadoSeleccionado] = useState('Todas');
  const [seleccionada, setSeleccionada] = useState(null);

  const convocatorias = [
    {
      id: 1,
      puesto: 'Practicante de Soporte TI',
      carreras: 'Ing. de Sistemas',
      publicacion: '02/08/2026',
      cierre: '18/09/2026',
      postulantes: 31,
      estado: 'Vigente'
    },
    {
      id: 2,
      puesto: 'Practicante de Gestión Humana',
      carreras: 'Psicología, Administración',
      publicacion: '05/08/2026',
      cierre: '20/09/2026',
      postulantes: 14,
      estado: 'Vigente'
    },
    {
      id: 3,
      puesto: 'Practicante de Mejora de Procesos',
      carreras: 'Ing. Industrial',
      publicacion: '12/08/2026',
      cierre: '26/09/2026',
      postulantes: 22,
      estado: 'Vigente'
    },
    {
      id: 4,
      puesto: 'Practicante de Desarrollo de Software',
      carreras: 'Ing. de Sistemas',
      publicacion: '18/08/2026',
      cierre: '30/09/2026',
      postulantes: 23,
      estado: 'Vigente'
    },
    {
      id: 5,
      puesto: 'Practicante de Finanzas',
      carreras: 'Contabilidad, Administración',
      publicacion: '02/07/2026',
      cierre: '31/07/2026',
      postulantes: 18,
      estado: 'Cerrada'
    },
    {
      id: 6,
      puesto: 'Practicante de Comercio Exterior',
      carreras: 'Administración',
      publicacion: '15/06/2026',
      cierre: '14/07/2026',
      postulantes: 9,
      estado: 'Cerrada'
    },
    {
      id: 7,
      puesto: 'Practicante de Data Analytics',
      carreras: 'Ing. de Sistemas, Ing. Industrial',
      publicacion: '01/06/2026',
      cierre: '30/06/2026',
      postulantes: 27,
      estado: 'Cerrada'
    },
    {
      id: 8,
      puesto: 'Practicante de Marketing Digital',
      carreras: 'Marketing, Comunicación',
      publicacion: '—',
      cierre: '—',
      postulantes: 0,
      estado: 'Borrador'
    },
    {
      id: 9,
      puesto: 'Practicante de Arquitectura de Datos',
      carreras: 'Ing. de Sistemas',
      publicacion: '—',
      cierre: '—',
      postulantes: 0,
      estado: 'Borrador'
    }
  ];

  const filtros = [
    { nombre: 'Todas', cantidad: 9 },
    { nombre: 'Vigente', etiqueta: 'Vigentes', cantidad: 4 },
    { nombre: 'Cerrada', etiqueta: 'Cerradas', cantidad: 3 },
    { nombre: 'Borrador', etiqueta: 'Borradores', cantidad: 2 }
  ];

  const convocatoriasVisibles = convocatorias.filter((item) => {
    const coincideEstado =
      estadoSeleccionado === 'Todas' ||
      item.estado === estadoSeleccionado;

    const texto = busqueda.trim().toLowerCase();

    const coincideBusqueda =
      item.puesto.toLowerCase().includes(texto) ||
      item.carreras.toLowerCase().includes(texto);

    return coincideEstado && coincideBusqueda;
  });

  function abrirModal(item) {
    setSeleccionada(item);
    setModalCierre(true);
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
              className="flex items-center gap-3 rounded bg-[#E6EEF5] px-3 py-2 text-sm font-semibold text-[#123A5F]"
            >
              <span>▪</span>
              Mis convocatorias
            </Link>

            <Link
              to="/empresa/nueva-convocatoria"
              className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-[#E6EEF5]"
            >
              <span className="text-[#BDCEDD]">▪</span>
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

      {/* Contenido */}
      <div className="min-w-0 flex-1 p-5 lg:p-8">

        {/* Título y botón */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs text-[#67757F]">
              Convocatorias ·
              <span className="ml-1 font-semibold text-[#16212B]">
                Mis convocatorias
              </span>
            </p>

            <h1 className="text-[28px] font-semibold leading-8 text-[#16212B]">
              Mis convocatorias
            </h1>
          </div>

          <Link
            to="/empresa/nueva-convocatoria"
            className="rounded-md bg-[#123A5F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0C2A46]"
          >
            + Nueva convocatoria
          </Link>
        </div>

        {/* Buscador y filtros */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <input
            type="search"
            aria-label="Buscar por puesto o carrera"
            placeholder="Buscar por puesto o carrera"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            className="h-11 w-full rounded-md border border-[#DCE3EA] bg-white px-3 text-sm text-[#16212B] outline-none placeholder:text-[#67757F] focus:border-[#123A5F] sm:w-[340px]"
          />

          <div className="flex flex-wrap gap-2">
            {filtros.map((filtro) => (
              <button
                key={filtro.nombre}
                type="button"
                onClick={() => setEstadoSeleccionado(filtro.nombre)}
                className={`rounded border px-3 py-2 text-sm ${
                  estadoSeleccionado === filtro.nombre
                    ? 'border-[#123A5F] bg-[#123A5F] font-semibold text-white'
                    : 'border-[#DCE3EA] bg-white text-[#16212B] hover:bg-[#E6EEF5]'
                }`}
              >
                {filtro.etiqueta || filtro.nombre}
                {' · '}
                {filtro.cantidad}
              </button>
            ))}
          </div>

          <p className="ml-auto text-xs text-[#67757F]">
            {sinConvocatorias ? 0 : convocatoriasVisibles.length}
            {' convocatorias · ordenadas por cierre'}
          </p>
        </div>

        {/* Controles de simulación que ya tenía tu código */}
        <div className="mb-4 flex flex-wrap gap-4 rounded border border-[#DCE3EA] bg-[#E6EEF5] p-3 text-xs text-[#123A5F]">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={verFiltrosActivos}
              onChange={() =>
                setVerFiltrosActivos(!verFiltrosActivos)
              }
              className="accent-[#123A5F]"
            />
            Simular Filtros Activos
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={sinConvocatorias}
              onChange={() =>
                setSinConvocatorias(!sinConvocatorias)
              }
              className="accent-[#123A5F]"
            />
            Simular Estado Vacío
          </label>
        </div>

        {/* Simulación de filtros activos */}
        {verFiltrosActivos && (
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-md border border-[#DCE3EA] bg-white p-3">
            <span className="text-xs font-semibold text-[#67757F]">
              FILTROS:
            </span>

            <span className="flex items-center gap-2 rounded border border-[#BDCEDD] bg-[#E6EEF5] px-3 py-1 text-xs text-[#123A5F]">
              Vigentes

              <button
                type="button"
                aria-label="Quitar filtro de vigentes"
                onClick={() => setVerFiltrosActivos(false)}
              >
                ×
              </button>
            </span>

            <span className="flex items-center gap-2 rounded border border-[#BDCEDD] bg-[#E6EEF5] px-3 py-1 text-xs text-[#123A5F]">
              Ingeniería de Sistemas

              <button
                type="button"
                aria-label="Quitar filtro de carrera"
                onClick={() => setVerFiltrosActivos(false)}
              >
                ×
              </button>
            </span>

            <button
              type="button"
              onClick={() => setVerFiltrosActivos(false)}
              className="text-xs font-semibold text-[#123A5F] hover:underline"
            >
              Limpiar todo
            </button>
          </div>
        )}

        {sinConvocatorias ? (

          /* Estado vacío */
          <section className="rounded-md border border-[#DCE3EA] bg-white px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#E6EEF5] text-2xl text-[#123A5F]">
              ▤
            </div>

            <h2 className="mb-2 text-xl font-semibold text-[#123A5F]">
              Aún no publicas convocatorias
            </h2>

            <p className="mx-auto mb-6 max-w-md text-sm leading-6 text-[#67757F]">
              Publica tu primera convocatoria y aparecerá en el
              catálogo de los estudiantes cuya carrera coincida
              con el perfil buscado.
            </p>

            <Link
              to="/empresa/nueva-convocatoria"
              className="inline-block rounded-md bg-[#123A5F] px-5 py-3 text-sm font-semibold text-white"
            >
              Crear mi primera convocatoria
            </Link>
          </section>

        ) : (

          /* Tabla */
          <div className="min-h-[680px] overflow-x-auto rounded-md border border-[#DCE3EA] bg-white">
            <table className="w-full min-w-[1100px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#DCE3EA] bg-[#F7F9FB] text-[11px] font-semibold tracking-widest text-[#67757F]">
                  <th scope="col" className="px-5 py-4">
                    PUESTO
                  </th>
                  <th scope="col" className="px-4 py-4">
                    CARRERAS
                  </th>
                  <th scope="col" className="px-4 py-4">
                    PUBLICACIÓN
                  </th>
                  <th scope="col" className="px-4 py-4">
                    CIERRE
                  </th>
                  <th scope="col" className="px-4 py-4 text-right">
                    POSTULANTES
                  </th>
                  <th scope="col" className="px-4 py-4">
                    ESTADO
                  </th>
                  <th scope="col" className="px-5 py-4 text-right">
                    ACCIONES
                  </th>
                </tr>
              </thead>

              <tbody>
                {convocatoriasVisibles.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#DCE3EA] text-sm hover:bg-[#F7F9FB]"
                  >
                    <td className="px-5 py-4 font-medium text-[#16212B]">
                      {item.puesto}
                    </td>

                    <td className="px-4 py-4 text-[#67757F]">
                      {item.carreras}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-[#16212B]">
                      {item.publicacion}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-[#16212B]">
                      {item.cierre}
                    </td>

                    <td className="px-4 py-4 text-right font-semibold text-[#16212B]">
                      {item.postulantes}
                    </td>

                    <td className="px-4 py-4">
                      {item.estado === 'Vigente' && (
                        <span className="rounded bg-[#E4F2EB] px-2 py-1 text-xs font-semibold text-[#1E7F4D]">
                          Vigente
                        </span>
                      )}

                      {item.estado === 'Cerrada' && (
                        <span className="rounded bg-[#EDF1F4] px-2 py-1 text-xs font-semibold text-[#67757F]">
                          Cerrada
                        </span>
                      )}

                      {item.estado === 'Borrador' && (
                        <span className="rounded border border-dashed border-[#BDCEDD] bg-[#EDF1F4] px-2 py-1 text-xs font-semibold text-[#67757F]">
                          Borrador
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        aria-label={`Acciones de ${item.puesto}`}
                        onClick={() => abrirModal(item)}
                        className="rounded px-2 text-xl leading-5 text-[#67757F] hover:bg-[#E6EEF5]"
                      >
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}

                {convocatoriasVisibles.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-[#67757F]"
                    >
                      No se encontraron convocatorias.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Paginación */}
        {!sinConvocatorias && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#67757F]">
              Mostrando {convocatoriasVisibles.length === 0 ? 0 : 1}
              –{convocatoriasVisibles.length} de{' '}
              {convocatoriasVisibles.length} convocatorias
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                disabled
                className="rounded border border-[#DCE3EA] bg-white px-3 py-2 text-sm text-[#94A3B8]"
              >
                Anterior
              </button>

              <button
                type="button"
                aria-current="page"
                className="rounded bg-[#123A5F] px-3 py-2 text-sm font-semibold text-white"
              >
                1
              </button>

              <button
                type="button"
                disabled
                className="rounded border border-[#DCE3EA] bg-white px-3 py-2 text-sm text-[#94A3B8]"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Modal de demostración */}
        {modalCierre && seleccionada && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-cierre"
              className="w-full max-w-md rounded-md border border-[#DCE3EA] bg-white p-6 shadow-lg"
            >
              <h2
                id="titulo-cierre"
                className="mb-3 text-xl font-semibold text-[#123A5F]"
              >
                ¿Cerrar esta convocatoria?
              </h2>

              <p className="mb-4 text-sm leading-6 text-[#16212B]">
                «{seleccionada.puesto}» tiene{' '}
                {seleccionada.postulantes} postulantes. Al cerrarla,
                los estudiantes ya no podrán postular y la
                convocatoria saldrá del catálogo.
              </p>

              <div className="mb-6 rounded border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                <strong>Esta acción no se puede deshacer.</strong>{' '}
                Las postulaciones recibidas se conservan en tu bandeja.
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalCierre(false)}
                  className="rounded border border-[#DCE3EA] bg-white px-4 py-2 text-sm font-semibold text-[#16212B]"
                >
                  Mantener abierta
                </button>

                <button
                  type="button"
                  onClick={() => setModalCierre(false)}
                  className="rounded bg-[#B4322B] px-4 py-2 text-sm font-semibold text-white"
                >
                  Cerrar convocatoria
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}