export const addFriend = (friend, token) => {
  return async function (dispatch) {
    dispatch({ type: "loading/friends" });
    const response = await fetch("friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(friend),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "add/Friend", payload: data });
    } else {
      dispatch({ type: "errors/friends", payload: data.errors });
    }
  };
};

export const getFriends = () => {};

export const removeFriend = () => {};

const initialState = {
  friends: [],
  status: "idle",
  errors: [],
};

function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case "loading/friends":
      return {
        ...state,
        status: "loading",
      };

    case "add/Friend":
      return {
        ...state,
        friends: [...state.friends, action.payload],
        status: "idle",
      };

    case "get/Friends":
      return {
        ...state,
        friends: action.payload,
        status: "idle",
      };

    case "errors/friends":
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}

export default friendsReducer;
