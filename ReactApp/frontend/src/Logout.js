import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from './AuthContext';

export default function Logout(){

    const {logout} = useAuth();
    const history = useNavigate();

    
    useEffect(() =>

        {
            logout();
         history("/");    

        }
    ,[history, logout])
        


    return(
        <>

        </>            
    );
}