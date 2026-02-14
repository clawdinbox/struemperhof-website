import { Phone, ArrowLeft, Award, ChefHat, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function JohannesSiemes() {
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
              <Link href="/johannes-siemes" className="text-primary font-medium">Johannes Siemes</Link>
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Johannes Siemes</h1>
          <p className="text-white/80 mt-4 text-lg">Küchenmeister & Gastgeber in 5. Generation</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img src="/johannes-siemes.webp" alt="Johannes Siemes" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
            <div>
              <h2 className="font-heading text-3xl font-bold text-text mb-4">Tradition mit Leidenschaft</h2>
              <p className="text-muted mb-4">Als Küchenmeister in der 5. Generation führt Johannes Siemes den Strümper Hof mit Hingabe und Innovation. Er verbindet traditionelle regionale Küche mit modernen Elementen und kreiert so einzigartige Geschmackserlebnisse.</p>
              <p className="text-muted">Seine Philosophie: Hochwertige Zutaten, fangfrischer Fisch und Wild aus eigener Jagd werden im Strümper Hof genussvoll für Sie arrangiert.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Küchenmeister</h3>
              <p className="text-muted">Ausgebildet mit Leidenschaft für die Kochkunst</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">5. Generation</h3>
              <p className="text-muted">Tradition seit 1876 fortgeführt</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">Kochbuchautor</h3>
              <p className="text-muted">„WILD" – Das eigene Kochbuch</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">Das Kochbuch: WILD</h2>
                <p className="text-muted mb-4">Johannes Siemes lässt Sie teilhaben an seiner Leidenschaft für Wildgerichte. In seinem Kochbuch finden Sie Rezepte, Tipps und Geschichten rund um die Wildküche.</p>
                <p className="text-muted">Erhältlich im Strümper Hof oder online.</p>
              </div>
              <img src="/kochbuch.webp" alt="Kochbuch WILD" className="rounded-xl shadow-lg w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
