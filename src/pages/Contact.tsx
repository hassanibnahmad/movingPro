import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+212 6 46 42 63 35',
      action: 'tel:+212646426335'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@demenagement.ma',
      action: 'mailto:contact@demenagement.ma'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: 'Avenue Mohammed V, Agadir, Maroc',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: 'Lun-Ven: 8h-18h, Sam: 8h-16h',
      action: '#'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
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
            alt="Contactez-nous"
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
            <h1 className="text-5xl font-poppins font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Prêt à déménager ? Obtenez un devis gratuit et personnalisé en quelques minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-2">
                Demander un Devis
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-700">Message envoyé avec succès !</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+212 6 XX XX XX XX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Décrivez vos besoins de déménagement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-6">
                  Informations de Contact
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet de déménagement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="font-poppins font-semibold text-primary-900 mb-2">
                        {info.title}
                      </h3>
                      {info.action.startsWith('tel:') || info.action.startsWith('mailto:') ? (
                        <a
                          href={info.action}
                          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`p-3 bg-gray-100 rounded-lg transition-colors duration-200 ${social.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-accent-50 border border-accent-200 p-8 rounded-xl"
              >
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                  Service d'Urgence 24/7
                </h3>
                <p className="text-gray-600 mb-4">
                  Besoin d'un déménagement urgent ? Notre équipe est disponible 24h/24 pour les situations d'urgence.
                </p>
                <a
                  href="tel:+212646426335"
                  className="inline-flex items-center space-x-2 bg-accent-400 text-primary-900 px-6 py-3 rounded-lg font-medium hover:bg-accent-500 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>+212 6 46 42 63 35</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
              Notre Localisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Venez nous rendre visite dans nos locaux situés au cœur d'Agadir
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center shadow-2xl"
          >
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary-600" />
              <p className="text-xl font-poppins font-semibold">
                Avenue Mohammed V, Agadir, Maroc
              </p>
              <p className="text-gray-500 mt-2">
                Carte interactive bientôt disponible
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;