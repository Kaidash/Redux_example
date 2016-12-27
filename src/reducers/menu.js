/**
 * Created by nikita on 22.12.16.
 */

import { SET_MENU } from '../constants/Menu'

const initialState = {
    menuTabs: [
        'Menu 1',
        'Menu 2',
        'Menu 3'
    ],
    index:1
};

export default function menu(state = initialState,action) {
    console.log(action);
    console.log('menuReducer');
    switch (action.type) {
        case SET_MENU:
            return { ...state, index: action.payload };
        default:
            return state;
    }
}