
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#326273',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    navbarContainer: {
        padding: 10,
        paddingTop: 10, 
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#5C9EAD'
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
        width: '90%',
        backgroundColor:'#326273'
    },

    bigLogo: {
        height: 100,
        width: 'auto',
    },
    
    navText: {
        fontSize: 30,
        paddingTop: 1
    },

    bigText: {fontSize: 40,
              fontWeight: "bold", 
              color: 'white',
              alignSelf: 'center', 
              backgroundColor: '#5C9EAD',
              borderRadius: 7,
              borderWidth: 5,
              borderColor: '#fff'
            },

    bacLevels: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft:2,
        paddingTop: 3,
        alignSelf: 'left',
        paddingRight: 2
    },

    subtext: {
        fontSize: 8,
        color: 'white',      
        paddingLeft:2,
        paddingTop: 3,
        alignSelf: 'left',
        paddingRight: 2
    
    },
    statement: {
        fontSize: 12,
        color: 'white',      
        paddingLeft:2,
        paddingBottom: 3,
        alignSelf: 'center',
        paddingRight: 2
    
    },


    formInput: {
        fontSize:18, 
        backgroundColor:'white', 
        padding:5, 
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20
    },

    profileRow: {
        flexDirection:'row',
        justifyContent:'space-between'

    },

    profileTextLeft: {
        textAlign:'left',
        fontSize:18,
        fontWeight:'600',
        marginLeft:10
    },

    profileTextRight: {
        textAlign:'right',
        fontSize:18,
        marginRight:10
    },

    profileLink: {
        textAlign:'center',
        backgroundColor: '#124263',
        color:'#7CBECD',
        fontSize: 22,
        marginLeft: 40,
        marginRight: 40,
        marginTop:5,
        marginBottom:5,
        padding:10,
        borderRadius: 25
    }


});

export default styles; 