import { createContext, useState } from "react";

const CartContext = createContext;

const CartContextProvider = (children) =>{
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList (item)
    }
    return (
            <CartContextProvider value={{cartList, addToCart}}>
                {children}
            </CartContextProvider>
    );
}

export default CartContext;