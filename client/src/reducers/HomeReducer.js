const initialState = {
  message: "Welcome",
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "WELCOME":
      return {
        ...state,
        message: action.msg
      };
    default:
      return state;
  }
};
