export default function RegistroEmpresa1_4() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Columna Izquierda: Texto y Card Informativa */}
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold text-[#1A2B4C] mb-4">
            Registra tu empresa
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Publica convocatorias de prácticas y recibe postulaciones de estudiantes filtradas por carrera y ciclo.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xs font-bold text-[#1A2B4C] uppercase tracking-wider mb-2">
              Verificación de la cuenta
            </h3>
            <p className="text-sm text-gray-600">
              Validamos el RUC y el correo de contacto antes de habilitar la publicación. El proceso toma hasta 2 días hábiles.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="md:col-span-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <form>
              {/* Bloque A */}
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
                Datos de la Empresa
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Razón Social</label>
                  <input type="text" placeholder="Consultora Andes Perú S.A.C." className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">RUC</label>
                  <input type="text" defaultValue="20548712936" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                  <p className="text-xs text-gray-500 mt-1">11 dígitos.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Sector</label>
                  <select className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C] bg-white">
                    <option>Consultora</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tamaño</label>
                  <select className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C] bg-white">
                    <option>De 51 a 200 colaboradores</option>
                  </select>
                </div>
              </div>

              {/* Bloque B */}
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5 mt-8">
                Contacto y Acceso
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Correo de contacto</label>
                  <input type="email" defaultValue="seleccion@andesperu.com.pe" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Teléfono</label>
                  <input type="text" defaultValue="(01) 415 8820" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
                  <input type="password" placeholder="••••••••" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Confirmar Contraseña</label>
                  <input type="password" placeholder="••••••••" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#1A2B4C]" />
                  <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres, con una mayúscula y un número.</p>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start mt-6 mb-8">
                <input type="checkbox" defaultChecked className="mt-1 mr-3 w-4 h-4 accent-[#1A2B4C]" />
                <label className="text-sm text-gray-700">
                  Declaro que represento a la empresa y acepto los términos del servicio.
                </label>
              </div>

              {/* Botones */}
              <div className="flex justify-end items-center gap-4 border-t border-gray-100 pt-6">
                <button type="button" className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded font-medium hover:bg-gray-50 transition">
                  Cancelar
                </button>
                <button type="button" className="px-8 py-3 bg-[#1A2B4C] text-white rounded font-bold hover:bg-[#121e36] transition w-[60%] sm:w-auto text-center">
                  Registrar mi empresa
                </button>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}