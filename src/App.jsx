import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import InicioSesion from "./pages/InicioSesion.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FB]">
      <Header />

      <main className="flex flex-1 flex-col justify-center">
        <InicioSesion />
      </main>

      <Footer />
    </div>
  );
}