import React, { useRef, useState } from 'react';

import './PartnersPage.css';


const PartnersPage = () => {
  const companies = [
    { id: 1, logo: '/public/Icons/Iqtidor.png', url: 'https://iqtidoracademy.uz/' },
    { id: 2, logo: '/public/Icons/Iqtidorschool.png', url: 'https://iqtidoracademy.uz/' },
    { id: 3, logo: '/public/Icons/Github.png', url: 'https://github.com/' },
    { id: 4, logo: '/public/Icons/Vercel.svg', url: 'https://vercel.com/' },
    { id: 5, logo: '/public/Icons/Agrobank.jpg', url: 'https://agrobank.uz/ru/person' },
    { id: 6, logo: '/public/Icons/Agent.png', url: 'https://gov.uz/oz/yoshlar' },
    { id: 7, logo: '/public/Icons/Clerk.png', url: 'https://clerk.com/' },
    { id: 8, logo: '/public/Icons/Iqtidor.png', url: 'https://iqtidoracademy.uz/' },
    { id: 9, logo: '/public/Icons/Iqtidorschool.png', url: 'https://iqtidoracademy.uz/' },
    { id: 10, logo: '/public/Icons/Github.png', url: 'https://github.com/' },
    { id: 11, logo: '/public/Icons/Vercel.svg', url: 'https://vercel.com/' },
    { id: 12, logo: '/public/Icons/Agrobank.jpg', url: 'https://agrobank.uz/ru/person' },
    { id: 13, logo: '/public/Icons/Agent.png', url: 'https://gov.uz/oz/yoshlar' },
    { id: 14, logo: '/public/Icons/Imkon.png', url: 'https://gov.uz/oz/yoshlar' },
  ];

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="logo-slider">
      <h2>Bizning Hamkorlarimiz</h2>
      <div className="slider-container">
        <button className="nav-btn prev" onClick={() => document.querySelector('.logos').scrollBy(-200, 0)}>
          &lt;
        </button>
        
        <div className="logos">
          {companies.map((company) => (
            <div key={company.id} className="logo" onClick={() => openLink(company.url)}>
              <img src={company.logo} alt={`Company ${company.id}`} />
            </div>
          ))}
        </div>
        
        <button className="nav-btn next" onClick={() => document.querySelector('.logos').scrollBy(200, 0)}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default PartnersPage;