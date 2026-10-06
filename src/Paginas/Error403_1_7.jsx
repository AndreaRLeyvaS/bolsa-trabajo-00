import { Link } from 'react-router-dom';

export default function Error403_1_7() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="text-9xl font-bold text-[#123A5F] mb-4">403</h1>
      <h2 className="text-3xl font-bold text-[#67757F] mb-4">Acceso Denegado</h2>
      <p className="text-[#67757F] mb-8 max-w-md">
        No tienes los permisos necesarios para ver esta página. Por favor, inicia sesión con la cuenta adecuada.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#123A5F] text-white rounded font-bold hover:bg-[#0C2A46] transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}