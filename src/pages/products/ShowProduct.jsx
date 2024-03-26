import React from "react"
import { ReactTyped } from "react-typed"

//style scss
import "./style/showproduct.scss"
const ShowProduct = ({ product }) => {
    return (
        <div className="product">
            <div className="banner">
                <img src={product.banner} alt="" />
            </div>

            <div className="description">
                <div className="description-title">
                    <h2>{product.titles.heading}</h2>
                    <p>{product.titles.title}</p>

                    <div className="description-btn">
                        <button>
                            Watch Deploy{" "}
                            <ReactTyped
                                strings={[
                                    `<b>Vercel</b> <i class="fi fi-rr-triangle"></i>`,
                                    `<b>Github</b> <i class="fi fi-brands-github"></i>`,
                                ]}
                                backSpeed={100}
                                typeSpeed={100}
                                loop={true}
                            />
                        </button>
                    </div>
                </div>

                <div className="framework">
                    <h4>Libraries Used</h4>
                    {/* {product.logos.map((item) => {
                        return <img src={item} alt="frameworks" />
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
