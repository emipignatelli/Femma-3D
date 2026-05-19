import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function CTA() {
  return (
    <section className="bg-zinc-950 py-28 text-white relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-white/10 rounded-[40px] p-10 md:p-20 text-center shadow-2xl"
        >

          {/* TEXTO */}
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Cotización
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
            ¿Tenés una idea?
            <br />
            <span className="text-cyan-400">
              Nosotros la imprimimos.
            </span>
          </h2>

          <p className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Contactanos y empezá tu proyecto de impresión 3D con piezas personalizadas, prototipos y diseños únicos.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            <a
              href="https://wa.me/5491176322375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-5 py-2 rounded-xl transition duration-300 shadow-lg shadow-cyan-400/30"
            >
              Pedir presupuesto
            </a>

            

          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CTA