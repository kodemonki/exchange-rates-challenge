import React from "react";
import ReactDOM from "react-dom";

import { ExchangeRates } from "./ExchangeRates";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<ExchangeRates />", div);
  ReactDOM.unmountComponentAtNode(div);
});
