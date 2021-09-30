import React from 'react'
import { View , StyleSheet, TouchableWithoutFeedbackBase } from 'react-native'

const styles=StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor:"black"
    },

    Header: {
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },

    headerTitle: {
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
    },

    icon:{
        color:"white",
    },

    bgImage: {
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute",
    },

    batteryImage:{
        height:26,
        width:70,
        marginRight:12,
    },

    batterySection:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },

    batteryText:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
    },

    statusText:{
        color:"white",
        fontWeight:"bold",
        fontSize:15,
    },

    status:{
        alignItems:"center",
        marginTop:12
    },

    Controls:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:175,
    },

    controlButton:{
        borderWidth:1,
        borderColor:"white",
        borderRadius:50,
        padding:18,
        marginLeft:25,

    }
})

export default styles
