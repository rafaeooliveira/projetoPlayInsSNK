import Titulo3 from "./Titulo3";
import ImgCard from '../common/ImgCard'
import Botao from "./Botao";

export default function Card({image, titulo, valor}) {


    return (
        <div>
            <div className="fundo">
                <ImgCard image={image} />
            </div>
            
            <Titulo3  titulo={titulo}/>
            <p>Valor: R${valor}</p>
            <Botao value={"Quero"} />
            

        </div>
    )

}