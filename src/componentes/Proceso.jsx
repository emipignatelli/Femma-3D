import { motion } from "framer-motion"
import {
  MessageCircleMore,
  BadgeDollarSign,
  Printer,
  Truck,
} from "lucide-react"

const pasos = [
  {
    id: 1,
    icono: <MessageCircleMore size={40} />,
    titulo: "Nos Contás Tu Idea",
    descripcion:
      "Enviános una imagen, boceto, referencia o archivo 3D de lo que querés crear.",
  },

  {
    id: 2,
    icono: <BadgeDollarSign size={40} />,
    titulo: "Te Pasamos Presupuesto",
    descripcion:
      "Analizamos el modelo, materiales y tiempos para enviarte una cotización clara.",
  },

  {
    id: 3,
    icono: <Printer size={40} />,
    titulo: "Imprimimos Tu Proyecto",
    descripcion:
      "Utilizamos impresión 3D de alta precisión para lograr terminaciones profesionales.",
  },

  {
    id: 4,
    icono: <Truck size={40} />,
    titulo: "Retirás o Enviamos",
    descripcion:
      "Coordinamos entrega o envío para que recibas tu pieza lista para usar.",
  },
]

function Proceso() {
  return (
    <section className="bg-zinc-900 py-28 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Proceso
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            ¿Cómo Trabajamos?
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Un proceso simple, rápido y pensado para convertir tus ideas en piezas reales.
          </p>

        </motion.div>

        {/* PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 relative">

          {pasos.map((paso, index) => (
            <motion.div
              key={paso.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-zinc-950 border border-white/10 hover:border-cyan-400/40 rounded-3xl p-8 transition duration-500 hover:-translate-y-2"
            >

              {/* NUMERO */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-cyan-400 text-black font-black flex items-center justify-center shadow-lg shadow-cyan-400/40">
                {paso.id}
              </div>

              {/* ICONO */}
              <div className="w-20 h-20 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mt-6">
                {paso.icono}
              </div>

              {/* INFO */}
              <h3 className="text-2xl font-bold mt-8">
                {paso.titulo}
              </h3>

              <p className="text-zinc-400 mt-5 leading-relaxed">
                {paso.descripcion}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Proceso