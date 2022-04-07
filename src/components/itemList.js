const itemContein = (props) => {
    return (
        <>
        <div className="itemContein">
            <img src={props.thumbnail}/>
            <h3>Nombre: {props.name}</h3>
            <p>Marca: {props.brand}</p>
            <p>Talla: {props.size}</p>
            <h4>Precio: {props.price}</h4>
            <button onClick={incrementPlus}>Like</button><button onClick={incrementMinus}>Dislike</button>
        </div>
        </>
    )
}

export default itemContein;
