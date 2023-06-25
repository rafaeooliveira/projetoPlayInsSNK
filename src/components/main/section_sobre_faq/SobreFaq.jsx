import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import Titulo2 from "../common/Titulo2";
import Logo from '../../../img/logo_faq.png'
import PerguntasRespostas from '../../../js/faq'

export default function SobreFaq() {


  
    function getFaqs() {
      return (
        PerguntasRespostas.map((faq,indice) => { return <details key={indice}><summary>{faq.pergunta}</summary><p>{faq.resposta}</p></details>})  
      )
    }


    return (
        <section className="sobreFaq">
            <div className="sobre">
                <img src={Logo} alt="" />
                <Titulo2 titulo={titulosDescricoes["sobre"].titulo} />
                <p>A PLAY IN's SNK nasceu para atender às diversas preferências e estilos, estamos atualizando constantemente a nossa coleção de sneakers, roupas e acessórios. Sempre acompanhando as últimas tendências e lançamentos desses modelos. Queremos que nossos clientes se sintam a vontade e confiantes de que encontrarão no site algo para se destacar no esporte, lazer ou na moda. Estamos super empolgados para embarcar nessa jogada com você, por isso convidamos você a explorar nossa loja online. Lembre-se: “O JOGO COMEÇA NO SEU ESTILO”. USE E SEJA PLAY IN's SNK!!!!</p>
            </div>

            <div className="faq">
                <Titulo titulo={titulosDescricoes["faq"].titulo} />
                {getFaqs()}
            </div>
        </section>
    )
}