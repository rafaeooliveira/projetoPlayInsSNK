import Stars from '../../../img/stars.png'

export default function Review({nome, image, avaliacao}){

    return(
        <div>
            <img src={`./img/${image}`} alt="" />
            <b>{nome}</b>
            <p>{avaliacao}</p>
            <img src={Stars} alt="" />
        </div>
    )

}