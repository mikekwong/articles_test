export const ADD_ARTICLE = "ADD_ARTICLE";

const initialState = {
  articles: [{ title: "React Redux Tutorial for Beginners", id: 1 }]
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default otherReducer;
