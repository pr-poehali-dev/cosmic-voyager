import { Check } from "lucide-react"

const plans = [
  {
    name: "Дача",
    description: "Компактный дом для сезонного или круглогодичного отдыха",
    price: "от 1,8 млн ₽",
    period: "",
    features: ["Площадь от 60 до 80 м²", "Срок строительства 60 дней", "Утеплитель 150 мм", "Готовый проект из каталога", "Гарантия 10 лет"],
    cta: "Рассчитать стоимость",
    highlighted: false,
  },
  {
    name: "Семейный",
    description: "Полноценный жилой дом для постоянного проживания",
    price: "от 3,2 млн ₽",
    period: "",
    features: [
      "Площадь от 100 до 150 м²",
      "Срок строительства 90 дней",
      "Утеплитель 200 мм",
      "Адаптация планировки под вас",
      "Отопление и инженерия",
      "Внешняя отделка включена",
      "Гарантия 10 лет",
    ],
    cta: "Рассчитать стоимость",
    highlighted: true,
  },
  {
    name: "Индивидуальный",
    description: "Дом по вашему проекту с любой площадью и планировкой",
    price: "По запросу",
    period: "",
    features: [
      "Любая площадь и этажность",
      "Разработка проекта с нуля",
      "Персональный менеджер",
      "Полный комплекс отделки",
      "Ландшафтный дизайн",
      "Приоритетные сроки",
      "Гарантия 10 лет",
    ],
    cta: "Обсудить проект",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Проекты</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Выберите свой проект
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Фиксированная цена в договоре. Никаких скрытых платежей и неожиданных доплат.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-100 shadow-sm"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-400" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-white" : "text-zinc-900"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-zinc-400" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-300" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-300" : "text-zinc-600"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}