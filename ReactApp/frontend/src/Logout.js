import React, { useEffect } from 'react';
import {useAuth} from './AuthContext';

export default function Logout(){

    const {logout} = useAuth();

    useEffect(() =>

        {
            logout();
        }
    ,[logout])

    return(
        <>

        </>            
    );
}