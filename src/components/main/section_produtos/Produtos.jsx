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
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y, Controller } from "swiper";
import { useState, useEffect } from "react";


//IMPLEMENTAR IMPORT JSON COM MAP

export default function Produtos() {

    const [produtos, setProdutos] = useState('')
    // const [produtosJSON, setProdutosJSON] = useState([])

    useEffect(() => {
        
        (window.innerWidth < 800 ? mobile() : desktop())

    },[])

    function mobile() {
        setProdutos(
            <>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    scrollbar={true}
                    pagination={true}>

                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Tênis"} />
                            <Card image={BasketBall} categoryName={"Basketball"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Tênis"} />

                            <Card image={LifeStyle} categoryName={"LifeStyle"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Tênis"} />
                            <Card image={Performace} categoryName={"Performace"} />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    scrollbar={true}
                    pagination={true}>

                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Para o dia a dia"} />
                            <Card image={Camisetas} categoryName={"Camisetas"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Para o dia a dia"} />
                            <Card image={Moletons} categoryName={"Moletons"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Para o dia a dia"} />
                            <Card image={Shorts} categoryName={"Shorts"} />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    scrollbar={true}
                    pagination={true}>

                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Acessórios"} />
                            <Card image={Bones} categoryName={"Bonês"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Acessórios"} />
                            <Card image={Meias} categoryName={"Meias"} />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Titulo3 titulo={"Acessórios"} />
                            <Card image={Faixas} categoryName={"Faixas"} />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </>
        )

    }

    function desktop() {

        // setProdutos(produtosJSON.map((prod, index) =>{
        //     <Card key={index} image={prod.image} categoryName={prod.name}/>
        // }))
        setProdutos(
            <>
                <div>
                    <Titulo3 titulo={"Tênis"} />

                    <Card image={BasketBall} categoryName={"Basketball"} />
                    <Card image={LifeStyle} categoryName={"LifeStyle"} />
                    <Card image={Performace} categoryName={"Performace"} />
                </div>
                <div>
                    <Titulo3 titulo={"Para o dia a dia"} />
                    <Card image={Camisetas} categoryName={"Camisetas"} />
                    <Card image={Moletons} categoryName={"Moletons"} />
                    <Card image={Shorts} categoryName={"Shorts"} />
                </div>
                <div>
                    <Titulo3 titulo={"Acessórios"} />
                    <Card image={Bones} categoryName={"Bonês"} />
                    <Card image={Meias} categoryName={"Meias"} />
                    <Card image={Faixas} categoryName={"Faixas"} />
                </div>
            </>
        )
    }

    return (
        <section id="produtos" className="sectionMarge">
            <Titulo titulo={titulosDescricoes["produtos"].titulo} />
            <div className="cards">
                {produtos}
            </div>
        </section>
    )
}