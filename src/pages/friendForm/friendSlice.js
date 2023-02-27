export const addFriend = (friend, token) => {
  return async function (dispatch) {
    dispatch({
      type: "loading/friends"
    });
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
      dispatch({
        type: "add/Friend",
        payload: data
      });
    } else {
      dispatch({
        type: "errors/friends",
        payload: data.errors
      });
    }
  };
};

export const getFriends = (token) => {
  return async function (dispatch) {
    dispatch({
      type: "loading/friends"
    })
    const response = await fetch('friends', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json()

    if (response.ok) {
      dispatch({
        type: 'get/Friends',
        payload: data
      })
    } else {
      dispatch({
        type: 'errors/friends',
        payload: data.errors
      })
    }
  }
};



export const removeFriend = (friendId, token) => {
  return async function (dispatch) {
    const response = await fetch(`/friends/${friendId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }

    })
    if (response.ok) {
      dispatch({
        type: 'remove/Friend',
        payload: friendId
      })
    }

  }
};

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

    case "remove/Friend":
      return {
        ...state,
        friends: state.friends.filter((friend) => friend.id !== action.payload),
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