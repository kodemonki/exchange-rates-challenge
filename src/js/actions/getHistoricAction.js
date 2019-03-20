import axios from "axios";

export function getHistoricAction() {
  let now = new Date();
  console.log(now);
  /*
  calculate start and end dates and pass to api
  */
  return dispatch => {
    axios
      .get(
        "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01"
      )
      .then(function(response) {
        dispatch({ type: "GET_HISTORIC_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_HISTORIC_ERROR", payload: error });
      });
  };
}
