import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Titulo from "../common/Titulo";
import Titulo2 from "../common/Titulo2";
import Tenis from "../../../img/tenis_grande.png";
import IconPlayWhite from "../../../img/iconPlayWhite.png";

import { useEffect, useState } from "react"
import { useRef } from "react";


export default function Chamada(){

    const [urlHightlights, setUrlHightlights] = useState("");
    const [opacidade, setOpacidade] = useState(0.5);
    const tirarTexto = useRef(null);

    useEffect(()=>{
        //callApiAllSportsForAdquireURLVideo();
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

        let urlFormattedForIframe = "http://www.youtube.com/embed/"+codeVideoYoutube+"?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist="+codeVideoYoutube;

         console.log(data);
         console.log(urlTopFive);
         console.log(urlFormattedForIframe);

         setUrlHightlights(urlFormattedForIframe);
    
    })
}
   
    const playVideoFullView = () => {
        console.log("CLICK");
        tirarTexto.current.classList.toggle('retirarContentChamada');
        const novaOpacidade = opacidade === 0.5 ? 1 : 0.5;
        console.log(novaOpacidade);
        setOpacidade(novaOpacidade);

    }   

    return(
        <section className="callText" >  
            <button id="btnPlayHighlights" onClick={playVideoFullView} title="Assista os hightlights"><img src={IconPlayWhite}/></button>
            <div ref={tirarTexto} className="contentChamada">
                    <div className="caixaTitulo1Chamada">
                        <Titulo titulo={titulosDescricoes.chamada.titulo}/>
                    </div>
                    <div className="caixaImagensChamada">
                        <div id="bola"></div>
                        <img id="tenis" src={Tenis}/>   
                    </div>
                    <div className="caixaTitulo2Chamada">
                    <Titulo2 subtitulo={titulosDescricoes.chamada.subtitulo} />
                    </div>
            </div>
            <div className={`video-container ${opacidade === 1 ? 'video-container-alto' : 'video-container'}`}>
                <iframe id="ytplayer"  type="text/html" width="100%" height="100%" src="http://www.youtube.com/embed/9GpO-dd-Amg&ab_channel=NBA?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=9GpO-dd-Amg&ab_channel=NBA" title="NBA Top Plays"/>                
            </div>
        </section>
    )
}