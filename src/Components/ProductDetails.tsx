import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Product } from "./Types"

export default function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = useState<null | Product>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("http://localhost:3000/products/" + productId)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
    })

    if(!product) {
        return (<div>Loading...</div>)
    }

  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
        <p>{product.description}</p>
    </div>
  )
}