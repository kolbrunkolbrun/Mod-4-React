import React from "react";

function Product (Props) {
    return (
        <div className="products">
        <h1>{Props.product.name}</h1>
        <p>{Props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} {Props.product.description}</p>
        </div>
    )
}

export default Product