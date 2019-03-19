import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Datepicker, Select, SubmitBtn } from "react-formik-ui";

export default class ExchangeRates extends React.Component {
  onSubmit(data) {
    if (data.targetDate != null && data.base != null) {
      this.props.getSearchAction(data);
    }
  }
  getBases() {
    let arr = [];
    arr.push({
      value: this.props.base,
      label: this.props.base
    });
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
      <div className="ExchangeRates">
        <Formik
          onSubmit={this.onSubmit.bind(this)}
          render={() => (
            <Form structured>
              <h1>Search</h1>
              <Datepicker
                name="targetDate"
                label="targetDate"
                placeholder="Select an Date"
                withPortal
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
        <div>
          <table className="">
            <tbody>
              {this.props.searchResults &&
                this.props.searchResults.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: "right" }}>{item.title} :</td>
                      <td style={{ textAlign: "left" }}> {item.rate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
