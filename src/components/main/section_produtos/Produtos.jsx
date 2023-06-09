import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function Produtos(){
    return(
        <section>
           <Titulo titulo={titulosDescricoes["produtos"].titulo}/>
        </section>
    )
}