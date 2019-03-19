import axios from "axios";

export function getSearchAction(query) {
  let searchBase = query.base;
  let searchDate =
    query.targetDate.getFullYear() +
    "-" +
    (query.targetDate.getMonth() + 1) +
    "-" +
    query.targetDate.getDate();

  return dispatch => {
    axios
      .get(
        "https://api.exchangeratesapi.io/" + searchDate + "?base=" + searchBase
      )
      .then(function(response) {
        dispatch({ type: "GET_SEARCH_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_SEARCH_ERROR", payload: error });
      });
  };
}
