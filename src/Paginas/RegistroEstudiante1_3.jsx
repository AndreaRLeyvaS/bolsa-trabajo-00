import { Link } from 'react-router-dom';

export default function RegistroEstudiante1_3() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#123A5F] mb-4">
          Crea tu perfil de estudiante
        </h1>
        <p className="text-[#67757F]">
          Únete a PrácticaLima usando tu correo institucional y conecta con las mejores empresas.
        </p>
      </div>

      <div className="bg-white border border-[#DCE3EA] rounded-lg p-8 shadow-sm">
        <form onSubmit={(e) => { e.preventDefault(); alert("¡Cuenta de estudiante creada!"); }}>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Nombres</label>
              <input type="text" placeholder="Ej. Juan Pérez" required className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Apellidos</label>
              <input type="text" placeholder="Ej. García" required className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Correo Institucional</label>
            <input type="email" placeholder="código@aloe.ulima.edu.pe" required className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]" />
            <p className="text-xs text-[#67757F] mt-1">Solo se admiten correos con dominio @aloe.ulima.edu.pe</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Carrera</label>
              <select className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F] bg-white">
                <option value="">Selecciona tu carrera</option>
                <option value="sistemas">Ingeniería de Sistemas</option>
                <option value="industrial">Ingeniería Industrial</option>
                <option value="comunicaciones">Comunicaciones</option>
                <option value="administracion">Administración</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Ciclo Actual</label>
              <select className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F] bg-white">
                <option value="">Selecciona tu ciclo</option>
                <option value="6">Sexto ciclo</option>
                <option value="7">Séptimo ciclo</option>
                <option value="8">Octavo ciclo</option>
                <option value="9">Noveno ciclo</option>
                <option value="10">Décimo ciclo</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Contraseña</label>
              <input type="password" placeholder="••••••••" required className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">Confirmar Contraseña</label>
              <input type="password" placeholder="••••••••" required className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]" />
            </div>
          </div>

          <div className="flex items-start mb-8">
            <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 accent-[#123A5F]" />
            <label className="text-sm text-[#67757F]">
              Acepto los términos y condiciones de la Universidad de Lima para el uso de la bolsa de trabajo.
            </label>
          </div>

          <div className="flex justify-end gap-4 border-t border-[#DCE3EA] pt-6">
            <Link to="/" className="px-6 py-3 border border-[#DCE3EA] bg-white text-[#67757F] rounded font-bold hover:bg-gray-50 transition">
              Cancelar
            </Link>
            <button type="submit" className="px-8 py-3 bg-[#123A5F] text-white rounded font-bold hover:bg-[#0C2A46] transition">
              Crear mi cuenta
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}