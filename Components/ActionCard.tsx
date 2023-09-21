import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWeb( webLink:string ){
        Linking.openURL(webLink)
    }
  return (
    <View style={styles.actionViewCard} >
      <Text style={styles.actionT} >Action</Text>
     
      <Button title='Click' ></Button>
      {/* <Button title='Ignore' ></Button> */}
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({

    actionViewCard:{
        marginTop:8,
        padding:6,
        backgroundColor:'#ccc',
        borderRadius:4,
        elevation:2,
        
    },
    actionT:{
        fontSize:28,
        fontWeight:"bold",
        marginBottom:8
    },
    buttonC:{
        margin:2
    }
})