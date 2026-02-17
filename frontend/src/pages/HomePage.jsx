import React from 'react';
import { Phone, Instagram, MapPin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919113560916', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/shahabad_stone', '_blank');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps/search/Durga+Mata+Stone+Company', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-stone-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Durga Mata Stone Company</h1>
              <p className="text-xs text-stone-600">Premium Shahabad Stone</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">Home</a>
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">About Us</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200">Contact</a>
          </nav>
          <Button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-stone-200/50 rounded-full">
                <span className="text-stone-700 font-semibold text-sm">40 Years of Excellence</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Premium
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-stone-500">
                  Shahabad Stone
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience the finest quality Shahabad stone from our quarry and polishing unit. 
                We deliver excellence in every 2' × 1'6" slab.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Quote
                </Button>
                <Button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/20 to-stone-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_stone-polishing/artifacts/iynnjzpf_WhatsApp%20Image%202026-02-15%20at%204.36.34%20PM.jpeg"
                alt="Durga Mata Stone Company Quarry - Shahabad Stone"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl text-white">⛏️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Own Quarry</h3>
                <p className="text-slate-600">Direct sourcing from our own quarry ensures the highest quality and competitive pricing.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-stone-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Polishing</h3>
                <p className="text-slate-600">State-of-the-art polishing unit delivering mirror-finish quality on every stone.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl text-white">📏</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Standard Size</h3>
                <p className="text-slate-600">Consistent 2' × 1'6" dimensions perfect for all your flooring and tiling needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-bl from-stone-400/20 to-slate-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_stone-polishing/artifacts/8jrp41cu_WhatsApp%20Image%202026-02-15%20at%204.36.56%20PM%20%281%29.jpeg"
                alt="Durga Mata Stone Company - Our Heritage and Quarry"
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-stone-500">40+</div>
                  <div className="text-slate-600 font-medium">Years Legacy</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-slate-700 font-semibold text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Four Decades of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-stone-500">
                  Stone Craftsmanship
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Durga Mata Stone Company was founded by <span className="font-semibold text-slate-800">Mallanna Sanamo Malgatti</span> over 40 years ago with a vision to provide the finest Shahabad stone to our customers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                What started as a small quarry operation has grown into a complete stone processing facility, combining traditional expertise with modern polishing techniques. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we continue the legacy with the same dedication to excellence, offering premium Shahabad stone that stands the test of time.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-800">10,000+</div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-800">100%</div>
                  <div className="text-slate-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-stone-200/50 rounded-full mb-4">
              <span className="text-stone-700 font-semibold text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600">We'd love to hear from you. Reach out for quotes or inquiries.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50"
                onClick={handleWhatsApp}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">WhatsApp</h3>
                    <p className="text-slate-600 mb-2">Chat with us instantly</p>
                    <p className="text-xl font-semibold text-green-600">+91 9113560916</p>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-white to-stone-50"
                onClick={handleInstagram}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Instagram</h3>
                    <p className="text-slate-600 mb-2">Follow us for updates</p>
                    <p className="text-xl font-semibold text-purple-600">@shahabad_stone</p>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50"
                onClick={handleLocation}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Visit Us</h3>
                    <p className="text-slate-600 mb-2">Come see our facility</p>
                    <p className="text-lg font-semibold text-slate-700">Durga Mata Stone Company</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/10 to-stone-400/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_stone-polishing/artifacts/ycr9g4h4_WhatsApp%20Image%202026-02-15%20at%204.36.43%20PM.jpeg"
                alt="Durga Mata Stone Company - Our Facility at Evening"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-stone-400 to-stone-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Durga Mata Stone Company</h3>
                </div>
              </div>
              <p className="text-slate-300">Premium Shahabad Stone since 1985</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleInstagram}
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} Durga Mata Stone Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
