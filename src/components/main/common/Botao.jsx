import WhatsappImg from '../../../img/WhatsApp.png'

export default function Botao({value}){

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

        <button style={botao}><a href="www.google.com">{value}</a></button>
    )

}