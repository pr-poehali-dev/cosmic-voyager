import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Дом сдали ровно через 87 дней после подписания договора. Цена не изменилась ни на рубль — как договорились, так и вышло.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Анна Смирнова",
    role: "Московская область, 120 м²",
  },
  {
    text: "Сравнивал пять подрядчиков. КаркасДом дали самую детальную смету и единственные не изменили её в процессе. Рекомендую.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Максим Волков",
    role: "Ленинградская область, 95 м²",
  },
  {
    text: "Первая зима в доме — отопление обошлось в 2 раза дешевле, чем у соседей с кирпичным домом. Утепление на высшем уровне.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Козлова",
    role: "Тверская область, 140 м²",
  },
  {
    text: "Приезжал на объект несколько раз — каждый раз прораб объяснял все этапы. Полная прозрачность на протяжении всей стройки.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Петров",
    role: "Калужская область, 110 м²",
  },
  {
    text: "Дом уже стоит 4 года, никаких усадок, трещин или проблем с утеплением. Гарантия подтверждается делом.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Ирина Захарова",
    role: "Ярославская область, 130 м²",
  },
  {
    text: "Бригада работала даже в -15°C. Сроки соблюдены, качество отличное. Уже советую всем знакомым.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Борисов",
    role: "Нижегородская область, 85 м²",
  },
  {
    text: "Выбрали проект из каталога, немного изменили планировку — учли все пожелания без доплат. Очень гибкий подход.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Морозова",
    role: "Воронежская область, 105 м²",
  },
  {
    text: "Переехали через 3 месяца после начала стройки. Для семьи с детьми это было принципиально важно. Спасибо команде!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Михаил Соколов",
    role: "Тульская область, 125 м²",
  },
  {
    text: "Строить зимой казалось авантюрой. Но всё прошло отлично — весной уже жили. Каркасная технология позволяет строить круглый год.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Федорова",
    role: "Рязанская область, 98 м²",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Rockwool", "Knauf", "ТЕХНОНИКОЛЬ", "Kronospan", "Isover", "LP SmartSide", "Rehau", "James Hardie"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят наши клиенты
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Реальные отзывы людей, которые уже живут в своём каркасном доме.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Строим из материалов ведущих производителей</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
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