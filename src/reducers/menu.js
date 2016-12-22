/**
 * Created by nikita on 22.12.16.
 */
const initialState = {
    name: 'menu1',
    tabs:['tab1','tab2','tab3']
};

export default function menu(state = initialState,action) {
    switch (action.type) {
        case 'SET_MENU':
            return { ...state, name: action.payload };
        default:
            return state;
    }
}