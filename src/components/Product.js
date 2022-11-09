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
            {productList[id - 1].title ? <h1>{productList[id - 1].title}</h1>: null}
            {productList[id - 1].images[0] ? <Image className="d-block " fluid src={productList[id - 1].images[0]} /> : null}
            {productList[id - 1].price ? <span>Price: ${productList[id - 1].price.toLocaleString()}</span>: null} 
            <ProductAddForm productList={props.productList} id={id} addToCart={props.addToCart} />
        </div>
    )
}

export default Product;