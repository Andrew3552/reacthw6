import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { PatternFormat } from "react-number-format";
import cr from "classnames";
import React from 'react'

const FieldPhone = ({ name, children }) => {
  const [field] = useField(name);

  return (
    <div className={cr("formik-wrapper__field")}>
      <div>
        <label htmlFor={name}>{children}</label>
        <PatternFormat
          {...field}
          format="+38 (###) ###-##-##"
          allowEmptyFormatting
        />
      </div>
      <ErrorMessage name={name}>
        {(msg) => <p className="formik-wrapper__error">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

FieldPhone.PropTypes = {
  name: PropTypes.string,
};

export default FieldPhone;
