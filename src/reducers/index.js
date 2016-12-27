/**
 * Created by nikita on 22.12.16.
 */
import { combineReducers } from 'redux'
import menu from './menu'
import user from './user'
import tab from './tab'



export default combineReducers({
  menu,
  user,
  tab
})