import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InicioSesionAdmin() {
  const navigate = useNavigate();

  // Estados del formulario pre-cargados según especificación
  const [usuario, setUsuario] = useState('jromero@ulima.edu.pe');
  const [password, setPassword] = useState('••••••••••••••••');
  const [codigo2FA, setCodigo2FA] = useState('418902');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirección al tablero de métricas del panel de administración
    navigate('/admin/metricas');
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <div className="max-w-[520px] w-full mx-auto px-6 py-12 md:py-16">
        
        {/* BARRA SUPERIOR MINIMALISTA */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#F3F4F6]">
          <div className="flex items-center gap-2.5">
            <span className="text-base font-bold text-[#1A2B4C]">PrácticaLima</span>
            <span className="text-gray-300">|</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
              PANEL DE ADMINISTRACIÓN
            </span>
          </div>

          <Link
            to="/"
            className="text-xs font-semibold text-[#1A2B4C] hover:underline flex items-center gap-1"
          >
            Ir al sitio público →
          </Link>
        </div>

        {/* BADGE ACCESO RESTRINGIDO */}
        <div className="flex justify-center mb-4">
          <span className="px-3.5 py-1 bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold uppercase tracking-wider rounded-full border border-amber-200">
            ACCESO RESTRINGIDO
          </span>
        </div>

        {/* TÍTULO H1 Y DESCRIPCIÓN */}
        <h1 className="text-2xl md:text-[30px] font-bold text-[#1A2B4C] text-center leading-tight mb-3">
          Panel de administración de la bolsa de prácticas
        </h1>
        <p className="text-xs md:text-sm text-[#6B7280] text-center leading-relaxed max-w-[460px] mx-auto mb-6">
          Solo el equipo autorizado de la Universidad de Lima puede gestionar cuentas y consultar las métricas de la plataforma.
        </p>

        {/* BANNER DE ADVERTENCIA Y AUDITORÍA */}
        <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3.5 mb-8 flex items-center gap-3 text-xs text-[#92400E]">
          <span className="w-5 h-5 rounded-full bg-[#F59E0B] text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
            !
          </span>
          <p className="leading-tight text-center sm:text-left">
            Todos los accesos e intervenciones quedan registrados con usuario, fecha y dirección IP.
          </p>
        </div>

        {/* BLOQUE FORMULARIO INGRESO */}
        <div className="space-y-1 mb-6 text-center">
          <h2 className="text-lg font-bold text-[#1A2B4C]">
            Ingreso de administrador
          </h2>
          <p className="text-xs text-[#6B7280]">
            Usa tu cuenta institucional del equipo de gestión.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* USUARIO INSTITUCIONAL */}
          <div>
            <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5">
              USUARIO INSTITUCIONAL
            </label>
            <input
              type="email"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              className="w-full h-11 px-3.5 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
            />
          </div>

          {/* CONTRASEÑA */}
          <div>
            <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5">
              CONTRASEÑA
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-11 px-3.5 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] focus:outline-none focus:border-[#1A2B4C] bg-white"
            />
          </div>

          {/* CÓDIGO DE VERIFICACIÓN 2FA */}
          <div>
            <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1.5">
              CÓDIGO DE VERIFICACIÓN
            </label>
            <input
              type="text"
              value={codigo2FA}
              onChange={(e) => setCodigo2FA(e.target.value)}
              maxLength={6}
              required
              className="w-full h-11 px-3.5 border border-[#E5E7EB] rounded-md text-xs text-[#1A2B4C] font-bold tracking-[4px] focus:outline-none focus:border-[#1A2B4C] bg-white"
            />
            <p className="text-[11px] text-[#6B7280] mt-1.5">
              Código de seis dígitos de tu aplicación de autenticación.
            </p>
          </div>

          {/* BOTÓN DE ACCESO */}
          <button
            type="submit"
            className="w-full h-12 bg-[#1A2B4C] text-white text-xs font-bold rounded-md hover:bg-[#121E36] transition shadow-sm mt-2"
          >
            Ingresar al panel
          </button>
        </form>

        {/* NOTA AL PIE DE SOPORTE */}
        <p className="text-xs text-[#6B7280] text-center mt-6">
          Si perdiste el acceso, escribe a{' '}
          <a href="mailto:soporte-ti@ulima.edu.pe" className="text-[#1A2B4C] font-semibold hover:underline">
            soporte-ti@ulima.edu.pe
          </a>
        </p>

      </div>
    </div>
  );
}