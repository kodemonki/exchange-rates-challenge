import React from "react";

export const Home = props => {
  return (
    <div className="Home">
      <h1>Latest Rates</h1>
      <table className="">
        <tbody>
          {props.latestRates &&
            props.latestRates.map((item, index) => {
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
  );
};
