import React, { useState, useEffect } from "react";
import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Card from "../common/ImgCard";
import Titulo3 from "../common/Titulo3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Produtos() {
    const [produtos, setProdutos] = useState("");

    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: true,
    };

    const produtosJSON = {
        tenis: [
            {
                title: "Tênis de Basketball",
                image: "./img/tenis_basketball.png",
                category: "Basketball",
            },
            {
                title: "Tênis Lifestyle",
                image: "./img/tenis_life_style.png",
                category: "LifeStyle",
            },
            {
                title: "Tênis de Performance",
                image: "./img/tenis_performace.png",
                category: "Performace",
            },
        ],
        diaadia: [
            {
                title: "Camisetas",
                image: "./img/camisetas.png",
                category: "Camisetas",
            },
            {
                title: "Moletons",
                image: "./img/moletons.png",
                category: "Moletons",
            },
            {
                title: "Shorts",
                image: "./img/shorts.png",
                category: "Shorts",
            },
        ],
        acessorios: [
            {
                title: "Bonés",
                image: "./img/bones.png",
                category: "Bonês",
            },
            {
                title: "Meias",
                image: "./img/meias.png",
                category: "Meias",
            },
            {
                title: "Faixas",
                image: "./img/faixas.png",
                category: "Faixas",
            },
        ],
    };

    useEffect(() => {
        handleResize(); 

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleResize() {
        if (window.innerWidth < 800) {
            mobile();
        } else {
            desktop();
        }
    }

    function mobile() {
        setProdutos(
            <>
                <Swiper
                   {...swiperParams}
                >
                    {produtosJSON.tenis.map((produto, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <Titulo3 titulo={produto.title} />
                                <Card image={produto.image} categoryName={produto.category} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    {...swiperParams}
                >
                    {produtosJSON.diaadia.map((produto, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <Titulo3 titulo={produto.title} />
                                <Card image={produto.image} categoryName={produto.category} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    {...swiperParams}
                >
                    {produtosJSON.acessorios.map((produto, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <Titulo3 titulo={produto.title} />
                                <Card image={produto.image} categoryName={produto.category} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    }

    function desktop() {
        setProdutos(
            <>
                <div>
                    <Titulo3 titulo={"Tênis"} />
                    {produtosJSON.tenis.map((produto, index) => (
                        <Card key={index} image={produto.image} categoryName={produto.category} />
                    ))}
                </div>
                <div>
                    <Titulo3 titulo={"Para o dia a dia"} />
                    {produtosJSON.diaadia.map((produto, index) => (
                        <Card key={index} image={produto.image} categoryName={produto.category} />
                    ))}
                </div>
                <div>
                    <Titulo3 titulo={"Acessórios"} />
                    {produtosJSON.acessorios.map((produto, index) => (
                        <Card key={index} image={produto.image} categoryName={produto.category} />
                    ))}
                </div>
            </>
        );
    }

    return (
        <section id="produtos" className="sectionMarge">
            <Titulo titulo={titulosDescricoes["produtos"].titulo} />
            <div className="cards">{produtos}</div>
        </section>
    );
}
