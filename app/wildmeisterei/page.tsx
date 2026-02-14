import { Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Wildmeisterei() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img src="/logo-white.svg" alt="Strümper Hof" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-text hover:text-primary font-medium">Start</Link>
              <Link href="/speisekarte" className="text-text hover:text-primary font-medium">Restaurant</Link>
              <Link href="/wildmeisterei" className="text-primary font-medium">Wildmeisterei</Link>
              <Link href="/#catering" className="text-text hover:text-primary font-medium">Catering</Link>
            </div>
            <a href="tel:+4921596253" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2">
              <Phone size={18} /> Reservieren
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft size={20} /> Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Wildmeisterei</h1>
          <p className="text-white/80 mt-4 text-lg">Eigenes Wild aus nachhaltiger Jagd</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text mb-4">Vom Wald auf den Teller</h2>
              <p className="text-muted mb-4">Im Strümper Hof legen wir großen Wert auf Nachhaltigkeit und Regionalität. Deshalb beziehen wir unser Wild aus eigener Jagd – artgerecht, gesund und nachhaltig.</p>
              <p className="text-muted mb-4">Während der Wildwochen vom 9. Januar bis 8. Februar verwöhnen wir Sie mit besonderen Wildspezialitäten:</p>
              <ul className="space-y-2 text-muted">
                <li>• Wildragout vom Reh, Hirsch und Wildschwein</li>
                <li>• Dunkles Frikassee vom Feldhasen</li>
                <li>• Schnitzel vom Hirsch natur</li>
                <li>• Das Beste vom Fasan</li>
              </ul>
            </div>
            <img src="/food.webp" alt="Wildgerichte" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Wildwochen 2026</h2>
            <p className="text-muted mb-6">9. Januar bis 8. Februar</p>
            <p className="text-lg text-text mb-6">Reservieren Sie jetzt Ihren Tisch für die Wildwochen!</p>
            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              <Phone size={20} /> Tisch reservieren
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
