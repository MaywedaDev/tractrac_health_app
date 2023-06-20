
export const useLocalStorage = (userCreds) => {
    if(userCreds){
        localStorage.setItem('user', JSON.stringify(userCreds))
        return {user: userCreds}
    } else {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
}