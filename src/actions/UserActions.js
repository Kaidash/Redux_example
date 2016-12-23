/**
 * Created by nikita on 23.12.16.
 */
import { SET_USER } from '../constants/User'

export function setUser(nameUser) {
    console.log(nameUser);
    return {
        type: SET_USER,
        payload: nameUser
    }
}