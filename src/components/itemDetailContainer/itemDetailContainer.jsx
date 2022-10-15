import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

 const ItemDetailContainer = () => {

  const [data, setData ] = useState({});

  const {id} = useParams()

  useEffect(() => {
   const obtenerDatos = async () =>{
      const docSnap = await getDoc(doc(db, "productos", id)) 
      const producto = {id:id, ...docSnap.data()}


    setData(producto);
   }
  obtenerDatos();
}, [id])

  return (
    <ItemDetail data={data}/>


  )
}
 ;
export default ItemDetailContainer;