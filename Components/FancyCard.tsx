import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    const foodItems = [
        {id:1,ImageUrl:'https://res.cloudinary.com/reddyimgs/image/upload/v1663001165/samples/food/dessert.jpg'},
        {id:2,ImageUrl:'https://res.cloudinary.com/reddyimgs/image/upload/v1663001167/samples/food/fish-vegetables.jpg'},
        {id:3,ImageUrl:'https://res.cloudinary.com/reddyimgs/image/upload/v1663001167/samples/food/pot-mussels.jpg'},
        {id:4,ImageUrl:'https://res.cloudinary.com/reddyimgs/image/upload/v1663001176/samples/food/spices.jpg'},
    ]
  return (
    <View style={styles.cardView} >

      <Text style={styles.fanctT} >Food Items</Text>
      <Image
      style={styles.imgCon}
      source={{
        uri:'https://res.cloudinary.com/reddyimgs/image/upload/v1663001190/cld-sample-4.jpg'
      }} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>

      <View style={styles.foodList} >
        {
            foodItems.map(({id,ImageUrl})=> <View style={styles.foodItem} key={id} >
                <Image style={styles.foodImg} source={{uri:ImageUrl}} />
            </View> )
        }
      </View>
        </ScrollView>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    cardView:{
        marginTop:12,
        padding:6,
        // paddingHorizontal:6,
        backgroundColor:'#ededed',
        elevation:1,
        borderRadius:4,
        
        
    },
    fanctT:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:6,
        // color:'#edf34'
    },
    imgCon:{
        height:240,
        borderRadius:4,
        // elevation: 2
    },
    foodItem:{

    },
    foodImg:{
        height:100,
        width:100
    },
    foodList:{
        flexDirection:'row',
        gap:8,
        marginVertical:8
    }
})