import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js"
import { Swiper, SwiperSlide } from 'swiper/react';



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { useState } from "react";

export default function Galeria() {

    const [showMore, setShowMore] = useState(false);

    const textJordan = 'O primeiro tênis Air Jordan foi produzido para o ex-jogador de basquete do Hall of Fame Michael Jordan' +
        'durante seu tempo com o Chicago Bulls no final de 1984 e lançado ao público em 1º de abril de 1985.' +
        'Antigos e novos se familiarizam nesta versão artesanal do design Tinker Hatfield de 1989. O couro com relevo' +
        'em grade para um toque premium, a camurça macia e as linhas de pontos extras na parte superior trazem o toque artesanal.' +
        'E um forro macio e escovado torna este AJ4 mais feliz do que uma manhã preguiçosa. Então, da próxima vez que você calçar' +
        'para completar um look inspirador, busque pelo seu novo favorito...';

    const textLivro = ' Phil Knight, o homem por trás da Nike, sempre foi uma figura envolta em mistério. Agora, neste livro franco e' +
        'surpreendente, ele conta sua história.' +
        'Aos 24 anos, depois de se formar e viajar como mochileiro pelo mundo, Knight decidiu que não seguiria um' +
        'caminho convencional. Em vez de trabalhar para uma grande corporação, iria à luta para criar algo próprio,' +
        'dinâmico e diferente.' +
        'Com 50 dólares emprestados pelo pai, ele abriu em 1963 uma empresa com uma missão simples: importar do' +
        'Japão tênis de alta qualidade e baixo custo. E mal acreditou quando conseguiu vender rapidamente todos os' +
        'calçados de suas primeiras encomendas.' +
        'Mas o caminho até tornar a Nike uma das marcas mais emblemáticas, inovadoras e rentáveis do mundo não foi' +
        'fácil, e Knight fala em detalhes dos riscos que enfrentou, dos concorrentes implacáveis e de seus muitos triunfos' +
        'e golpes de sorte.' +
        'Ele relembra a criação do nome e da logomarca – um dos poucos ícones reconhecidos em todos os cantos do' +
        'planeta –, os primeiros modelos de tênis e os contratos com grandes atletas. Também destaca as relações com' +
        'as pessoas que formariam a alma da Nike: seu ex-treinador de corrida, Bill Bowerman, e os primeiros' +
        'funcionários, um grupo de desajustados geniais que rapidamente se tornou uma família.' +
        'Com uma visão ousada e a crença no poder transformador do esporte, juntos eles criaram uma marca e uma' +
        'cultura que mudariam os parâmetros de desempenho e superação para sempre.';

    const autoplayOptions = {
        delay: 3000,
        disableOnInteraction: true,
    };

    return (
        <section id="galeria" className="sectionMarge">



            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                autoplay={autoplayOptions}
            >
                <SwiperSlide>
                    <Titulo titulo={titulosDescricoes["galeria"].titulo1} />
                    <div className="jordan">
                        <img src="./img/jordan.png" alt="Imagem do jogador Jordan" />
                        <div>
                            <p>
                                {showMore ? textJordan : `${textJordan.substring(0, 250)}`}
                                <button className="btn btn-dark" onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "Ver menos" : "Ver mais"}
                                </button>
                            </p>
                            <div className="tenis">
                                <p>Air Jordan 4
                                    <span>R$1.799,00</span></p>
                                <img src="./img/tenisGaleria.png" alt="tenis Air Jordan 4" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Titulo titulo={titulosDescricoes.galeria.titulo2} />
                    <div className="filme">
                        <iframe width="960" height="515" src="https://www.youtube.com/embed/vGpTmdOZVCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <Titulo titulo={titulosDescricoes.galeria.titulo3} />
                    <div className="livro">
                        <img src="./img/livro.jpg" alt="Livro a marca da vitória" />
                        <p>
                            {showMore ? textLivro : `${textLivro.substring(0, 250)}`}
                            <button className="btn btn-dark" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Ver menos" : "Ver mais"}
                            </button>
                        </p>

                    </div>
                </SwiperSlide>
            </Swiper>



        </section>
    )
}