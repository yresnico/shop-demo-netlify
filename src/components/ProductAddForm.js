import {Formik, Field, Form, ErrorMessage} from 'formik';
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
        alert(`Added ${values.numToAdd} ${props.productList[values.id -1].title} to cart`)
        actions.resetForm();
      }}
    >
      <Form className="ProductAddForm mt-2" >
        <label htmlFor="numToAdd">Amount</label>
        <Field id="numToAdd" 
        name="numToAdd" 
        placeholder="" 
        validate={validateNumToAdd} 
        required/>
        <ErrorMessage name="numToAdd"/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    )
}
export default ProductAddForm;