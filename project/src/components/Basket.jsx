import { BasketItem } from './BasketItem'

export const Basket = ({ items, onMove, onDecrement, onDelete }) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                items.map(elm => <BasketItem key={elm.id} {...elm} onMove={onMove} onDecrement={onDecrement} onDelete={onDelete}/>)
                }
            </tbody>
        </table>
    </div>
}