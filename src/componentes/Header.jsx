import { useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
              FEMMA<span className="text-cyan-400">3D</span>
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-white hover:text-cyan-400 transition duration-300"
            >
              Inicio
            </a>

            <a
              href="#trabajos"
              className="text-white hover:text-cyan-400 transition duration-300"
            >
              Trabajos
            </a>

            <a
              href="#servicios"
              className="text-white hover:text-cyan-400 transition duration-300"
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="text-white hover:text-cyan-400 transition duration-300"
            >
              Contacto
            </a>

            {/* BOTÓN */}
            <a
              href="https://wa.me/5491176322375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-5 py-2 rounded-xl transition duration-300 shadow-lg shadow-cyan-400/30"
            >
              Cotizar
            </a>
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col items-center gap-6 py-8">

            <a
              href="#"
              className="text-white text-lg hover:text-cyan-400 transition"
            >
              Inicio
            </a>

            <a
              href="#"
              className="text-white text-lg hover:text-cyan-400 transition"
            >
              Trabajos
            </a>

            <a
              href="#"
              className="text-white text-lg hover:text-cyan-400 transition"
            >
              Servicios
            </a>

            <a
              href="#"
              className="text-white text-lg hover:text-cyan-400 transition"
            >
              Contacto
            </a>

            <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-6 py-3 rounded-xl transition duration-300">
              Cotizar
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header