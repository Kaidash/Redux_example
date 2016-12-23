/**
 * Created by nikita on 22.12.16.
 */
import { SET_MENU } from '../constants/Menu'

export function setMenu(name) {
    console.log(name);
    return {
        type: SET_MENU,
        payload: name
    }
}