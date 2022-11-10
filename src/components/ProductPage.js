import ProductTd from './ProductLi';
import {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination';
import React from 'react';
import './ProductPage.css'
function ProductPage(props) {
    const perPage = 10
    const productList = [...props.productList.values()];
    const totalPages = Math.ceil(productList.length / perPage)
    const [page, setPage] = useState(1)
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} onClick={handlePaginationAction}>
            {number}
            </Pagination.Item>,
        );
    }
    function handlePaginationAction(e) {
        setPage(Number(e.target.text));
    }
    if(productList.length < 1) {
        return (
            <div>
                <p>
                    No products found
                </p>
            </div>
        )
    } else {
        return (
            <>
            <h1>Products</h1>
            <table className='table ProductPage'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {productList.map(product => {return (page * 10 - 10 < product.id  && product.id <= page * 10) ? (<tr key={product.id}><ProductTd  id={product.id} title={product.title} price={product.price} /></tr>) : null}
                )}
                </tbody>
            </table>
            <Pagination>{items}</Pagination>
            </>
            
        )
    }
}

export default ProductPage