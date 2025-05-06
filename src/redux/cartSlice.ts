import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../hooks/useApi';
import {toast} from 'react-hot-toast'

export type CartItem = {
    product : ProductItem;
    qty: number
}
type CartState = {
    cart: CartItem[],
    isOpen: boolean
}
const products= localStorage.getItem('cart');
console.log(products)
const initialState:CartState = {
    cart: products ? JSON.parse(products) : [],
    isOpen : false
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action:PayloadAction<CartItem>) => {
            const product = action.payload
    
            let updatedCart: CartItem[]
            const exist = state.cart.find(x => x.product.id === product.product.id);
            if(exist){
               updatedCart = state.cart.map(item => item.product.id === product.product.id ? {...item, qty: item.qty + 1} : item)
            }
            else{
               updatedCart = [...state.cart,product]
            }
            toast.success('Added To Cart')
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {...state, cart: updatedCart}
           
        },
        removeFromCart: (state,action:PayloadAction<CartItem>)=>{
            const product = action.payload
            let updatedCart: CartItem[]
            const exist2 = state.cart.find (item => item.product.id ===  product.product.id);
            if (exist2 && exist2.qty === 1){
               updatedCart = state.cart.filter(item => item.product.id !== product.product.id)
            }
            else{
               updatedCart = state.cart.map(item => item.product.id === product.product.id ? {...item, qty: item.qty - 1} : item)
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




