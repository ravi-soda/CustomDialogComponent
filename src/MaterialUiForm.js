import React from "react";
import DatePicker from "./DatePicker/DatePicker";

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Datepicker</h2>
        <DatePicker />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm" // a unique identifier for this form
})(MaterialUiForm);
