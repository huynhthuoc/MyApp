import React from "react"

import ShowProduct from "./ShowProduct"

//style scss
import "./style/products.scss"
const Products = () => {
    // const [product, setProduct] = React.useState()

    const product = {
        banner: "banner 1 ",
        banner2: "contents ",
        banner3: "banner 3 ",
        banner4: "banner 4 ",
    }
    return (
        <div className="products">
            <ShowProduct product={product} />
        </div>
    )
}

export default Products
