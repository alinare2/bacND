import {Text} from 'react-native'
import {useAuth} from './AuthContext';
import { redirect, useNavigate} from 'react-router-native';
import { useEffect } from 'react';

export default function Logout(){
    const {setIsLoggedIn, setCurrentUser} = useAuth();
    const nav = useNavigate();
    useEffect(()=>{
        setCurrentUser(-1);
        setIsLoggedIn(false);
        nav("/");
    }, []);
    return(<Text style={{flex: 1}}>hi</Text>)
}