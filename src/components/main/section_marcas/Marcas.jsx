import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"

export default function Marcas(){
    return(
        <section>
              <Titulo titulo={titulosDescricoes["marcas"].titulo}/>
        </section>
    )
}