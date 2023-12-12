const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const { thunk } = require("redux-thunk");
const axios = require("axios");

// state
const initialState = {
  isloading: false,
  data: [],
  error: null,
};

// action
const loadingAction = () => {
  return {
    type: "DATA_LOADING",
  };
};
const dataAction = (data) => {
  return {
    type: "DATA_STORING",
    payload: data,
  };
};
const errorAction = (error) => {
  return {
    type: "ERROR",
    payload: error,
  };
};

// reducer base on action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "DATA_STORING":
      return {
        ...state,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(loadingAction());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(dataAction(res.data)))
      .catch((e) => dispatch(errorAction(e.message)));
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunk));

// dispatch
store.dispatch(fetchData());

// subscribe
store.subscribe(() => {
    console.log(store.getState());
})
