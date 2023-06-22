import titulosDescricoes from "../../../js/titulosDescricoes.js";
import Titulo from "../common/Titulo";
import Titulo2 from "../common/Titulo2";
import Tenis from "../../../img/tenis_grande.png";
import { useState } from "react"


export default function Chamada(){

    const [urlHightlights, setRrlHightlights] = useState("");


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
         const urlYoutube = data.media[0].sourceUrl;
         const urlFormatIframe = "http://www.youtube.com/embed/" + urlYoutube.substring(32, urlYoutube.indexOf("&"))+"?&autoplay=1";
         console.log(urlYoutube);
         console.log(urlFormatIframe);
         setRrlHightlights(urlFormatIframe);
    
    })
       

    return(
        <section className="callText">
            <div className="contentChamada">
                <div>
                    <Titulo titulo={titulosDescricoes.chamada.titulo}/>
                    <img src={Tenis} alt="" />
                </div>
                <Titulo2 subtitulo={titulosDescricoes.chamada.subtitulo} />
            </div>
            <div className="iframe">
                <iframe id="ytplayer" type="text/html" width="100%" height="100%" src={urlHightlights} title="NBA Top Plays" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>                
            </div>
        </section>
    )
}