/**
 * Created by nikita on 22.12.16.
 */
import { SET_MENU } from '../constants/Menu'

export function setMenu(index) {
    console.log(index);
    return {
        type: SET_MENU,
        payload: index
    }
}