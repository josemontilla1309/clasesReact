import { useState } from "react"
import {CartContext} from "./CartContext";
import { useContext } from "react";

const linkCart = ({item}) => {
            const [itemCount, setItemCount] = useState(0);
            const test = useContext(CartContext);

          const onAdd = (qty) =>{
              alert("Tienes selecionados" + qty + " items");
              setItemCount(qty);
              test.addToCart(item);
          }
        
        };
{
    itemCount === 0
? <itemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
: <link to="./cart"/>
}

export default linkCart