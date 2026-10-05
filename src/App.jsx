import Footer from './componentes/Footer'
import Header from './Componentes/Header'
import LandingPublica from "./pages/LandingPublica.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FB]">
      <Header />

      <main className="flex-1">
        <LandingPublica />
      </main>

      <Footer />
    </div>
  );
}