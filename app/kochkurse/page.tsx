import { Phone, ArrowLeft, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export default function Kochkurse() {
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
              <Link href="/kochkurse" className="text-primary font-medium">Kochkurse</Link>
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Kochkurse</h1>
          <p className="text-white/80 mt-4 text-lg">Lernen Sie von Küchenmeister Johannes Siemes</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calendar size={16} />
              <span className="text-sm font-semibold">18. Februar 2026</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-text mb-4">„Das Menü der Aphrodite"</h2>
            <p className="text-muted mb-4">Ein besonderer Valentinstag-Kochkurs mit Küchenmeister Johannes Siemes.</p>
            
            <div className="bg-background rounded-xl p-6 mb-6">
              <h3 className="font-heading text-xl font-bold text-text mb-3">Das Menü:</h3>
              <ul className="space-y-2 text-muted">
                <li>• <strong>Trilogie von der Gillardeau-Auster</strong> – Austerntartar, Auster mit Chilivinaigrette und überbacken mit Estragonhollandaise auf Blattspinat</li>
                <li>• <strong>Tom Kha Gai-Suppe</strong> – Kokosmilch, Ingwer, Sprossen, frisches Gemüse und gebackene Curryblätter</li>
                <li>• <strong>Hirschrücken im Strudelteig</strong> – auf einem Bett von roter Beete mit Kurkuma und Granatapfel, Selleriepüree mit Trüffelaroma</li>
                <li>• <strong>Mousse von der Zartbitterschokolade</strong> – mit Kürbiskernkrokant und Erdbeermark</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 text-muted mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span>18. Februar 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span>17:00 – 21:30 Uhr</span>
              </div>
            </div>

            <p className="text-lg text-text mb-4">Inklusive eines Glases Champagner zum Aperitif und allen weiteren Getränken.</p>

            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              <Phone size={20} /> Jetzt anmelden
            </a>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-white text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">Geschenkidee</h2>
            <p className="text-white/80 mb-4">Verschenken Sie einen Kochkurs an Ihre Lieben – das perfekte Erlebnisgeschenk!</p>
            <a href="tel:+4921596253" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition">
              <Phone size={20} /> Gutschein bestellen
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
