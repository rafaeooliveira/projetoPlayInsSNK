import Logo from "../../img/logo.png"

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" />
            <h2>Play In's SNK</h2>
        </header>
    )
}