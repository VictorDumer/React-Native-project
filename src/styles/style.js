import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container:{
     backgroundColor:'#f6f7f7'
    },
  
    h1:{
        marginLeft:windowWidth*0.25,
        justifyContent:'center',
        alignItems:'center',
        color:'#32404d',
        fontSize: 40,
        marginBottom: windowWidth*0.02
    },
    h3:{
        marginLeft:windowWidth*0.3,
        justifyContent:'center',
        alignItems:'center',
        color:'#32404d',
        fontSize: 14,
    },
    btn1:{
        marginTop:windowWidth*0.2,
        flexDirection:'row',
        backgroundColor:'#15c870',
        marginLeft:windowWidth*0.05,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 10,
        width: windowWidth*0.9,
        height: windowWidth*0.17,
    },
    dog:{
        height: windowWidth*0.82,
        marginTop: windowWidth*0.3,
        marginBottom: windowWidth*0.1
    },
    google:{
        alignItems:'flex-start',
        backgroundColor:'#ffffffff',
        width: 40,
        height: 40,
        marginLeft:windowWidth*0.05,
        borderRadius: 8,
    },
    btn2:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F2FAFA',
        borderColor: '#84e672ff',
        borderWidth: 2,
        padding:'5px',
        marginTop:windowWidth*0.05,
        marginLeft:windowWidth*0.05,
        borderRadius: 10,
        width: windowWidth*0.9,
        height: windowWidth*0.17,
        },
    textBtn1:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4,
        color:'#f2f2f2',
        fontSize: 15,
        marginRight:windowWidth*0.23
    },
    textBtn2:{
        color:'#32404d',
        fontSize: 15
    },
});