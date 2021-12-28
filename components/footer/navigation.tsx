import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export const navigation = {
  about: [
    { name: 'Acerca de nosotros', href: '/acerca' },
    { name: 'Compromiso con el cliente', href: '/compromiso-cliente' },
    { name: 'preguntas frecuentes', href: '/preguntas-frecuentes' },
  ],
  legal: [
    { name: 'Términos de venta', href: '/terminos-venta' },
    { name: 'Política de privacidad', href: '/politica-privacidad' },
  ],
  contact: [
    { name: 'Ubicación', href: '/ubicacion' },
    { name: 'Contáctanos', href: '/contacto' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => <BsFacebook {...props} />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => <BsInstagram {...props} />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => <BsTwitter {...props} />,
    },
  ],
};
