//import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Package, 
  Truck, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Déménagement Résidentiel',
      description: 'Un transport rapide et sécurisé pour vos biens personnels.',
      features: [
        'Emballage professionnel inclus',
        'Protection des meubles et objets fragiles',
        'Démontage et remontage',
        'Transport sécurisé',
        'Assurance complète'
      ],
      image: 'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg'
    },
    {
      icon: Building2,
      title: 'Déménagement Commercial',
      description: 'Solutions de transport pour bureaux et entreprises.',
      features: [
        'Planification horaire flexible',
        'Déménagement de nuit possible',
        'Transport d\'équipements IT',
        'Archivage et documentation',
        'Remise en service rapide'
      ],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
    },
    {
      icon: Package,
      title: 'Stockage Sécurisé',
      description: 'Espaces de stockage surveillés et accessibles.',
      features: [
        'Surveillance 24h/24',
        'Accès sécurisé par badge',
        'Espaces climatisés',
        'Assurance incluse',
        'Contrats flexibles'
      ],
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg'
    },
    {
      icon: Truck,
      title: 'Transport Spécial',
      description: 'Minibus et camions remorque pour tout type de chargement.',
      features: [
        'Véhicules de toutes tailles',
        'Transport longue distance',
        'Manutention spécialisée',
        'Livraison express',
        'Suivi en temps réel'
      ],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
    }
  ];

  const additionalServices = [
    {
      title: 'Emballage Professionnel',
      description: 'Service d\'emballage avec matériaux de qualité'
    },
    {
      title: 'Montage/Démontage',
      description: 'Démontage et remontage de mobilier'
    },
    {
      title: 'Nettoyage Post-Déménagement',
      description: 'Nettoyage complet après votre départ'
    },
    {
      title: 'Assurance Tous Risques',
      description: 'Protection complète de vos biens'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg"
            alt="Nos services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-poppins font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et professionnelles pour tous vos besoins de déménagement et de stockage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services adaptés à vos besoins spécifiques
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="p-3 bg-primary-100 rounded-lg w-fit mb-6">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-3xl font-poppins font-bold text-primary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prestations additionnelles pour un service complet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-2 bg-accent-100 rounded-lg w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Pourquoi Choisir DéménagePro ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre engagement pour votre satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="p-4 bg-primary-100 rounded-full w-fit mx-auto mb-6">
                <Shield className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-3">
                Sécurité Garantie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Assurance complète et équipes formées aux meilleures pratiques de manutention
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-4 bg-primary-100 rounded-full w-fit mx-auto mb-6">
                <Clock className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-3">
                Ponctualité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Respect des horaires convenus et planification rigoureuse de chaque intervention
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-primary-100 rounded-full w-fit mx-auto mb-6">
                <Truck className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-3">
                Équipements Modernes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flotte de véhicules récents et matériel professionnel pour tous types de déménagement
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Besoin d'un Devis ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une évaluation gratuite et personnalisée de vos besoins
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-accent-500 transition-colors duration-300 transform hover:scale-105"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;