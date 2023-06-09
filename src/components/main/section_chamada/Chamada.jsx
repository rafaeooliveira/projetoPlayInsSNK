import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function Chamada(){
    return(
        <section>
            <Titulo titulo={titulosDescricoes["chamada"].titulo}/>
        </section>
    )
}