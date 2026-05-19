import { motion } from "framer-motion"

const trabajos = [
  {
    id: 1,
    titulo: "Casco Futurista",
    material: "PLA",
    tiempo: "12 horas",
    imagen:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    titulo: "Figura Decorativa",
    material: "Resina",
    tiempo: "8 horas",
    imagen:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    titulo: "Pieza Mecánica",
    material: "PETG",
    tiempo: "5 horas",
    imagen:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    titulo: "Miniaturas",
    material: "PLA+",
    tiempo: "6 horas",
    imagen:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
]

function Trabajos() {
  return (
    <section
          id="trabajos"
          className="bg-zinc-900 py-28 text-white"
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
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Trabajos Realizados
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Algunos de los proyectos y piezas personalizadas que realizamos con impresión 3D de alta calidad.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {trabajos.map((trabajo, index) => (
            <motion.div
              key={trabajo.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition duration-500"
            >

              {/* IMAGEN */}
              <div className="overflow-hidden">
                <img
                  src={trabajo.imagen}
                  alt={trabajo.titulo}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* INFO */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {trabajo.titulo}
                </h3>

                <div className="mt-5 flex flex-col gap-2 text-zinc-400">

                  <p>
                    Material:{" "}
                    <span className="text-white">
                      {trabajo.material}
                    </span>
                  </p>

                  <p>
                    Tiempo:{" "}
                    <span className="text-white">
                      {trabajo.tiempo}
                    </span>
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Trabajos