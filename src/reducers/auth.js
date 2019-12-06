const loginReducer = (state = true, { type }) => {
  switch (type) {
    case "LOG_IN":
      state = true;
      return state;
    case "LOG_OUT":
      state = false;
      return state;
    default:
      return state;
  }
};

export default loginReducer;
