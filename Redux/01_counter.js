const { applyMiddleware } = require("redux");
const { createStore, combineReducers } = require("redux");
const { default: logger } = require("redux-logger");

// State
const initialState = {
  count: 0,
};

const inisialUserState = {
  users: ["Abdul Alim"],
};

// Action
// Action is a object it made by 2 things : type & payload
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};
const addUserAction = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

// Reducer for counter
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
const userReducer = (state = inisialUserState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

// Store

const rootReducer = combineReducers({
  countR: counterReducer, // counterReducer is a reducer function
  userR: userReducer      // userReducer is a reducer function
})

// for using middleware first install middleware
const store = createStore(rootReducer, applyMiddleware(logger)); 
// creating global state for rootReducer
// redux-logger middleware

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(resetAction());
store.dispatch(addUserAction("Rafid"));
