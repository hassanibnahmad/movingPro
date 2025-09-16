import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-accent-400 rounded-lg">
                <Truck className="h-6 w-6 text-primary-900" />
              </div>
              <span className="text-xl font-poppins font-bold">DéménagePro</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de déménagement et de stockage au Maroc.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="font-poppins font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300 text-sm">+212 6 46 42 63 35</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300 text-sm">contact@demenagement.ma</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Avenue Mohammed V, Agadir, Maroc</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-poppins font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-primary-800 rounded-lg hover:bg-accent-400 hover:text-primary-900 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 DéménagePro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;