import { useState, useEffect } from 'react'
import tankedLogo from '../assets/Aqualogo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    setIsLoaded(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h- lg:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center group">
              <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
                <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a key={item.name} href={item.href} className={`font-medium transition-all duration-500 transform hover:scale-110 ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-300 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              Get Quote
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a key={item.name} href={item.href} className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all" style={{ transitionDelay: `${index * 50}ms` }} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <div className="pt-2 pb-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Get Quote</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
