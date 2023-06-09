import {FloatingWhatsApp} from 'react-floating-whatsapp'

export default function Whatsapp(){
    return(
        <FloatingWhatsApp accountName="Play in's SNK" statusMessage='' chatMessage="Olá, seja bem vindo ao Play in's SNK, como posso ajudar?" placeholder='Digite sua mensagem' allowEsc allowClickAway darkMode phoneNumber='+5534997982185'/>
    )
}