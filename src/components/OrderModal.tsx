import { useState } from "react"
import Icon from "@/components/ui/icon"

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  defaultProject?: string
}

const SEND_ORDER_URL = "https://functions.poehali.dev/a4fa0256-1d32-4bb4-b12b-80aef50df419"

export function OrderModal({ isOpen, onClose, defaultProject = "" }: OrderModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [project, setProject] = useState(defaultProject)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, project, comment }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError("Ошибка отправки. Попробуйте позвонить нам напрямую.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError("")
    setName("")
    setPhone("")
    setComment("")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={32} className="text-green-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-zinc-900 mb-2">Заявка отправлена!</h3>
            <p className="text-zinc-500 text-sm">Мы свяжемся с вами в течение 24 часов и рассчитаем стоимость вашего дома.</p>
            <button
              onClick={handleClose}
              className="mt-6 w-full py-3 px-6 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-700 transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">Рассчитать стоимость</h3>
            <p className="text-zinc-500 text-sm mb-6">Ответим в течение 24 часов с детальным расчётом.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Ваше имя *</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Телефон *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+7 (900) 000-00-00"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Тип проекта</label>
                <select
                  value={project}
                  onChange={e => setProject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-400 text-sm bg-white"
                >
                  <option value="">Не выбрано</option>
                  <option value="Дача (60–80 м²)">Дача (60–80 м²)</option>
                  <option value="Семейный (100–150 м²)">Семейный (100–150 м²)</option>
                  <option value="Индивидуальный проект">Индивидуальный проект</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Комментарий</label>
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Пожелания, вопросы, примерный бюджет..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 text-sm resize-none"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
