/**
 * Created by nikita on 27.12.16.
 */

import { SET_TAB } from '../constants/Tab'

const initialState = {
    tabTitle: [
        'Tab 1',
        'Tab 2',
        'Tab 3'
    ],
    index:0
};

export default function tab(state = initialState,action) {
 
    switch (action.type) {
        case SET_TAB:
            return { ...state, index: action.payload };
        default:
            return state;
    }
}