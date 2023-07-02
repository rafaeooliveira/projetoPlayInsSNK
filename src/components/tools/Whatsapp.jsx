import {FloatingWhatsApp} from 'react-floating-whatsapp'
import Logo from "../../img/logo.png"


export default function Whatsapp(){
    return(
        <FloatingWhatsApp accountName="Play in's SNK" avatar={Logo} statusMessage='Online' chatMessage="Olá, seja bem vindo ao Play in's SNK, como posso ajudar?" placeholder='Digite sua mensagem' chatboxHeight={360} allowEsc allowClickAway darkMode phoneNumber='+5531971376984'/>
    )
}