import {
  
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react"

function Footer() {
  return (
    <footer
          id="contacto"
          className="bg-black border-t border-white/10 text-white"
>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-black">
              3D<span className="text-cyan-400">Print</span>
            </h2>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              Impresión 3D personalizada para proyectos, decoración, prototipos y piezas funcionales.
            </p>
          </div>

          {/* NAVEGACION */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Navegación
            </h3>

            <ul className="flex flex-col gap-3 text-zinc-400">

            <li>
            <a
            href="#inicio"
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
    >
            Inicio
            </a>
            </li>

            <li>
            <a
            href="#trabajos"
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
            >
            Trabajos
            </a>
            </li>

            <li>
            <a
            href="#servicios"
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
            >
            Servicios
            </a>
            </li>

            <li>
            <a
            href="#contacto"
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
            >
            Contacto
            </a>
            </li>

            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contacto
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-cyan-400" />
                <span>+54 11 1234-5678</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-400" />
                <span>contacto@3dprint.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-cyan-400" />
                <span>Buenos Aires, Argentina</span>
              </div>

            </div>
          </div>

          {/* REDES */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Redes Sociales
            </h3>

            <div className="flex items-center gap-5">

              

            <a
             href="https://api.whatsapp.com/send?phone=5491176322375"
             target="_blank"
             rel="noopener noreferrer"
             className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition duration-300 flex items-center justify-center"
            >
            <MessageCircle size={24} />
            </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center text-zinc-500">
          © 2026 3DPrint. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}

export default Footer