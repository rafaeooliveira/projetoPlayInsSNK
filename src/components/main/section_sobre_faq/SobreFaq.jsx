import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import Titulo2 from "../common/Titulo2";

export default function SobreFaq(){
    return(
        <section>
            <div>
            <Titulo2 titulo={titulosDescricoes["sobre"].titulo}/>
            </div>
            <div>
            <Titulo titulo={titulosDescricoes["faq"].titulo}/>
            </div>
        </section>
    )
}