
import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
    const { dispatch } = useAuthContext()



    // console.log(userProfile)

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}