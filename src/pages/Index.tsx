import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FooterSection } from "@/components/sections/FooterSection"
import { OrderModal } from "@/components/OrderModal"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState("")

  const openModal = (project = "") => {
    setModalProject(project)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOrderClick={() => openModal()} />
      <main>
        <HeroSection onOrderClick={() => openModal()} />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection onOrderClick={openModal} />
        <CtaSection onOrderClick={() => openModal()} />
      </main>
      <FooterSection />
      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultProject={modalProject} />
    </div>
  )
}

export default Index