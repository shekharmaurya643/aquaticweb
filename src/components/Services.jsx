import portfolioAquarium1 from '../assets/portfolio-aquarium-1.jpg'
import portfolioAquarium2 from '../assets/portfolio-aquarium-2.jpg'
import portfolioTerrarium1 from '../assets/portfolio-terrarium-1.jpg'
import portfolioTerrarium2 from '../assets/portfolio-terrarium-2.jpg'
import portfolioPaludarium1 from '../assets/portfolio-paludarium-1.jpg'
import portfolioVivarium1 from '../assets/portfolio-vivarium-1.jpg'

const Services = () => {
  const services = [
    { title: 'Custom Aquarium Design', image: portfolioAquarium1, color: 'from-blue-500 to-blue-600', features: ['Custom Dimensions','Style Consultation','3D Design Preview','Installation Service'] },
    { title: 'Fish & Aquatic Supplies', image: portfolioAquarium2, color: 'from-cyan-500 to-cyan-600', features: ['Premium Fish Food','Filtration Systems','Lighting Solutions','Water Treatments'] },
    { title: 'Aquarium Maintenance', image: portfolioTerrarium1, color: 'from-teal-500 to-teal-600', features: ['Regular Cleaning','Water Testing','Filter Maintenance','Health Monitoring'] },
    { title: 'Aquatic Life Selection', image: portfolioTerrarium2, color: 'from-green-500 to-green-600', features: ['Fish Compatibility','Plant Selection','Tank Size Guidance','Care Instructions'] },
    { title: 'Aquarium Consultation', image: portfolioPaludarium1, color: 'from-indigo-500 to-indigo-600', features: ['Setup Planning','Problem Solving','Best Practices','Ongoing Support'] },
    { title: 'Commercial Aquariums', image: portfolioVivarium1, color: 'from-purple-500 to-purple-600', features: ['Business Installations','Restaurant Features','Public Spaces','Maintenance Contracts'] },
  ]

  return (
    <section id="services" className="section-padding theme-dark-gradient">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/10">Our Services</div>
          <h2 className="heading-soft text-3xl md:text-4xl lg:text-5xl mb-4">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offer</span></h2>
          <p className="text-soft max-w-3xl mx-auto">Everything you need to create and maintain a beautiful aquatic environment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
              <div className="w-full h-44 rounded-xl overflow-hidden mb-5">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="heading-soft text-xl font-bold mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-5">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-soft text-sm">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></span>{f}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
