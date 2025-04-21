import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id : string;
  title: string;
  price: number;
  qty: number;
  image:string;
}
type CartState = {
    cart: CartItem[],
    isOpen: boolean
}
const products= localStorage.getItem('cart');

const initialState:CartState = {
    cart: products ? JSON.parse(products) : [],
    isOpen : true
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action: PayloadAction<CartItem>) => {
            const product = action.payload
            let updatedCart: CartItem[]
            const exist = state.cart.find(x => x.id == product.id);
            if(exist){
               updatedCart = state.cart.map(item => item.id == product.id ? {...item, qty: item.qty + 1, price: item.price * (item.qty + 1)} : item)
            }
            else{
               updatedCart = [...state.cart,{...product, qty:1}]
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {...state, cart: updatedCart}
        },
        removeFromCart: (state,action:PayloadAction<CartItem>)=>{
            const product = action.payload
            let updatedCart: CartItem[]
            const exist2 = state.cart.find (item => item.id == product.id);
            if (exist2 && exist2.qty === 1){
               updatedCart = state.cart.filter(item => item.id !== product.id)
            }
            else{
               updatedCart = state.cart.map(item => item.id === product.id ? {...item, qty: item.qty - 1, price: product.price * (item.qty - 1)} : item)
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {...state, cart: updatedCart}
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    }
});

export const { addToCart, removeFromCart ,toggleCart} = cartSlice.actions;
export default cartSlice.reducer;




