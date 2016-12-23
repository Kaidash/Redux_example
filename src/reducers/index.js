/**
 * Created by nikita on 22.12.16.
 */
import { combineReducers } from 'redux'
import menu from './menu'
import user from './user'


export default combineReducers({
  menu,
  user
})