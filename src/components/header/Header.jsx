import Logo from "../../img/logo.png"
import Marca from "../main/common/Marca"


export default function Header(){
    return(
        <header>
            <div className="logoStyle">
            <img src={Logo} alt="Logo" />
            <h2>Play In's SNK</h2>
            </div>
        </header>
    )
}