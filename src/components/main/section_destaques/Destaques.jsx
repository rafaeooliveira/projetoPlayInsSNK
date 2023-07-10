import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import Titulo from '../common/Titulo';
import titulosDescricoes from '../../../js/titulosDescricoes.js';
import Botao from '../common/Botao';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Destaques() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 800) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const swiperParams = {
        slidesPerView: slidesPerView,
        spaceBetween: 10,
        navigation: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    };

    const produtos = [
        {
            id: 1,
            imagem: "./img/destaque1.png",
            titulo: "NIKE ZOOM FREAK 4",
            valor: "R$1.899,99"
        },
        {
            id: 2,
            imagem: "./img/destaque2.png",
            titulo: "AIR PENNY 2 x Stüssy",
            valor: "R$1.599,99"
        },
        {
            id: 3,
            imagem: "./img/destaque3.png",
            titulo: "AIR JORDAN 13",
            valor: "R$1.899,99"
        },
        {
            id: 4,
            imagem: "./img/destaque4.png",
            titulo: "NIKE ZION 2 (MOVE IN SILENCE)",
            valor: "R$999,99"
        },
        {
            id: 5,
            imagem: "./img/destaque5.png",
            titulo: "AIR JORDAN LEGACY 312 LOW",
            valor: "R$1.399,99"
        },
        {
            id: 6,
            imagem: "./img/destaque6.png",
            titulo: "TATUM 1 (BARBESHOP)",
            valor: "R$999,99"
        },
        {
            id: 7,
            imagem: "./img/destaque7.png",
            titulo: "REGATA GOLDEN STATE WARRIORS ",
            valor: "R$649,99"
        },
        {
            id: 8,
            imagem: "./img/destaque8.png",
            titulo: "CURRY FLOW 10 ",
            valor: "R$1.599,99"
        },
        {
            id: 9,
            imagem: "./img/destaque9.png",
            titulo: "JORDAN STADIUM 90(SAIL)",
            valor: "R$1.199,99"
        },
        {
            id: 10,
            imagem: "./img/destaque10.png",
            titulo: "BONÉ BOSTON CELTICS",
            valor: "R$149,99"
        },
        {
            id: 11,
            imagem: "./img/destaque11.png",
            titulo: "AIR JORDAN FLIGHT ORIGIN 4",
            valor: "R$1.299,99"
        },
        {
            id: 12,
            imagem: "./img/destaque12.png",
            titulo: "NIKE JA MORANT 1 \"TRIVIA\"",
            valor: "R$1.099,99"
        },
        {
            id: 13,
            imagem: "./img/destaque13.png",
            titulo: "NIKE LEBRON XX (PINK)",
            valor: "R$1.299,99"
        }
    ];

    return (
        <section id="destaques" className="sectionMarge">
            <Titulo titulo={titulosDescricoes['destaques'].titulo} />
            <Swiper {...swiperParams}>
                {produtos.map((produto) => (
                    <SwiperSlide key={produto.id}>
                        <div className="cardDestaques">
                            <div className="caixaImgCard">
                                <img src={produto.imagem} alt={`Destaque ${produto.id}`} />
                            </div>
                            <h2>{produto.titulo}</h2>
                            <p>Valor: {produto.valor}</p>
                            <Botao value="Quero" titulo={produto.titulo} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}