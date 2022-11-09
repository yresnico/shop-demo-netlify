import { Button } from "react-bootstrap";
import React from "react";
function CartRemoveButton(props) {
    return (
        <td><Button
            variant="danger" 
            type="button" 
            onClick={()=> props.removeFromCart(props.productID)}
            >
                Delete
            </Button>
        </td>
    )
}
export default CartRemoveButton;