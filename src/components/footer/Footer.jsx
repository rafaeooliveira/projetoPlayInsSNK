import Marca from "../main/common/Marca"
import Facebook from '../../img/Facebook.png'
import Instagram from '../../img/Instagram.png'
import LinkedIn from '../../img/LinkedIn.png'

export default function Footer(){
    return(
        <footer>

            <Marca />
            <div>
            <div className="redesSociais">
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div> 
            </div>
                       
        </footer>
    )
}