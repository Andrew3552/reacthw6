import { ReactPropTypes } from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { selectAddToCart } from "../../../../store/selectors";
import {removeCartProducts} from "../../../../store/productsSlice";
import React from 'react'

import FieldPhone from "./FieldPhone";
import FieldWrapper from "./FieldWrapper";
import Button from "../../../Button/Button";
import {checkoutSchema} from "../validation";

import '../Formik.scss';

const FormikWrapper = () => {

    const dispatch = useDispatch();

    const cartProducts = useSelector(selectAddToCart);

    const totalAmount = cartProducts.reduce((total, item) => {
        return total + item.price;
      }, 0);

    return (
        <div className="formik-wrapper">
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                age: '',
                phone: '',
                address: '',
                }}
                validationSchema={checkoutSchema}
                onSubmit={(values, {resetForm}) => {
                    console.log("Информация про клиента:", values);
                    console.log("Оформленные товары:", cartProducts);
                    resetForm();
                    dispatch(removeCartProducts());
                }}>
                    {({ errors, touched }) => (
                        <Form className="formik-wrapper__form">
                         <FieldWrapper name="firstName" children="First Name"/>
                         <FieldWrapper name="lastName" children="Last Name"/>
                         <FieldWrapper name="age" children="Age"/>
                         <FieldPhone name="phone" children="Phone"/>
                         <FieldWrapper name="address" children="Address"/>
                         <Button formikBtn type="submit" children="Order Accept"/>
                        </Form>  
                    )}
            </Formik>
            <p className="cart-page__total">Total amount: {totalAmount}$</p>
          
        </div>
    )
}

export default FormikWrapper