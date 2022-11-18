import Axios from 'axios';
import React, {useState, useContext} from 'react';


const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}
export default function AuthProvider({children}){
        const [currentUser, setCurrentUser] = useState(-1);
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        

        function signup(accountDetails){
            // Signup here
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postSignup.php", accountDetails).then((response) =>{
                console.log(response.data);
            }).catch((error) =>{
                console.log(error);
            });

        }

        function login(username, password){
            // Query server with POST
            // Get back session key and user_id if valid
            const request = {'username': username, 'password': password};
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postLogin.php", request).then((response) =>{
                console.log(response.data);
                sessionStorage.setItem("userId", response.data);
                sessionStorage.setItem("isLoggedIn", true);
                setCurrentUser(response.data);
                setIsLoggedIn(true); 
            }).catch((error) => {
                console.log(error);
            })
        }

        function logout(){
            sessionStorage.setItem("userId", -1);
            sessionStorage.setItem("isLoggedIn", false);
            setCurrentUser(-1);
            setIsLoggedIn(-1);
        }  

        const value = {
            currentUser,
            isLoggedIn,
            signup, 
            login,
            logout
        };

            return (
                <AuthContext.Provider value={value}>
                    {children}
                </AuthContext.Provider>

            );
        
     
}