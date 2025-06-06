// data/cardData.ts

import { FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const contactCardData = [
  {
    title: 'Email',
    description: 'support@santech.com',
    bgColor: 'bg-[#F8F9F9]',
  },
  {
    title: 'Our Location',
    description: 'USA, San Francisco, CA 94105\n1234 Tech Avenue, Suite 500',
    bgColor: 'bg-[#F8F9F9]',
  },
  {
    title: 'Phone Number',
    description: '+1 (415) 123-4567\n +1 (800) 987-6543',
    bgColor: 'bg-[#F8F9F9]',
  },
  {
    title: 'Social Networks',
    description: '',
    bgColor: 'bg-[#F8F9F9]',
    socialIcons: [
      <FaTwitter key="twitter" />,
      <FaInstagram key="instagram" />,
      <FaLinkedin key="linkedin" />,
      <FaWhatsapp key="whatsapp" />,
    ],
  },
];
