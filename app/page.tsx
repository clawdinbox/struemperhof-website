import { Phone, MapPin, Clock, Star, Users, ChefHat, Utensils, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img src="/logo-white.svg" alt="Strümper Hof" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/hotel" className="text-text hover:text-primary font-medium">Hotel</Link>
              <Link href="/speisekarte" className="text-text hover:text-primary font-medium">Restaurant</Link>
              <Link href="/wildmeisterei" className="text-text hover:text-primary font-medium">Wildmeisterei</Link>
              <Link href="/events" className="text-text hover:text-primary font-medium">Events</Link>
              <Link href="/kochkurse" className="text-text hover:text-primary font-medium">Kochkurse</Link>
            </div>
            <a href="tel:+4921596253" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center gap-2">
              <Phone size={18} />
              Reservieren
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')] bg-cover bg-center opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
            <Star size={16} className="text-secondary" />
            <span className="text-sm font-medium">Seit 1876</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">Willkommen im<br /><span className="text-secondary">Strümper Hof</span></h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">5. Generation familiengeführt</p>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">Regionale Küche trifft auf moderne Kreation. Wild aus eigener Jagd.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4921596253" className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition flex items-center justify-center gap-2">
              <Phone size={20} /> Tisch reservieren
            </a>
            <a href="#about" className="bg-white/20 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition">Unsere Geschichte</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Users size={16} />
                <span className="text-sm font-semibold">5. Generation</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">Eine Geschichte seit <span className="text-primary">1876</span></h2>
              <p className="text-lg text-muted mb-6">Das familiengeführte Traditionshaus Strümper Hof besteht seit 1876 in Meerbusch am Niederrhein.</p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="font-heading text-3xl font-bold text-primary">148</div>
                  <div className="text-sm text-muted">Jahre</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="font-heading text-3xl font-bold text-primary">5.</div>
                  <div className="text-sm text-muted">Generation</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="font-heading text-3xl font-bold text-primary">★★★</div>
                  <div className="text-sm text-muted">Qualität</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/food03.jpg" alt="Strümper Hof Restaurant" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Website Preview Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">Ihre neue Website</h3>
              <p className="text-muted">Modern, mobil-optimiert und bereit für Online-Reservierungen</p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200" 
                alt="Website Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold">Strümper Hof - Modern & Professionell</p>
                  <p className="text-sm opacity-80">Responsives Design für alle Geräte</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-text">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Mobil optimiert</span>
              </div>
              <div className="flex items-center gap-2 text-text">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Online-Reservierung</span>
              </div>
              <div className="flex items-center gap-2 text-text">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">SEO-optimiert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section id="restaurant" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Utensils size={16} />
              <span className="text-sm font-semibold">Kulinarik</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">Unser Restaurant</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">Ob klassisch regionale Küche oder Crossover – hochwertige Zutaten genussvoll arrangiert.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-3">Regionale Küche</h3>
              <p className="text-muted">Fangfrischer Fisch und Wild aus eigener Jagd – nachhaltig und saisonal.</p>
            </div>
            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-3">Crossover</h3>
              <p className="text-muted">Tradition trifft Moderne. Kreative Interpretationen klassischer Gerichte.</p>
            </div>
            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img src="/food.webp" alt="Strümper Hof Gericht" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text mb-3">Wildwochen</h3>
              <p className="text-muted">Artgerecht, gesund und nachhaltig. Unsere beliebte Saison-Highlights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calendar size={16} />
              <span className="text-sm font-semibold">Veranstaltungen</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">Catering & Events</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">Von Hochzeiten bis Firmenevents – wir machen Ihren Anlass unvergesslich.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-text mb-2">Hochzeiten</h3>
              <p className="text-muted text-sm">Der schönste Tag im Leben – gemeinsam gestaltet.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-text mb-2">Firmenevents</h3>
              <p className="text-muted text-sm">Professionelles Catering für Ihre Geschäftsanlässe.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-text mb-2">Grillfeste</h3>
              <p className="text-muted text-sm">Flammlachs, saftige Spezialitäten und Showcooking.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-text mb-2">Private Dining</h3>
              <p className="text-muted text-sm">Intime Diners in privater Atmosphäre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Reservieren Sie Ihren Tisch</h2>
              <p className="text-white/80 text-lg mb-8">Wir freuen uns auf Ihren Besuch. Reservieren Sie bequem telefonisch oder besuchen Sie uns spontan.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-secondary" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a href="tel:+4921596253" className="text-white/80 hover:text-white">02159 6253</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={24} className="text-secondary" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-white/80">Strümper Hof, 40670 Meerbusch</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock size={24} className="text-secondary" />
                  <div>
                    <p className="font-semibold">Öffnungszeiten</p>
                    <p className="text-white/80">Di-So: 11:30-14:30 & 17:30-22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Schnellanfrage</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Ihr Name" className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 text-white placeholder-white/60" />
                <input type="email" placeholder="Ihre E-Mail" className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 text-white placeholder-white/60" />
                <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 text-white placeholder-white/60" />
                <input type="date" className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 text-white" />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 text-white">
                  <option value="" className="text-text">Anzahl Personen</option>
                  <option value="2" className="text-text">2 Personen</option>
                  <option value="4" className="text-text">4 Personen</option>
                  <option value="6" className="text-text">6 Personen</option>
                  <option value="8+" className="text-text">8+ Personen</option>
                </select>
                <button className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-heading text-xl font-bold">Strümper Hof</h3>
              <p className="text-white/60">Tradition seit 1876</p>
            </div>
            <div className="text-white/60 text-sm">
              © 2026 Strümper Hof. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}