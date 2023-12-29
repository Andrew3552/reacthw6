import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import React from 'react'

const FieldWrapper = ({ name, children, phone }) => {
  return (
    <div className={cx("formik-wrapper__field")}>
      <div>
        <label htmlFor={name}>{children}</label>
        <Field id={name} name={name} />
      </div>
      <ErrorMessage name={name}>
        {(msg) => <div className="formik-wrapper__error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

FieldWrapper.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.bool,
};

export default FieldWrapper;
