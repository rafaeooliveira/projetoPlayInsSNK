import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import Titulo from '../common/Titulo';
import titulosDescricoes from '../../../js/titulosDescricoes.js';
import Botao from '../common/Botao';

import Destaque1 from '../../../img/destaque1.png';
import Destaque2 from '../../../img/destaque2.png';
import Destaque3 from '../../../img/destaque3.png';

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
            imagem: Destaque1,
            titulo: "NIKE ZOOM FREAK 4",
            valor: "R$1.899,99"
        },
        {
            id: 2,
            imagem: Destaque2,
            titulo: "AIR PENNY 2 x Stüssy",
            valor: "R$1.599,99"
        },
        {
            id: 3,
            imagem: Destaque3,
            titulo: "AIR JORDAN 13",
            valor: "R$1.899,99"
        },
        {
            id: 4,
            imagem: Destaque1,
            titulo: "NIKE ZOOM FREAK 4",
            valor: "R$1.899,99"
        },
        {
            id: 5,
            imagem: Destaque2,
            titulo: "AIR PENNY 2 x Stüssy",
            valor: "R$1.599,99"
        },
        {
            id: 6,
            imagem: Destaque3,
            titulo: "AIR JORDAN 13",
            valor: "R$1.899,99"
        },
        {
            id: 7,
            imagem: Destaque1,
            titulo: "NIKE ZOOM FREAK 4",
            valor: "R$1.899,99"
        },
        {
            id: 8,
            imagem: Destaque2,
            titulo: "AIR PENNY 2 x Stüssy",
            valor: "R$1.599,99"
        },
        {
            id: 9,
            imagem: Destaque3,
            titulo: "AIR JORDAN 13",
            valor: "R$1.899,99"
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