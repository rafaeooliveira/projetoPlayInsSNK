import React from 'react';


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
    width: '135px',
    fontWeight: 'bolder',
    fontSize: '24px',
    border: '3px solid white',
    cursor: 'pointer',
    backgroundImage: `url(./img/WhatsApp.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right 10px'
}

    return(
        
        <button className="btnWhats" style={botao} onClick={handleWhatsAppClick}>{value}</button>
    )

}