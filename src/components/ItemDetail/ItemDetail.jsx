import React, { useState } from 'react';
import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'




export const ItemDetail = ({data}) => {

  const [counter, setCounter] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (qty) => {
    setCounter(qty)
    addItem(data,qty)
  }
  return (
   <>
   <div className='Card' >
    <div className='Titulo'>{data.nombre}</div>
    <div className='Precio'>{data.precio+"$"}</div>
    <div className='Detalle'>{data.detail}</div>
    <img className='Imagen' src={data.image}/>
    <p className='stock' >{data.stock}</p>
    {
      counter!=0 ?
      <Link to='/cart'>
      <div className='meta' >Añadido</div></Link>
      :
      
      <ItemCount stock={10} init={counter} onAdd={onAdd}/>
    }
    

    </div>
   </>
  )
}

export default ItemDetail;