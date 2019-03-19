import axios from "axios";

export function getLatestAction() {
  return dispatch => {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(function(response) {
        dispatch({ type: "GET_LATEST_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_LATEST_ERROR", payload: error });
      });
  };
}
