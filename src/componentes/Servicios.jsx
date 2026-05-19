import { Boxes, Cpu, Wrench, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const servicios = [
  {
    id: 1,
    icono: <Boxes size={42} />,
    titulo: "Impresión Personalizada",
    descripcion:
      "Creamos piezas únicas adaptadas a tus necesidades, ideas o proyectos.",
  },

  {
    id: 2,
    icono: <Cpu size={42} />,
    titulo: "Prototipos",
    descripcion:
      "Desarrollamos prototipos funcionales para pruebas, productos y emprendimientos.",
  },

  {
    id: 3,
    icono: <Wrench size={42} />,
    titulo: "Piezas Funcionales",
    descripcion:
      "Fabricamos repuestos y piezas resistentes para diferentes usos y soluciones.",
  },

  {
    id: 4,
    icono: <Rocket size={42} />,
    titulo: "Diseños Creativos",
    descripcion:
      "Figuras, decoración, gadgets y modelos 3D con terminaciones premium.",
  },
]

function Servicios() {
  return (
    <section
          id="servicios"
          className="bg-zinc-950 py-28 text-white"
>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Servicios
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            ¿Qué Hacemos?
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Soluciones de impresión 3D para proyectos personales, emprendimientos y piezas profesionales.
          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border border-white/10 hover:border-cyan-400/40 rounded-3xl p-8 transition duration-500 hover:-translate-y-2"
            >

              {/* ICONO */}
              <div className="w-20 h-20 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-500">
                {servicio.icono}
              </div>

              {/* INFO */}
              <h3 className="text-2xl font-bold mt-8">
                {servicio.titulo}
              </h3>

              <p className="text-zinc-400 mt-5 leading-relaxed">
                {servicio.descripcion}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Servicios