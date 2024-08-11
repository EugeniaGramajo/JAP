//Actions
export const loadData = (data) => ({ type: "LOAD_DATA", payload: data });
export const loadDataError = (error) => ({ type: "LOAD_DATA_ERROR", payload: error });

//Initial State
const initialState = {
  data: null,
  error: null,
};

//Reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, data: action.payload, error: null };
    case "LOAD_DATA_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


//store
export const store = Redux.createStore(dataReducer);