import portfolioAquarium from '../assets/portfolio-aquarium-1.jpg'

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Expert Craftsmanship",
      description: "Our team has decades of combined experience in aquarium design and fish keeping."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Materials",
      description: "We use only the highest quality glass, filtration systems, and aquatic supplies."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance services for all our installations."
    }
  ]

  return (
    <section id="about" className="section-padding theme-dark-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-4 bg-blue-100 text-blue-800 rounded-full text-xl font-large font-semibold">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We're Passionate
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {" "}Aquarium Experts
                </span>
              </h2>
              <p className="text-lg text-secondary-200 leading-relaxed">
                At AquaCraft, we're more than just aquarium builders – we're fish keeping enthusiasts who understand the art and science of creating beautiful aquatic environments. Our passion for aquariums drives us to deliver exceptional quality and service.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-">
              <button className="btn-primary">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={portfolioAquarium} 
                  alt="Custom Aquarium Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">Custom Aquarium</p>
                  <p className="text-sm opacity-90">Professional Installation</p>
                </div>
              </div>
              
              {/* Floating Stats Card */}

                side card pop up card
  
              {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 w-48">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
              </div> */}
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
