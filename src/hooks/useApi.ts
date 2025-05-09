import { useState,useEffect } from "react";

export interface ProductItem{
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
    products: ProductItem[],
    getProducts: ()=> Promise <void>,
    loading: boolean
}{
    const [products,setProducts] = useState<ProductItem[]>([]);
    const [loading,setLoading] = useState<boolean>(true)

    async function getProducts():Promise<void>{
        const res:Response = await fetch('https://fakestoreapi.com/products');
        const item:ProductItem[] = await res.json();
        setProducts(item)
        setLoading(false)
    }
    useEffect(()=>{
        getProducts()
    },[])

    return{
        products,
        getProducts,
        loading,
    }
}