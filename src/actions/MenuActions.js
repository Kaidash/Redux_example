/**
 * Created by nikita on 22.12.16.
 */
export function setMenu(name) {
    console.log(name);
    return {
        type: 'SET_MENU',
        payload: name
    }
}