/**
 * Created by nikita on 22.12.16.
 */
import { SET_USER } from '../constants/User'

const initialState = {
    nameUser: 'Sasha'
};

export default function user(state = initialState,action) {
    console.log(action);
    console.log('userReducer');
    switch (action.type) {
        case SET_USER:
            return { ...state, nameUser: action.payload };
        default:
            return state;
    }
}