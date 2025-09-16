//import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Truck, Clock, Shield, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Un service professionnel et sécurisé pour protéger vos biens les plus précieux'
    },
    {
      icon: Clock,
      title: 'Ponctualité',
      description: 'Respect des délais convenus avec une planification rigoureuse de chaque intervention'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une équipe à votre écoute, disponible et attentive à vos besoins spécifiques'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Engagement constant vers l\'amélioration de nos services et votre satisfaction'
    }
  ];

  const team = [
    {
      name: 'Mohamed Alami',
      role: 'Directeur Général',
      description: '15 ans d\'expérience dans le transport et la logistique'
    },
    {
      name: 'Aicha Benali',
      role: 'Responsable Opérations',
      description: 'Spécialiste en coordination de déménagements complexes'
    },
    {
      name: 'Youssef Tahri',
      role: 'Chef d\'Équipe',
      description: 'Expert en manutention et protection des biens fragiles'
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
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
            alt="Notre équipe"
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
            <h1 className="text-5xl font-poppins font-bold mb-6">À Propos de Nous</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Nous sommes une entreprise spécialisée dans le déménagement et le stockage, avec une équipe expérimentée et un large choix de véhicules adaptés pour répondre à tous vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondée en 2014 à Agadir, DéménagePro est née de la volonté de proposer un service de déménagement et de stockage professionnel et humain au Maroc. Depuis nos débuts, nous avons accompagné plus de 500 familles et entreprises dans leurs projets de déménagement.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre expertise s'étend de la simple livraison au déménagement international, en passant par des solutions de stockage sur mesure. Chaque projet est unique, et nous mettons un point d'honneur à adapter nos services à vos besoins spécifiques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Clients Satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Années d'Expérience</div>
                </div>
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
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg"
                alt="Notre équipe en action"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-400 p-6 rounded-2xl shadow-xl">
                <Award className="h-12 w-12 text-primary-900 mb-2" />
                <div className="text-primary-900 font-poppins font-bold">Certifié ISO</div>
                <div className="text-primary-700 text-sm">Qualité garantie</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="p-3 bg-primary-100 rounded-full w-fit mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels expérimentés à votre service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <Users className="h-16 w-16 text-primary-600" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-accent-500 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-poppins font-bold mb-8">Notre Mission</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Faciliter votre déménagement et vous offrir des solutions de stockage sécurisées, en mettant l'accent sur la qualité du service, la transparence des prix et la satisfaction client. Nous nous engageons à préserver vos biens comme s'il s'agissait des nôtres.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-semibold mb-2">Transport Sécurisé</h3>
                <p className="text-gray-300">Véhicules modernes et équipés</p>
              </div>
              <div className="text-center">
                <Shield className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-semibold mb-2">Protection Maximale</h3>
                <p className="text-gray-300">Assurance complète incluse</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-semibold mb-2">Service Humain</h3>
                <p className="text-gray-300">Équipe professionnelle et bienveillante</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;