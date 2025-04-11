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

export default async function getProducts(): Promise<Product[]>{

    const res:Response = await fetch("https://fakestoreapi.com/products");
    const products:Product[] = await res.json();
    return products
}