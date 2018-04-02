const initialState = {
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UNMOUNT":
      return {
        ...state,
        message: action.msg
      };

    default:
      return state;
  }
};
