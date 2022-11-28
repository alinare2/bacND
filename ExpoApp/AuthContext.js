import React, {useState, useContext} from 'react';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export default function AuthProvider({children}){
    [isLoggedIn, setIsLoggedIn] = useState(false);
    [currentUser, setCurrentUser] = useState(-1);

    const value ={
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}