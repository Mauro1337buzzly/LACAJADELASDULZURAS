import React, { useState } from "react";

const ItemCount = ({ init, stock, onAdd}) => { 

    const [qty, setQty] = useState(init);

    const add = () => { 
        if(qty < stock)
        {
            setQty(qty + 1)
        }
    }

    const sub = () => { 
        if(qty > init){
        setQty(qty - 1);
        };
    }

    return (  
    <>
    <button onClick={()=> add()}> + </button>
    <button onClick={()=> sub()}> - </button>
    <span >{qty}</span>
    <button onClick={()=> onAdd(qty)}> Agregar al carrito</button>
    </> 
        )
       
    ;


};

export default ItemCount;