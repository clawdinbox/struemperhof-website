import { Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Speisekarte() {
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
              <Link href="/#about" className="text-text hover:text-primary font-medium">Über uns</Link>
              <Link href="/speisekarte" className="text-primary font-medium">Speisekarte</Link>
              <Link href="/#catering" className="text-text hover:text-primary font-medium">Catering</Link>
            </div>
            <a href="tel:+4921596253" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2">
              <Phone size={18} />
              Reservieren
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Unsere Speisekarte</h1>
          <p className="text-white/80 mt-4 text-lg">Frische und hochwertige Lebensmittel aus der Region</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Die Basis unseres Seins</h2>
            <p className="text-lg text-muted">Frische und hochwertige Lebensmittel sowie ausgesuchte regionale Zulieferer und Bauern sind wichtige Bausteine unserer Philosophie.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Vorspeisen</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Unser Landbrot</h3><p className="text-muted text-sm">mit Gänsegriebenschmalz</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 7,50</span>
              </div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Consommé vom Rind und Wild</h3><p className="text-muted text-sm">Kräuterflädle</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 9,50</span>
              </div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Rapunzelsalat frisch vom Feld</h3><p className="text-muted text-sm">Süße Senfvinaigrette</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 10,50</span>
              </div>
              <div className="flex justify-between items-start">
                <div><h3 className="font-semibold text-text">Carpaccio vom Angusrind</h3><p className="text-muted text-sm">frischer Knoblauch, schwarzer Pfeffer, gehobelter Parmesan</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 16,50</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Hauptgerichte</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Tagliatelle mit Wildbolognese</h3><p className="text-muted text-sm">vom Reh und Hirsch, Tomate, Kräuter, Parmesan</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 14,50</span>
              </div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Wildragout</h3><p className="text-muted text-sm">vom Reh, Hirsch und Wildschwein, Apfelrotkohl, Spätzle</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 22,50</span>
              </div>
              <div className="flex justify-between items-start">
                <div><h3 className="font-semibold text-text">Wiener Schnitzel vom Kalb</h3><p className="text-muted text-sm">Pommes Frites, Zitrone, Preiselbeeren</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 29,90</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Süßes Finale</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold text-text">Hausgemachtes Nougatparfait</h3><p className="text-muted text-sm">an Beerenkompott</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 11,00</span>
              </div>
              <div className="flex justify-between items-start">
                <div><h3 className="font-semibold text-text">Frischer Kaiserschmarrn</h3><p className="text-muted text-sm">mit Vanilleeis und Preiselbeeren</p></div>
                <span className="font-heading text-lg font-bold text-primary">€ 10,50</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
