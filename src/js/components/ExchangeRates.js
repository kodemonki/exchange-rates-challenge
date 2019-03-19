import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Datepicker, Select, SubmitBtn } from "react-formik-ui";

export default class ExchangeRates extends React.Component {
  onSubmit() {
    console.log("ExchangeRates");
  }
  getBases() {
    let arr = [];
    for (var i in this.props.latestRates) {
      let newObj = {
        value: this.props.latestRates[i].title,
        label: this.props.latestRates[i].title
      };
      arr.push(newObj);
    }
    return arr;
  }
  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        render={() => (
          <Form structured>
            <Datepicker
              name="targetDate"
              label="targetDate"
              placeholder="Select an Date"
            />
            <Select
              name="base"
              label="Base currency"
              placeholder="Select an Option"
              options={this.getBases()}
            />

            <SubmitBtn />
          </Form>
        )}
      />
    );
  }
}
