const initialState = false;

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return (state = true);
    case "LOG_OUT":
      return (state = false);
    default:
      return state;
  }
};

export default loginReducer;
