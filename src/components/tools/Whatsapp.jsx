import {FloatingWhatsApp} from 'react-floating-whatsapp'



export default function Whatsapp(){
    return(
        <FloatingWhatsApp accountName="Play in's SNK" avatar="./img/logo.png" statusMessage='Online' chatMessage="Olá, seja bem vindo ao Play in's SNK, como posso ajudar?" placeholder='Digite sua mensagem' chatboxHeight={360} allowEsc allowClickAway darkMode phoneNumber='+5531971376984'/>
    )
}