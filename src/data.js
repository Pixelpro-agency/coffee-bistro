// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonianze' },
  { href: '/', name: 'prenota un tavolo' },
  { href: '/', name: 'contatti' },
];

export const heroData = {
  pretitle: 'Niente unisce come',
  title: 'Bistro Cafe',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Scopri di più',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'la nostra storia',
  title: 'chi siamo',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
  btnText: 'Scopri di più',
  image: AboutImg,
};

export const menuData = {
  title: 'deliziosi sapori autunnali',
  subtitle: 'visualizza tutti i menu per un pasto gustoso',
  modelImg: ModelWhiteImg,
  btnText: 'visualizza il menu completo',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Cake',
      price: '€7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Veggie Burger',
      price: '€9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'King Burger',
      price: '€8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Mexican Burger',
      price: '€9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'il nostro team',
  title: 'incontra lo chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "cosa dicono i clienti ",
  subtitle: '1500+ clienti soddisfatti',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Giorgio Loriente',
      occupation: 'CEO delle Delizie',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'Giorgio Loriente',
      occupation: 'CEO delle Delizie',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Giorgio Loriente.',
      occupation: 'CEO delle Delizie',
    },
  ],
};

export const reservationData = {
  title: 'prenotazione',
  subtitle:
    'Chiama (+39) 123-4567 tutti i giorni dalle 8:00 alle 23:00 o prenota online. Prenotazione obbligatoria per gruppi di 6 o più persone',
  modelImg: ModelBlackImg,
  btnText: 'Prenota qui',
};

export const newsletterData = {
  title: 'iscriviti alla nostra newsletter',
  subtitle: 'Ricevi le ultime notizie e gli aggiornamenti nella tua casella di posta',
  placeholder: 'Iscriviti ai nostri piatti deliziosi',
  btnText: 'Iscriviti ora',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '00000 Roma, Italia',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'orari di apertura',
    program: [
      {
        days: 'lunedì - venerdì',
        hours: '09:00 - 22:00',
      },
      {
        days: 'sabato - domenica',
        hours: '09:00 - 23:00',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
