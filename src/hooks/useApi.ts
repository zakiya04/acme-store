import { useState,useEffect } from "react";

export interface Product{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export function useProducts():{
    products: Product[],
    getProducts: ()=> Promise <void>
}{
    const [products,setProducts] = useState<Product[]>([]);

    async function getProducts():Promise<void>{
        const res:Response = await fetch("https://fakestoreapi.com/products");
        const item:Product[] = await res.json();
        setProducts(item)
    }
    useEffect(()=>{
        getProducts()
    },[])

    return{
        products,
        getProducts,
    }
}