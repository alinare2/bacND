
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    navbarContainer: {
        padding: 10,
        paddingTop: 40, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'aliceblue'
    },

    navbarLink: {
        flex: 1,
        alignItems: "center",
    },

    logoLink: {
        flex: 1,
        resizeMode: 'contain'
    },

    drinkSearch: {
        width: '80%',
        backgroundColor:'#f0f0f0'
    }



});

export default styles; 