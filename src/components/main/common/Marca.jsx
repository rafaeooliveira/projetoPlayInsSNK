
export default function Marca(){

    const estilo = {
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    }

    return(
        <div style={estilo}>
        <img src="./img/logo.png" alt="Logo"/>
            <h2>Play In's SNK</h2>
        </div>
    )
}

