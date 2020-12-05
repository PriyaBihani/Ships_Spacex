const initalState = {
  ships: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_SHIPS":
      return {
        ...state,
        ships: [...action.payload]
      };
    case "GET_SEARCH_RESULTS":
      return {
        ...state,
        ships: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
