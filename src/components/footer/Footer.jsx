import Marca from "../main/common/Marca"

export default function Footer(){
    return(
        <footer>

            <Marca />
            <div>
            <div className="redesSociais">
                <img src="./img/Facebook.png" alt="" />
                <img src="./img/Instagram.png" alt="" />
                <img src="./img/LinkedIn.png" alt="" />
            </div> 
            </div>
                       
        </footer>
    )
}