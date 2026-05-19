import CTA from "./componentes/CTA"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Proceso from "./componentes/Proceso"
import Servicios from "./componentes/Servicios"
import Trabajos from "./componentes/Trabajos"

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <Trabajos />
      <Servicios />
      <Proceso />
      <CTA />
      <Footer />
      
    </div>
  )
}

export default App