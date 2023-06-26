import Titulo from "../common/Titulo";
import MarcasImg from '../../../img/marcas.png'

export default function Marcas(){
    return(
        <section id="marcas">
            <div className="marcas">
              <img src={MarcasImg} alt="marcas que trabalhamos" />
            </div>
        </section>
    )
}