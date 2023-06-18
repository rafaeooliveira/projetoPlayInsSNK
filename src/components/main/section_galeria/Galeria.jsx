import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import ImgCard from "../common/ImgCard"
import Jordan from '../../../img/jordan.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y, Controller } from "swiper";

export default function Galeria() {

    return (
        <section className="sectionMarge">

            <Titulo titulo={titulosDescricoes["galeria"].titulo} />

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                scrollbar={true}
                pagination={true}
            
            >
                <SwiperSlide>
                    <div>
                        <ImgCard image={Jordan} />
                        <div>
                            <p>O primeiro tênis Air Jordan foi produzido para o ex-jogador de basquete do Hall of Fame Michael Jordan
                                durante seu tempo com o Chicago Bulls no final de 1984 e lançado ao público em 1º de abril de 1985.
                                Antigos e novos se familiarizam nesta versão artesanal do design Tinker Hatfield de 1989. O couro com relevo
                                em grade para um toque premium, a camurça macia e as linhas de pontos extras na parte superior trazem o toque artesanal.
                                E um forro macio e escovado torna este AJ4 mais feliz do que uma manhã preguiçosa. Então, da próxima vez que você calçar
                                para completar um look inspirador, busque pelo seu novo favorito...
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>



        </section>
    )
}