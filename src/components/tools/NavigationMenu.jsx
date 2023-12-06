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
      {currentSection !== 'chamada' && !!currentSection && (
        <div className='barra-menu-navegation' />
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'chamada' ? 'active' : ''}>
          <a href="#chamada" title='Topo' accesskey="1"/>
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'produtos' ? 'active' : ''}>
          <a href="#produtos" title='Nossos Produtos' accesskey="2"/>
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'destaques' ? 'active' : ''}>
          <a href="#destaques" title='Destaques' accesskey="3" />
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'galeria' ? 'active' : ''}>
          <a href="#galeria" title='Galeria' accesskey="4"/>
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'marcas' ? 'active' : ''}>
          <a href="#marcas" title='Marcas' accesskey="5" />
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'sobreFaq' ? 'active' : ''}>
          <a href="#sobreFaq" title='Sobre e FAQ' accesskey="6"/>
        </li>
      )}
      {currentSection !== 'chamada' && !!currentSection && (
        <li className={currentSection === 'conversaoReviews' ? 'active' : ''}>
          <a href="#conversaoReviews" title='Mensagem e Reviews' accesskey="7"/>
        </li>
      )}
    </ul>
  );
}
