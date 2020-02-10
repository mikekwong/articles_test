import { FETCH_SUCCESS, FETCH_DATA, FETCH_FAILURE } from "../constants";

const initialState = {
  remoteArticles: [],
  isLoading: false,
  error: {}
};

const dataLoadedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        remoteArticles: [...state.remoteArticles, ...action.payload],
        isLoading: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default dataLoadedReducer;
