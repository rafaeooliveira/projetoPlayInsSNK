import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import { useState } from "react";
import emailJs from '@emailjs/browser'
import Review from "./Review";
import reviewsclientes from "../../../js/reviewsclientes";

export default function ConversaoReviews() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarEmail(e) {
        e.preventDefault();

        if (nome == '' || email == '' || telefone == '' || mensagem == '')
            alert("Preencha todos os campos")
        else {
            //EMAIL SEND
            const templateParams = {
                from_name: nome,
                message: mensagem,
                email: email,
                tel: telefone

            }
            emailJs.send("service_zke41p9", "template_4mlvp75", templateParams, "mMwq80vFq078Vm7Ke")
                .then((response) => {
                    console.log("EMAIL ENVIADO", response.status, response.text)
                    setNome('')
                    setEmail('')
                    setMensagem('')
                    setTelefone('')

                }, (err) => {
                    console.log("ERRO", err)
                }
                )
        }
    }

    return (
        <section id="conversaoReviews">
            <div className="containerConversaoReviews">
                <div className="conversao">
                    <div>
                        <Titulo titulo={titulosDescricoes["conversao"].titulo} />
                        <p>{titulosDescricoes["conversao"].subtitulo}</p>
                    </div>

                    <form onSubmit={enviarEmail}>
                        <label>Nome:</label>
                        <input type="text" onChange={(e) => setNome(e.target.value)} required/>
                        <label>E-mail:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
                        <label>Telefone:</label>
                        <input type="tel" onChange={(e) => setTelefone(e.target.value)} required/>
                        <label>Mensagem:</label>
                        <textarea cols="30" rows="5" onChange={(e) => setMensagem(e.target.value)}>
                        </textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>

                <div className="provaSocial">

                <div className="containerborda">
                        <Review nome={reviewsclientes[0].nome} image={reviewsclientes[0].imagem} avaliacao={reviewsclientes[0].avaliacao}/>
                        <Review nome={reviewsclientes[1].nome} image={reviewsclientes[1].imagem} avaliacao={reviewsclientes[1].avaliacao}/>
                        <Review nome={reviewsclientes[2].nome} image={reviewsclientes[2].imagem} avaliacao={reviewsclientes[2].avaliacao}/>
                    </div>
                    

                </div>
            </div>

        </section>
    )
}