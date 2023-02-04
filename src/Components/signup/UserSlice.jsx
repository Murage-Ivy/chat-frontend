export const addUser = () => {
  return async function (dispatch) {};
};

const initialState = {
  user: {},
  status: "idle",
  errors: [],
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loading":
      return {
        ...state,
        errors: [],
        status: "loading",
      };
    case "user/signup":
      return {
        ...state,
        user: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}
