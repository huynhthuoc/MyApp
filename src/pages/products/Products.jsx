import React from "react"

import ShowProduct from "./ShowProduct"
import { useStoreContext } from "~/store"
//style scss
import "./style/products.scss"
const Products = () => {
    const [state, dispatch] = useStoreContext()

    return (
        <div className="products">
            <ShowProduct product={state[0]} />
        </div>
    )
}

export default Products
