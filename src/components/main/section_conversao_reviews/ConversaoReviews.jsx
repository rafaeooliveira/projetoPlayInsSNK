import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function ConversaoReviews(){
    return(
        <section>
            <Titulo titulo={titulosDescricoes["conversao"].titulo}/>
        </section>
    )
}