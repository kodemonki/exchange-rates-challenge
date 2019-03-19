const initialState = {
  rates: null,
  date: null,
  base: null
};

const latestReducer = (state = initialState, action) => {
  let newState = state;
  //console.log(state);
  switch (action.type) {
    case "GET_LATEST_RESPONSE":
      console.log("GET_LATEST_RESPONSE", action.payload);

      //newState = { ...state };
      newState = Object.assign({}, state);
      let newRates = [];
      newRates.push({ title: action.payload.data.base, rate: 1 });
      for (var key in action.payload.data.rates) {
        newRates.push({ title: key, rate: action.payload.data.rates[key] });
      }
      newState.rates = newRates;
      newState.date = action.payload.data.date;
      newState.base = action.payload.data.base;
      break;
    case "GET_LATEST_ERROR":
      console.log("GET_LATEST_ERROR", action.payload);
      break;
  }
  //console.log(newState);
  return newState;
};

export default latestReducer;
