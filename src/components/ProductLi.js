import { Link } from "react-router-dom";
import React from "react";
function ProductTd(props) {
    return (
        <>
            <td>
            <Link className="ProductTd-product" to={`/products/${props.id}`}>{props.title}</Link>
            </td> 
            <td>
            <span className="ProductTd-price">${props.price.toLocaleString()}</span>
            </td>
        </>
    )
}
export default ProductTd;