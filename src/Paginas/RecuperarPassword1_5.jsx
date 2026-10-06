import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecuperarPassword1_5() {
  // Estado para controlar en qué paso del flujo estamos (1, 2 o 3)
  const [paso, setPaso] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-md bg-white border border-[#DCE3EA] rounded-lg p-8 shadow-sm">
        
        {/* PASO 1: Ingreso de correo */}
        {paso === 1 && (
          <>
            <h2 className="text-2xl font-bold text-[#123A5F] mb-3">
              ¿Olvidaste tu contraseña?
            </h2>
            <p className="text-sm text-[#67757F] mb-6">
              Ingresa el correo electrónico asociado a tu cuenta y te enviaremos un enlace para restablecerla.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); setPaso(2); }}>
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  placeholder="ejemplo@ulima.edu.pe" 
                  required
                  className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#123A5F] text-white py-2.5 rounded font-bold hover:bg-[#0C2A46] transition"
              >
                Enviar enlace de recuperación
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm font-semibold text-[#123A5F] hover:underline">
                Volver al inicio de sesión
              </Link>
            </div>
          </>
        )}

        {/* PASO 2: Mensaje de confirmación */}
        {paso === 2 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F7F9FB] border border-[#DCE3EA] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h2 className="text-2xl font-bold text-[#123A5F] mb-3">
              Revisa tu correo
            </h2>
            <p className="text-sm text-[#67757F] mb-6">
              Hemos enviado un enlace de recuperación a tu correo electrónico. Sigue las instrucciones para continuar.
            </p>
            
            {/* Botón "trampa" solo para la demostración del Frontend */}
            <button 
              onClick={() => setPaso(3)} 
              className="w-full bg-[#F7F9FB] border border-[#DCE3EA] text-[#123A5F] py-2.5 rounded font-bold hover:bg-gray-100 transition"
            >
              [Simular clic en el enlace del correo]
            </button>
          </div>
        )}

        {/* PASO 3: Crear nueva contraseña */}
        {paso === 3 && (
          <>
            <h2 className="text-2xl font-bold text-[#123A5F] mb-3">
              Crea una nueva contraseña
            </h2>
            <p className="text-sm text-[#67757F] mb-6">
              Tu nueva contraseña debe tener al menos 8 caracteres.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("¡Contraseña actualizada con éxito!"); }}>
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">
                  Nueva contraseña
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#67757F] uppercase mb-1">
                  Confirmar contraseña
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  className="w-full p-2.5 border border-[#DCE3EA] rounded focus:outline-none focus:border-[#123A5F]"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#123A5F] text-white py-2.5 rounded font-bold hover:bg-[#0C2A46] transition"
              >
                Restablecer contraseña
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}