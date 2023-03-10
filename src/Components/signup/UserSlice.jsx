export const addUser = (user, alertSuccess) => {
  return async function (dispatch) {
    dispatch({ type: "user/loading" });
    const response = await fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: { accept: "application/json" },
      body: user,
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "user/signup", payload: data.user });
      localStorage.setItem("user", data.jwt);
    } else {
      dispatch({ type: "user/errors", payload: data.errors });
    }
  };
};



export const getUser = (token) => {
  return async function (dispatch) {
    dispatch({ type: "user/loading" });
    const response = await fetch("");
  };
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

    case "user/errors":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}
