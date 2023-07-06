import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Titulo from "../common/Titulo";
import Titulo2 from "../common/Titulo2";


import { useEffect, useState } from "react"
import { useRef } from "react";


export default function Chamada(){

    const [urlHightlights, setUrlHightlights] = useState("");
    const [opacidade, setOpacidade] = useState(0.5);
    const tirarTexto = useRef(null);

    useEffect(()=>{
        callApiAllSportsForAdquireURLVideo();
    })


    function callApiAllSportsForAdquireURLVideo() {
    const url = 'https://allsportsapi2.p.rapidapi.com/api/basketball/tournament/132/media';
    const options = {
        method: 'GET',
        headers: {
             'X-RapidAPI-Key': '04364727e8mshdc9fa4467895029p126bfejsn8cac89b7a0f1',
             'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        let urlTopFive = data.media.filter((e)=>(e.subtitle == "Top 5")).map((e)=> e.sourceUrl);

        let codeVideoYoutube;
            if(urlTopFive.indexOf("&") == -1){
                codeVideoYoutube =  urlTopFive[0].substring(32, urlTopFive[0].length);
            } else {
                codeVideoYoutube = urlTopFive[0].substring(32, urlTopFive[0].indexOf("&"));
            }

        let urlFormattedForIframe = "https://www.youtube.com/embed/"+codeVideoYoutube+"?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist="+codeVideoYoutube;
         setUrlHightlights(urlFormattedForIframe);
    
    })
    .catch(error => {
        setUrlHightlights("https://www.youtube.com/embed/jbW4f60dCNA?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=jbW4f60dCNA");
        console.log(error)
    });
}
   
    const playVideoFullView = () => {
        tirarTexto.current.classList.toggle('retirarContentChamada');
        const novaOpacidade = opacidade === 0.5 ? 1 : 0.5;
        setOpacidade(novaOpacidade);
    }   

    return (
        <section id="chamada" className="callText" >
            <button id="btnPlayHighlights" onClick={playVideoFullView} title="Assista os hightlights"><img src="./img/iconPlayWhite.png" /></button>
            <div ref={tirarTexto} className="contentChamada">
                <div className="caixaTitulo1Chamada">
                    <Titulo titulo={titulosDescricoes.chamada.titulo} />
                </div>
                <div className="caixaImagensChamada">
                    <div id="bola"></div>
                    <img id="tenis" src="./img/tenis_grande.png" />
                </div>
                <div className="caixaTitulo2Chamada">
                <Titulo2 titulo={titulosDescricoes.chamada.subtitulo} />
                </div>
            </div>
            <div className={`video-container ${opacidade === 1 ? 'video-container-alto' : 'video-container'}`}>
                <iframe id="ytplayer" type="text/html" width="100%" height="100%" src={urlHightlights} title="NBA Top Plays"/>                
            </div>
        </section>
    )
}