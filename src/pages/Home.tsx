import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Package,
  Users,
  HeartHandshake 
} from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Transport avec camions et minibus adaptés',
      description: 'Flotte moderne de véhicules adaptés à tous types de déménagement'
    },
    {
      icon: Shield,
      title: 'Stockage sécurisé à court et long terme',
      description: 'Espaces de stockage surveillés 24/7 avec accès sécurisé'
    },
    {
      icon: Clock,
      title: 'Service client 24/7',
      description: 'Équipe disponible à tout moment pour vous accompagner'
    },
    {
      icon: Star,
      title: 'Devis gratuit et transparent',
      description: 'Prix clairs sans surprise avec estimation gratuite'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed',
      comment: 'Un service impeccable, rapide et professionnel.',
      rating: 5
    },
    {
      name: 'Fatima',
      comment: 'J\'ai pu déménager sans stress, je recommande fortement !',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '50+', label: 'Véhicules' },
    { number: '10+', label: 'Années d\'Expérience' },
    { number: '24/7', label: 'Support Client' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-600 to-primary-500">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-primary-900/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              Services de{' '}
              <span className="text-accent-400">Déménagement</span>
              <br />
              et de Stockage
              <br />
              <span className="text-accent-400">Professionnels</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Rapide, sécurisé et abordable pour vos besoins de transport
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-accent-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Demander un devis</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105"
              >
                Nos Services
              </Link>
            </div>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-poppins font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et nos équipements de qualité garantissent un service exceptionnel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-3 bg-primary-50 rounded-lg w-fit mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de déménagement et stockage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg"
                alt="Déménagement professionnel"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent rounded-2xl" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-poppins font-bold mb-2">Déménagement</h3>
                <p className="text-gray-200">Résidentiel et commercial avec équipe professionnelle</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg"
                alt="Stockage sécurisé"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent rounded-2xl" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-poppins font-bold mb-2">Stockage</h3>
                <p className="text-gray-200">Espaces sécurisés à court et long terme</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
            >
              <span>Voir tous nos services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des témoignages authentiques de clients satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                  "{testimonial.comment}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-primary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">Client satisfait</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">
              Prêt pour votre déménagement ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-accent-500 transition-colors duration-300 transform hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+212646426335"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105"
              >
                +212 6 46 42 63 35
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;