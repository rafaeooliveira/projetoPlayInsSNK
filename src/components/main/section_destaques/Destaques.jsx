import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function Destaques(){
    return(
        <section>
            <Titulo titulo={titulosDescricoes["destaques"].titulo}/>
        </section>
    )
}