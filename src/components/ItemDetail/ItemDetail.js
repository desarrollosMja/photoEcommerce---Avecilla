import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { contextoCarrito } from "../Context/CartContext"

const ItemDetail = (props) => {

    const carrito = useContext(contextoCarrito)
    
    let {id, title, categoryId, description, price, stock, pictureUrl, cantidadComprada} = props.producto

    const agregarAlCarrito = (cantidadAgregadaAlCarrito) => {    
        cantidadComprada = cantidadAgregadaAlCarrito
        carrito.addItem({id, title, categoryId, description, price, stock, pictureUrl, cantidadComprada}, cantidadAgregadaAlCarrito)
    }

    return (
        <div id="itemDetailDiv">
            <h1>{title}</h1>
            <hr/>
            <img src={pictureUrl}></img>
            <p>{description}</p>
            <h3>Precio: $ {price}</h3>
            <h4>Unidades disponibles: {stock}</h4>
            <ItemCount id ={id} stock={stock} initial={1} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default ItemDetail