/**
 * Created by nikita on 23.12.16.
 */
export function setUser(nameUser) {
    console.log(nameUser);
    return {
        type: 'SET_USER',
        payload: nameUser
    }
}