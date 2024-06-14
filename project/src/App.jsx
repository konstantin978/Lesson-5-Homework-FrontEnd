import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'
import './App.css'

function App() {

  const [basket, setBasket] = useState([])
  const [saleApplied, setSaleApplied] = useState(false)

  const [products, setProducts] = useState([
    { id: 101, title: 'Psychology', price: 10.99, photo: 'https://images.booksense.com/images/568/458/9781465458568.jpg' },
    { id: 102, title: 'Sociology', price: 9.99, photo: 'https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg' },
    { id: 103, title: 'Biology', price: 12.99, photo: 'https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg' },
    { id: 104, title: 'Philosophy', price: 11.99, photo: 'https://images.booksense.com/images/551/458/9781465458551.jpg' },
    { id: 105, title: 'Architecture', price: 14.99, photo: 'https://bookazine.com.hk/cdn/shop/products/The_Architecture_Book_Big_Ideas_Simply_Explained_9780241415030.jpg?v=1696484182' },
    { id: 106, title: 'Literature', price: 20.99, photo: 'https://images.booksense.com/images/889/429/9781465429889.jpg' },
    { id: 107, title: 'Mythology', price: 7.99, photo: 'https://cdn11.bigcommerce.com/s-aweq463/images/stencil/1280x1280/products/48563/122757/0241301912-01-_SCLZZZZZZZ_SX500___47100.1691656983.jpg?c=2' },
    { id: 108, title: 'Business', price: 35.99, photo: 'https://images.booksense.com/images/886/475/9781465475886.jpg' }
  ])

  const moveToCart = id => {
    const found = products.find(x => x.id === id)

    const foundInBasket = basket.find(x => x.id === id)
    // console.log(foundInBasket.count2, foundInBasket.count)
    if (!foundInBasket) {
      setBasket([...basket, { ...found, count: 1, count2: 1 }])
    }
    else {
      setBasket([...basket], foundInBasket.count++)
      foundInBasket.count2 = foundInBasket.count

    }
  }

  const decrement = id => {
    const found = basket.find(x => x.id === id)
    if (found && found.count > 1) setBasket([...basket], found.count--, found.count2--)
  }

  const deleteFromCart = id => {
    setBasket(basket.filter(x => x.id !== id))
  }

  const sale = () => {
    const newBasket = basket.map(item => {
      if (item.count >= 3) {
        item.count2--
      }
      return item;
    });
    setBasket(newBasket);
    setSaleApplied(true);
  }

  return <>
    <div className="row">
      <ProductList items={products} onMove={moveToCart} />
      <div className="row2">
        <Basket items={basket} onMove={moveToCart} onDecrement={decrement} onDelete={deleteFromCart} />
        {!saleApplied && <button onClick={sale}>Sale</button>}</div>
    </div>
  </>
}

export default App
