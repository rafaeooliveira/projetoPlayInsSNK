import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function Galeria(){
    return(
        <section>
            <Titulo titulo={titulosDescricoes["galeria"].titulo}/>
        </section>
    )
}