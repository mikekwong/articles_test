import { combineReducers } from 'redux'
import addArticleReducer from './addArticleReducer'

export default combineReducers({
  addArticle: addArticleReducer
})
