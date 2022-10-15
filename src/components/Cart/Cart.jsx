import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import StyleCart from "./Cart.css";
import "bootstrap/dist/css/bootstrap.css";
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Cart = (producto) => {
  const { cartList, removeItem, clear } = useContext(CartContext);

  const createOrder = async () => {
    const itemsForDB = cartList.map(item => ({
      id: item.id,
      tittle: item.nombre,
      price: item.precio,
      qty: item.qty
    }))
    let order = {
      buyer : {
        name : "pepito",
        email :"pepitopepin@gmail.com",
        phone : "1149304093"

      },
      items: itemsForDB,
      date: serverTimestamp(),
      

    }
    const newOrderRef = doc(collection(db, "orders"))
   await setDoc(newOrderRef, order)

   cartList.forEach(async (item) => {
    const itemRef = doc(db, "productos", item.id );
    await updateDoc(itemRef, {
      stock : increment (-item.qty)
      
    });

   })

   clear();

   alert('Su orden de compra ha sido creada, este es su ID de compra' + newOrderRef.id)
  }

  return (
    <div className="carrito">
    <h2>carrito</h2> 
    <button onClick={clear} >Borrar Todo</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td> {item.precio}  </td>
              <td> {item.qty}  </td>
              <td> {(item.precio*item.qty)}</td>
              <td><button onClick={()=>{removeItem(item.id)}} >Borrar Producto</button></td>
            </tr>
          ))}
        </tbody>
        <td><button onClick={createOrder} >Comprar</button></td>
      </table>
    </div>
  );
};

export default Cart;
