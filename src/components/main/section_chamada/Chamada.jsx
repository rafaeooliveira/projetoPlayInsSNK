import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Titulo from "../common/Titulo";
import Titulo2 from "../common/Titulo2";
import Tenis from "../../../img/tenis_grande.png";
import { useEffect, useState } from "react"


export default function Chamada(){

    const [urlHightlights, setRrlHightlights] = useState("");

    useEffect(()=>{
        callApiAllSportsForAdquireURLVideo();
        document.getElementById("ytplayer").click();
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
         const urlYoutube = data.media[6].sourceUrl;
         console.log(data);
         let urlFormatIframe;
         if(urlYoutube.indexOf("&") == -1){
             urlFormatIframe = "http://www.youtube.com/embed/" + urlYoutube.substring(32, urlYoutube.length)+"?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist="+urlYoutube.substring(32, urlYoutube.length);
         } else {
             urlFormatIframe = "http://www.youtube.com/embed/" + urlYoutube.substring(32, urlYoutube.indexOf("&"))+"?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist="+urlYoutube.substring(32, urlYoutube.indexOf("&"));
         }
         console.log(urlYoutube);
         console.log(urlFormatIframe);
         setRrlHightlights(urlFormatIframe);
    
    })
}
       

    return(
        <section className="callText">
            <div className="contentChamada">
                <div>
                    <Titulo titulo={titulosDescricoes.chamada.titulo}/>
                    <img src={Tenis} alt="" />
                </div>
                <Titulo2 subtitulo={titulosDescricoes.chamada.subtitulo} />
            </div>
            <div className="video-container">
                <iframe id="ytplayer"  type="text/html" onClick={console.log('click event occurred')} width="100%" height="100%" src={urlHightlights} title="NBA Top Plays" allow="autoplay"/>                
            </div>
        </section>
    )
}