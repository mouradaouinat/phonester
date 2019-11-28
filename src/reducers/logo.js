const initialState = {
  logo: "phonester",
  logoColor: "#ffffff"
};

const logoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGO_CHANGE":
      return { ...state, logo: payload };
    case "LOGO_COLOR_CHANGE":
      console.log(payload);
      return { ...state, logoColor: payload };
    default:
      return { ...state };
  }
};

export default logoReducer;
