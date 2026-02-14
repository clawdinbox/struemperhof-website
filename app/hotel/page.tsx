import { Phone, ArrowLeft, Wifi, Car, Coffee } from 'lucide-react'
import Link from 'next/link'

export default function Hotel() {
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
              <Link href="/hotel" className="text-primary font-medium">Hotel</Link>
              <Link href="/speisekarte" className="text-text hover:text-primary font-medium">Restaurant</Link>
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Hotel & Übernachtung</h1>
          <p className="text-white/80 mt-4 text-lg">Gemütliche Zimmer im Herzen von Meerbusch</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text mb-4">Ihr Zuhause auf Zeit</h2>
              <p className="text-muted mb-4">Im Strümper Hof erwartet Sie nicht nur erstklassige Küche, sondern auch komfortable Übernachtungsmöglichkeiten. Ob für einen kurzen Aufenthalt oder einen längeren Urlaub am Niederrhein.</p>
              <p className="text-muted">Unsere Zimmer sind gemütlich eingerichtet und bieten alles, was Sie für einen erholsamen Aufenthalt benötigen.</p>
            </div>
            <img src="/johannes-siemes.webp" alt="Strümper Hof Hotel" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">WLAN</h3>
              <p className="text-muted">Kostenloses Highspeed-WLAN in allen Zimmern</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Parkplatz</h3>
              <p className="text-muted">Gratis Parkplätze direkt am Hotel</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Frühstück</h3>
              <p className="text-muted">Reichhaltiges Frühstücksbuffet</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Zimmer reservieren</h2>
            <p className="text-muted mb-6">Kontaktieren Sie uns direkt für Verfügbarkeiten und Preise</p>
            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              <Phone size={20} /> 02159 6253
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
