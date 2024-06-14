export const ProductItem = ({ id, title, price, photo, onMove }) => {
    return <div>
        <img src={photo} alt="photo" />
        <p>{title}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => {onMove(id)}}>Move</button>
    </div>
}