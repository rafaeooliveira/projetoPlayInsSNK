import Chamada from "./section_chamada/Chamada";
import ConversaoReviews from "./section_conversao_reviews/ConversaoReviews";
import Destaques from "./section_destaques/Destaques";
import Galeria from "./section_galeria/Galeria";
import Marcas from "./section_marcas/Marcas";
import Produtos from "./section_produtos/Produtos";
import SobreFaq from "./section_sobre_faq/SobreFaq";

export default function Main(){
    return(
        <main>
            <Chamada/>
            <Produtos/>
            <Destaques/>
            <Galeria/>
            <Marcas/>
            <SobreFaq/>
            <ConversaoReviews/>
            
        </main>
    )
}