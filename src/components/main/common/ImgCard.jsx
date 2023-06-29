export default function ImgCard({ image, categoryName }) {

    const cardText = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        backgroundColor: 'white',
        width: '100%',
        fontSize: '1em',
        fontWeight: 'bold',
        zIndex: 1,
        opacity: 0.6
        
}

const container = {
    position: 'relative',
    display: 'inline-block',
    margin: '10px'
}


return (
    <div style={container}>
        <img src={image} alt={categoryName} />
        <span style={cardText}>{categoryName}</span>
    </div>
)
}

ImgCard.defaultProps = {
    categoryName: '',
  };



