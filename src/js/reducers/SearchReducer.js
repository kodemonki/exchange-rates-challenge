const initialState = {
  searchResults: null
};

const searchReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "GET_SEARCH_RESPONSE":
      //console.log("GET_SEARCH_RESPONSE", action.payload);
      newState = { ...state };
      let newRates = [];
      for (var key in action.payload.data.rates) {
        newRates.push({ title: key, rate: action.payload.data.rates[key] });
      }
      newState.searchResults = newRates;
      break;
    case "GET_SEARCH_ERROR":
      console.log("GET_SEARCH_ERROR", action.payload);
      break;
    default:
    // do nothing
  }
  return newState;
};

export default searchReducer;
