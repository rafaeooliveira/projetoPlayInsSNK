export default function Review({image,nome,avaliacao}){

    return(
        <div>
            <img src={image} alt="" />
            <b>{nome}</b>
            <p>{avaliacao}</p>
        </div>
    )

}