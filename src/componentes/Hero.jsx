import { motion } from "framer-motion"

function Hero() {
  return (
    <section
            id="inicio"
            className="min-h-screen bg-zinc-950 text-white flex items-center pt-28 overflow-hidden"
>
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-4 py-2 rounded-full text-sm">
              Impresión 3D Profesional
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
              Convertimos tus ideas en{" "}
              <span className="text-cyan-400">
                piezas reales
              </span>
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
              Diseñamos e imprimimos piezas 3D personalizadas para
              decoración, prototipos, emprendimientos y proyectos únicos.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="#trabajos"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition duration-300 shadow-lg shadow-cyan-400/30 text-center"
                >
                Ver Trabajos
                </a>

                <a
                href="https://wa.me/5491176322375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-5 py-2 rounded-xl transition duration-300 shadow-lg shadow-cyan-400/30"
                >
                Cotizar
                </a>

            </div>
          </motion.div>

          {/* IMAGEN / VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* GLOW */}
            <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            {/* CARD */}
            <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-6 w-full max-w-md shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop"
                alt="Impresión 3D"
                className="rounded-2xl object-cover w-full h-[400px]"
              />

              <div className="mt-6">
                <h2 className="text-2xl font-bold">
                  Impresión de Alta Precisión
                </h2>

                <p className="text-zinc-400 mt-3">
                  Tecnología moderna para piezas resistentes, detalladas y personalizadas.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero