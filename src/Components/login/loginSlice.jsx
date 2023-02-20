export const loginUser = (user, navigate) => {
  return async function (dispatch) {
    dispatch({ type: "user/loading" });

    const response = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "user/login", payload: data.user });
      localStorage.setItem("user", data.jwt);
      console.log(data);
      navigate("/mainpage");
    } else {
      dispatch({ type: "user/error", payload: data.errors });
    }
  };
};

const initialState = {
  user: {},
  status: "idle",
  errors: [],
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "loading/user":
      return {
        ...state,
        status: "loading",
      };

    case "user/login":
      return {
        ...state,
        user: action.payload,
        status: "idle",
      };

    case "user/error":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
}

export default loginReducer;
