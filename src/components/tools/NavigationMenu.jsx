import React, { useState, useEffect } from 'react';

export default function NavigationMenu() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className="navigation-menu">
      {currentSection !== 'chamada' && (
        <div className='barra-menu-navegation' />
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'chamada' ? 'active' : ''}>
          <a href="#chamada" title='Topo' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'produtos' ? 'active' : ''}>
          <a href="#produtos" title='Nossos Produtos' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'destaques' ? 'active' : ''}>
          <a href="#destaques" title='Destaques' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'galeria' ? 'active' : ''}>
          <a href="#galeria" title='Galeria' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'marcas' ? 'active' : ''}>
          <a href="#marcas" title='Marcas' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'sobreFaq' ? 'active' : ''}>
          <a href="#sobreFaq" title='Sobre e FAQ' />
        </li>
      )}
      {currentSection !== 'chamada' && (
        <li className={currentSection === 'conversaoReviews' ? 'active' : ''}>
          <a href="#conversaoReviews" title='Mensagem e Reviews' />
        </li>
      )}
    </ul>
  );
}