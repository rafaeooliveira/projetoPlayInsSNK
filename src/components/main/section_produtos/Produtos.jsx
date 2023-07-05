import React, { useState, useEffect } from "react";
import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Card from "../common/ImgCard";
import BasketBall from "../../../img/tenis_basketball.png";
import LifeStyle from "../../../img/tenis_life_style.png";
import Performace from "../../../img/tenis_performace.png";
import Camisetas from "../../../img/camisetas.png";
import Moletons from "../../../img/moletons.png";
import Shorts from "../../../img/shorts.png";
import Bones from "../../../img/bones.png";
import Meias from "../../../img/meias.png";
import Faixas from "../../../img/faixas.png";
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
                image: BasketBall,
                category: "Basketball",
            },
            {
                title: "Tênis Lifestyle",
                image: LifeStyle,
                category: "LifeStyle",
            },
            {
                title: "Tênis de Performance",
                image: Performace,
                category: "Performace",
            },
        ],
        diaadia: [
            {
                title: "Camisetas",
                image: Camisetas,
                category: "Camisetas",
            },
            {
                title: "Moletons",
                image: Moletons,
                category: "Moletons",
            },
            {
                title: "Shorts",
                image: Shorts,
                category: "Shorts",
            },
        ],
        acessorios: [
            {
                title: "Bonés",
                image: Bones,
                category: "Bonês",
            },
            {
                title: "Meias",
                image: Meias,
                category: "Meias",
            },
            {
                title: "Faixas",
                image: Faixas,
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
