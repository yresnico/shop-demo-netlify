import {Formik, Field, Form, ErrorMessage} from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
function ProductAddForm(props) {
    function validateNumToAdd(value) {
        let error;
        if(!value) {
          error = 'Amount is required';
        } else if(!Number.isInteger(Number(value)) || Number(value) < 1) {
          error = 'Amount is invalid'
        } 
        return error;
    }

    return (
    <Formik
      initialValues={{
        numToAdd: '',
        id: props.id
      }}
      onSubmit={ (values, actions) => {
        props.addToCart(values.id, Number(values.numToAdd));
        alert(`Added ${values.numToAdd} ${props.productList.get(Number([values.id])).title}${values.numToAdd > 1? 's': ''} to cart.\n` +
        `Total price of added products is $${(values.numToAdd * props.productList.get(Number([values.id])).price).toLocaleString()}`);
        actions.resetForm();
      }}
    >
            {({values}) => (
      <Form className="ProductAddForm mt-2" >
        <label htmlFor="numToAdd">Amount</label>
        {' '}
        <Field id="numToAdd" 
        type="number"
        name="numToAdd" 
        placeholder="" 
        validate={validateNumToAdd} 
        required/>
        <output className='ms-1'>${(((Number.isInteger(Number(values.numToAdd)) && Number(values.numToAdd) > 0) ? values.numToAdd : 0) * props.productList.get(Number([values.id])).price).toLocaleString()}</output>
        <Button className='ms-3' variant='primary' type="submit">Add to Cart</Button>
        <div className="d-block text-danger">
          <ErrorMessage name="numToAdd"/>
        </div> 
      </Form>)}
    </Formik>
    )
}
export default ProductAddForm;