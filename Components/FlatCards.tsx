import {ScrollView, ScrollViewBase, StyleSheet, Text, View} from 'react-native';

import React from 'react';
const FlatCards = () => {
  return (
    <View>
      <Text style={styles.flatText} >Stories</Text>
      <ScrollView showsHorizontalScrollIndicator={false}  style={styles.cardscroller} horizontal={true}>

      <View style={styles.viewCon} >

        <Text style={styles.redTextCon} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConTwo]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConThree]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConFour]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConFive]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConFive]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConFour]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConThree]} > </Text>
        <Text style={[styles.redTextCon , styles.redTextConTwo]} > </Text>
        <Text style={styles.redTextCon} > </Text>
  
      </View>
      </ScrollView>
    </View>
  )
}
export default FlatCards;

const styles = StyleSheet.create({
  redTextCon:{
    height:80,
    width:80,
    backgroundColor: '#efdeff',
    borderRadius:50,
    elevation:2,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"red",
  },
  redTextConTwo :{
    backgroundColor:"#aeffff"
  } ,
  redTextConThree :{
    backgroundColor:"#88eeff"
  } ,
  redTextConFour :{
    backgroundColor:"#66ddff"
  } ,
  redTextConFive :{
    backgroundColor:"#55ddff"
  } ,
  flatText:{
    fontSize:28,
    paddingBottom: 8 ,
    fontWeight: 'bold'
  },
  viewCon:{
    flex:1,
    flexDirection:'row',
    gap:8
  },
  cardscroller:{
    elevation: 0
  }
});
