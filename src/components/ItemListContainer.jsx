import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);

  const { cat } = useParams();

  useEffect(() => {
    const obtenerDatos = async () => {


      const querySnapshot = await getDocs(collection(db, "productos"));
      const dataFromFirestore = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setListaProductos(dataFromFirestore);
    };
    obtenerDatos();
  }, [cat]);

  return (
    <div>
      <ItemList listaProductos={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
