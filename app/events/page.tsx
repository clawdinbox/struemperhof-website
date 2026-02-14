import { Phone, ArrowLeft, Heart, Calendar, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function Events() {
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
              <Link href="/events" className="text-primary font-medium">Events</Link>
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Aktuelle Events</h1>
          <p className="text-white/80 mt-4 text-lg">Besondere Anlässe im Strümper Hof</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Wildwochen */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Utensils size={16} />
              <span className="text-sm font-semibold">9. Januar – 8. Februar 2026</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-text mb-4">Wildwochen</h2>
            <p className="text-muted mb-6">Artgerecht, gesünder und nachhaltiger geht es nicht! Genießen Sie unsere Wildspezialitäten aus eigener Jagd.</p>
            <div className="bg-background rounded-xl p-6 mb-6">
              <h3 className="font-heading text-lg font-bold text-text mb-3">Highlights:</h3>
              <ul className="space-y-2 text-muted">
                <li>• Wildragout vom Reh, Hirsch und Wildschwein</li>
                <li>• Dunkles Frikassee vom Feldhasen</li>
                <li>• Schnitzel vom Hirsch natur</li>
                <li>• Das Beste vom Fasan</li>
              </ul>
            </div>
            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              <Phone size={20} /> Tisch reservieren
            </a>
          </div>

          {/* Valentinstag */}
          <div className="bg-primary rounded-2xl p-8 text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Heart size={16} />
              <span className="text-sm font-semibold">14. Februar 2026</span>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">Valentinstag im Strümper Hof</h2>
            <p className="text-white/80 mb-6">Verbringen Sie einen romantischen Abend mit Ihrem Schatz und genießen Sie unser spezielles Valentinstags-Menü.</p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
              <h3 className="font-heading text-lg font-bold mb-3">Das Menü (59,90€ p.P.):</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Avocadosalat mit gebratener GambaRuille, Safran-Vinaigrette</li>
                <li>• Roulade von der Maispoularde mit Frühlingsmorcheln</li>
                <li>• Valentinsherz von weißem Nougat mit Himbeergelee</li>
              </ul>
              <p className="mt-4 text-white/60">inkl. Aperitif, alle Getränke, Gruß aus der Küche, Kaffee & Gebäck</p>
            </div>

            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition">
              <Calendar size={20} /> Jetzt reservieren
            </a>
          </div>

          {/* Tellerchen-Abend */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary px-4 py-2 rounded-full mb-4">
              <Calendar size={16} />
              <span className="text-sm font-semibold">Regelmäßig</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-text mb-4">„Tellerchen-Abend"</h2>
            <p className="text-muted mb-6">Unser beliebter Tellerchen-Abend – perfekt für alle, die kleine Portionen und große Vielfalt lieben.</p>
            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              <Phone size={20} /> Termin erfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
