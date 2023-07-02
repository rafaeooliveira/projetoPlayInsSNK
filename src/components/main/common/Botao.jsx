import React from 'react';
import WhatsappImg from '../../../img/WhatsApp.png'

export default function Botao({value, titulo}){

    const handleWhatsAppClick = () => {
        const phoneNumber = '+5531971376984';
        const message = 'Olá, estou interessado(a) no produto destacado '+titulo;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(url, '_blank');
      }; 


const botao = {

    backgroundColor: '#40C351',
    paddingRight: '15px',
    borderRadius: '10px',
    width: '166px',
    fontWeight: 'bolder',
    fontSize: '24px',
    border: '3px solid white',
    cursor: 'pointer',
    backgroundImage: `url(${WhatsappImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right 10px'
}

    return(
        
        <button style={botao} onClick={handleWhatsAppClick}>{value}</button>
    )

}