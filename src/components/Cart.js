import { Button } from "react-bootstrap";
import ProductTd from "./ProductLi";
import React from "react";
function Cart(props) {
    const products = props.inCart;
    const productList = props.productList;
    if(products.size < 1 ) {
        return (
            <div>
                <h1>
                    No Products in cart
                </h1>
            </div>
        )
    }
    if(productList.length < 1) {
        return (
            <div>
                <h1>
                    Error retrieving products
                </h1>
            </div>
        )
    }
    //Calculated the total price by going over each item in the cart, multiplying its price
    //by the quantity and storing these sums into an array, then adding these sums together
    const totalPrice = [...products.keys()].map(productID => Number(productList[productID -1].price) * Number(products.get(productID))).reduce((prev, next) => prev + next);

    return (
        <div className="Cart">
            <table className="table">
                <thead>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </thead>
                <tbody>
                    { [...products.keys()].map(productID => (
                        <>
                            <tr key={productID}>
                                <ProductTd 
                                id={productID} 
                                title={productList[productID -1].title} 
                                price={productList[productID -1].price.toLocaleString()}
                                />
                                <td>{products.get(productID)}</td>
                                <td>${(Number(products.get(productID)) * Number(productList[productID - 1].price)).toLocaleString()}</td>
                                <td><Button 
                                    variant="danger" 
                                    type="button" 
                                    onClick={()=> props.removeFromCart(productID)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        </>
                    ))

                    }
                </tbody>
            </table>
            <div>
                Total: ${totalPrice.toLocaleString()}
            </div>
        </div>
    )

}

export default Cart;