import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Titulo from "../common/Titulo";
import Titulo2 from "../common/Titulo2";
import Tenis from "../../../img/tenis_grande.png";

export default function Chamada(){
    return(
        <section className="callText">
            <div>
                <div>
                    <Titulo titulo={titulosDescricoes.chamada.titulo}/>
                    <img src={Tenis} alt="" />
                </div>
                <Titulo2 subtitulo={titulosDescricoes.chamada.subtitulo} />
            </div>
        </section>
    )
}