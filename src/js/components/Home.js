import React from "react";
import { Link } from "react-router-dom";

export const Home = props => {
  return (
    <div className="Home">
      <h1>Latest</h1>
      <table className="">
        <tbody>
          {props.latestRates &&
            props.latestRates.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ textAlign: "right" }}>
                    <Link
                      to={"currency/" + item.title}
                      params={{ testvalue: "hello" }}
                    >
                      {item.title}
                    </Link>{" "}
                    :
                  </td>
                  <td style={{ textAlign: "left" }}> {item.rate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
