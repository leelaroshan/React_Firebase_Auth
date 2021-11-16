import { createContext, useContext, useEffect,useState } from "react";
import {auth} from '../utils/firebase'


const AuthContext = createContext({
    currentUser : null,
});


export const useAuth = ()=>useContext(AuthContext)




export default function AuthContextProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

const value = {
    currentUser,
}
return <AuthContextProvider value={value}>{children}
    </AuthContextProvider>





}