
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#5C9EAD',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    navbarContainer: {
        padding: 10,
        paddingTop: 40, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#326273'
    },

    navbarLink: {
        flex: 1,
        alignItems: "center"
    },

    logoLink: {
        flex: 1,
        resizeMode: 'contain'

    },

    drinkSearch: {
        width: '90%',
        backgroundColor:'#5C9EAD'
    },

    bigLogo: {
        height: 100,
        width: 'auto',
        paddingTop: 1,
        paddingBottom: 1
    }



});

export default styles; 