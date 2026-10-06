export default function CambiarPassword1_6() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#123A5F] mb-2">Mi Perfil</h1>
      <p className="text-[#67757F] mb-8">Administra tu seguridad y actualiza tus credenciales de acceso.</p>

      <div className="bg-white border border-[#DCE3EA] rounded-lg p-8 shadow-sm">
        <h2 className="text-lg font-bold text-[#123A5F] border-b border-[#DCE3EA] pb-4 mb-6">
          Cambiar Contraseña
        </h2>

        {/* Formulario de actualización */}
        <form onSubmit={(e) => { e.preventDefault(); alert("¡Contraseña actualizada exitosamente!"); }}>
          
          <div className="mb-5 max-w-md">
            <label className="block text-xs font-bold text-[#67757F] uppercase tracking-wide mb-1">
              Contraseña actual
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
            />
          </div>

          <div className="mb-5 max-w-md">
            <label className="block text-xs font-bold text-[#67757F] uppercase tracking-wide mb-1">
              Nueva contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
            />
            <p className="text-xs text-[#67757F] mt-1">
              Mínimo 8 caracteres, con una mayúscula y un número.
            </p>
          </div>

          <div className="mb-8 max-w-md">
            <label className="block text-xs font-bold text-[#67757F] uppercase tracking-wide mb-1">
              Confirmar nueva contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
            />
          </div>

          {/* Botones de acción */}
          <div className="flex gap-4">
            <button 
              type="button" 
              className="px-6 py-2.5 border border-[#DCE3EA] bg-white text-[#67757F] rounded font-bold hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-6 py-2.5 bg-[#123A5F] text-white rounded font-bold hover:bg-[#0C2A46] transition"
            >
              Guardar cambios
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}