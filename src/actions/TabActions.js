/**
 * Created by nikita on 27.12.16.
 */
import { SET_TAB } from '../constants/Tab'

export function setTab(index) {
    return {
        type: SET_TAB,
        payload: index
    }
}