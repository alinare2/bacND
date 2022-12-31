import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Link, Routes, Route} from 'react-router-native';


import LandingWrapper from './LandingWrapper';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';

import HomeWrapper from './HomeWrapper';
import Home from './Home';
import Profile from './Profile';
import EditProfile from './EditProfile';
import DeleteProfile from './DeleteProfile'
import Consume from './Consume'; 
import FriendsList from './FriendsList';
import Logout from './Logout';

import {useAuth} from './AuthContext';

import styles from './styles';
;

export default function AppTestThing(){
    const {isLoggedIn, currentUser} = useAuth();
    let currentPage = {wrap: <LandingWrapper/>, root: <Landing/>}

    if(isLoggedIn){
        currentPage = {wrap: <HomeWrapper/>, root: <Home/>};
    }
    else{
        //setCurrentPage({wrap: <LandingWrapper/>, root: <Landing/>})
        currentPage = {wrap: <LandingWrapper/>, root: <Landing/>}
    }
    return (
        <SafeAreaView style={styles.container}>
            {currentPage.wrap}
            <Routes>
                <Route path="/" element={currentPage.root}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile/:user_id" element={<Profile/>}/>
                <Route path="/edit_profile" element={<EditProfile/>}/>
                <Route path="/delete_profile" element={<DeleteProfile/>}/>
                <Route path="/consume" element={<Consume/>}/>
                <Route path="/friends" element={<FriendsList/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
      </SafeAreaView>
    );
 
}

/*

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}});*/