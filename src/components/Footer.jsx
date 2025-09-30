import tankedLogo from '../assets/Aqualogo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const social = [
    { name: 'Facebook', href: '#', path: 'M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h6v-7H9v-3h3V9.5C12 6.74 13.79 5 16.21 5c1.07 0 1.99.08 2.26.11v2.62h-1.55c-1.22 0-1.46.58-1.46 1.43V12h3l-.39 3h-2.61v7H18a4 4 0 004-4V6a4 4 0 00-4-4z' },
    { name: 'Instagram', href: '#', path: 'M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z' },
    { name: 'YouTube', href: '#', path: 'M10 15l5.19-3L10 9v6zm12-6.5v7c0 1.93-1.57 3.5-3.5 3.5h-17C1.57 19 0 17.43 0 15.5v-7C0 6.57 1.57 5 3.5 5h17C20.43 5 22 6.57 22 8.5z' },
  ]

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Custom Aquariums', href: '#services' },
      { name: 'Fish Supplies', href: '#services' },
      { name: 'Maintenance', href: '#services' },
      { name: 'Consultation', href: '#services' }
    ],
    resources: [
      { name: 'Portfolio', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Care Guides', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  }

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src={tankedLogo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold"></span>
            </div>
            <p className="text-blue-200/80 mb-6">We create beautiful aquatic environments with world-class craftsmanship and ongoing support.</p>
            <div className="flex gap-3">
              {social.map((s) => (
                <a key={s.name} href={s.href} className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform" title={s.name}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}><a href={link.href} className="text-blue-200/80 hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}><a href={link.href} className="text-blue-200/80 hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}><a href={link.href} className="text-blue-200/80 hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center text-blue-200/80 text-sm">
          <div>© {currentYear} Aquarealm . All rights reserved.</div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
