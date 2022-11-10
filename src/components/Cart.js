import CartRemoveButton from "./CartRemovalButton";
import ProductTd from "./ProductLi";
import React from "react";
import './Cart.css';
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
    const totalPrice = [...products.keys()].map(productID => Number(productList.get(Number([productID])).price) * Number(products.get(productID))).reduce((prev, next) => prev + next);

    return (
        <div className="Cart">
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { [...products.keys()].map(productID => (
                        <tr key={productID}><ProductTd 
                            id={productID} 
                            title={productList.get(Number([productID])).title} 
                            price={productList.get(Number([productID])).price.toLocaleString()}
                            />
                            <td>{products.get(productID)}</td>
                            <td>${(Number(products.get(productID)) * Number(productList.get(Number([productID])).price)).toLocaleString()}</td>
                            <CartRemoveButton removeFromCart={props.removeFromCart} productID={productID}/> 
                        </tr>
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