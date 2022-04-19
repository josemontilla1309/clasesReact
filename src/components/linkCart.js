import { useState } from "react"

const linkCart = ({item}) => {
            const [itemCount, setItemCount] = useState(0);

          const onAdd = (qty) =>{
              alert("Tienes selecionados" + qty + " items");
              setItemCount(qty);
          }
        
        };
{
    itemCount === 0
? <itemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
: <link to="./cart"/>
}

export default linkCart