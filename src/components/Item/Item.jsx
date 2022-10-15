import React from "react";
import StyleItem from './Item.css'
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

  return (
    <>
    <div className="Card">
    <h2 className="Titulo">{producto.nombre}</h2>
    <h3 className="Precio">{producto.precio+"$"}</h3>
    <p className="Detalle">{producto.detail}</p>
    <img className="Imagen" src={producto.image} alt="torta" width={500}/>
    <Link to={`/Item/${producto.id}`}><button className="dtl" >Detalle</button></Link>
    </div>
   
    </>
  );
};

export default Item;
