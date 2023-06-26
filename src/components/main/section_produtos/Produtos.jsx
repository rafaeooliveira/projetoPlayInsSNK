import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import Card from "../common/ImgCard";
import BasketBall from "../../../img/tenis_basketball.png"
import LifeStyle from "../../../img/tenis_life_style.png"
import Performace from "../../../img/tenis_performace.png"
import Camisetas from "../../../img/camisetas.png"
import Moletons from "../../../img/moletons.png"
import Shorts from "../../../img/shorts.png"
import Bones from "../../../img/bones.png"
import Meias from "../../../img/meias.png"
import Faixas from "../../../img/faixas.png"
import Titulo3 from "../common/Titulo3";

export default function Produtos(){
    return(
        <section id="produtos" className="sectionMarge">
           <Titulo titulo={titulosDescricoes["produtos"].titulo}/>
           <div className="cards">
            <Titulo3 titulo={"Tênis"} />
            <Card image={BasketBall} categoryName={"Basketball"}/>
            <Card image={LifeStyle} categoryName={"LifeStyle"}/>
            <Card image={Performace} categoryName={"Performace"}/>
            <Titulo3 titulo={"Para o dia a dia"} />
            <Card image={Camisetas} categoryName={"Camisetas"}/>
            <Card image={Moletons} categoryName={"Moletons"}/>
            <Card image={Shorts} categoryName={"Shorts"}/>
            <Titulo3 titulo={"Acessórios"} />
            <Card image={Bones} categoryName={"Bonês"}/>
            <Card image={Meias} categoryName={"Meias"}/>
            <Card image={Faixas} categoryName={"Faixas"}/>
            

           </div>
        </section>
    )
}