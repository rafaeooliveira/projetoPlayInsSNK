import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import Destaque1 from '../../../img/destaque1.png'
import Destaque2 from '../../../img/destaque2.png'
import Destaque3 from '../../../img/destaque3.png'
import Card from "../common/Card";



export default function Destaques(){
    return(
        <section className="sectionMarge">
            <Titulo titulo={titulosDescricoes["destaques"].titulo}/>
            <div className="destaques">
                
            <Card image={Destaque1} titulo={"NIKE ZOOM FREAK 4"} valor={"1.899,99"}/>
                <Card image={Destaque2} titulo={"AIR PENNY 2 x Stüssy"} valor={"1.599,99"}/>
                <Card image={Destaque3} titulo={"AIR JORDAN 13"} valor={"1.899,99"} />

            </div>
        </section>
    )
}