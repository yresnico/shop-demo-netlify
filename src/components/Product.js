import Image from 'react-bootstrap/Image'
import { useParams } from 'react-router-dom';
import ProductAddForm from './ProductAddForm';
import React from 'react';
function Product(props) {
    const {id} = useParams();
    const productList = props.productList;
    
    if(productList.length < 1) {
        return (
            <h1>No product Found</h1>
        )
    }
    return (
        
        <div className="Product">
            {productList.get(Number(id)).title ? <h1>{productList.get(Number(id)).title}</h1>: null}
            {productList.get(Number(id)).thumbnail ? <Image className="d-block " fluid src={productList.get(Number(id)).thumbnail} /> : null}
            {productList.get(Number(id)).description ? <p>{productList.get(Number(id)).description}</p>: null}
            {productList.get(Number(id)).price ? <span>Price: ${productList.get(Number(id)).price.toLocaleString()}</span>: null} 
            <ProductAddForm productList={props.productList} id={id} addToCart={props.addToCart} />
        </div>
    )
}

export default Product;