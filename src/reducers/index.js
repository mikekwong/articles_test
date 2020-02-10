import { combineReducers } from 'redux'
import addArticleReducer from './addArticleReducer'
import dataLoadedReducer from './dataLoadedReducer'

export default combineReducers({
  addArticle: addArticleReducer,
  dataLoaded: dataLoadedReducer
})
