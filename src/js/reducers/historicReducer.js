const initialState = {
  historicResults: null,
  base: null
};

const historicReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "GET_HISTORIC_RESPONSE":
      console.log("GET_HISTORIC_RESPONSE", action.payload);
      /*
      todo process returned historic data
      */
      break;
    case "GET_HISTORIC_ERROR":
      console.log("GET_HISTORIC_ERROR", action.payload);
      break;
    default:
    // do nothing
  }
  return newState;
};

export default historicReducer;
