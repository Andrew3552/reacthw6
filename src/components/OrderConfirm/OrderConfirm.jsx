import ProductConfirm from "./ProductConfirm/ProductConfirm";
import FormikWrapper from "./Formik/components/FormikWrapper";
import Container from "../Helper/Container";
import React from 'react'

import "./OrderConfirm.scss";
const OrderConfirm = () => {
  return (
    <Container>
      <div className="order-confirm">
        <h2 className="product-confirm__title">Confirm Your Order</h2>
        <div className="order-confirm__wrapper">
          <ProductConfirm />
          <FormikWrapper />
        </div>
      </div>
    </Container>
  );
};

export default OrderConfirm;
