import { motion } from "framer-motion"
import { ArrowRight, Clock, ShieldCheck, Thermometer, FileText, Hammer, Star } from "lucide-react"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Clock",
    title: "Строим за 90 дней",
    description: "Каркасная технология позволяет завершить строительство в 3 раза быстрее, чем кирпич или брус. Переезжайте уже в этом сезоне.",
  },
  {
    icon: "FileText",
    title: "Фиксированная цена",
    description: "Цена прописана в договоре и не меняется. Никаких доплат в процессе, никаких неприятных сюрпризов при сдаче.",
  },
  {
    icon: "Thermometer",
    title: "Тепло зимой, прохладно летом",
    description: "Утеплитель 200 мм и грамотный пирог стены обеспечивают класс энергоэффективности A+. Отопление обходится в 2 раза дешевле.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 10 лет",
    description: "Даём письменную гарантию на конструктив и кровлю. Все работы выполняют собственные бригады — никаких субподрядчиков.",
  },
  {
    icon: "Hammer",
    title: "Только проверенные материалы",
    description: "Работаем с Rockwool, Knauf, ТЕХНОНИКОЛЬ и другими ведущими производителями. Все материалы имеют сертификаты качества.",
  },
  {
    icon: "Star",
    title: "Строим круглый год",
    description: "Каркасная технология не зависит от сезона. Начинаем в любое время года — даже при -20°C качество работ не страдает.",
  },
]

const logos = ["Rockwool", "Knauf", "ТЕХНОНИКОЛЬ", "Kronospan", "Isover", "LP SmartSide", "Rehau", "James Hardie"]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Преимущества</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Почему выбирают каркасный дом
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Современная технология строительства, которая сочетает скорость, тепло и долговечность.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} className="text-zinc-700" />
              </div>
              <h3 className="font-heading font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="pt-12 border-t border-zinc-200">
          <p className="text-center text-sm text-zinc-400 mb-8">Строим из материалов ведущих производителей</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-base font-semibold text-zinc-300 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
