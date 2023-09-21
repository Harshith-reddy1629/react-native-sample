import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListCard = () => {
    const ContactsList = [
        {
            id:1,
            name: 'Name1',
            imgUrl: 'https://res.cloudinary.com/reddyimgs/image/upload/v1663001189/cld-sample-2.jpg'
        },
        {
            id:2,
            name: 'Name2',
            imgUrl: 'https://res.cloudinary.com/reddyimgs/image/upload/v1663001189/cld-sample-2.jpg'
        },
        {
            id:3,
            name:'Name3',
            imgUrl: 'https://res.cloudinary.com/reddyimgs/image/upload/v1663001189/cld-sample-2.jpg'
        },
        {
            id:4,
            name: 'Name4',
            imgUrl: 'https://res.cloudinary.com/reddyimgs/image/upload/v1663001189/cld-sample-2.jpg'
        },
    ]
  return (
    <View style={styles.container} >
      <Text style={styles.ListT}>List</Text>
      <View >
        {
            ContactsList.map( ({id,name,imgUrl}) => <View style={styles.listItem} key={id} >
                <Image style={styles.imgCon} source={{uri:imgUrl}} />
                 <View>
                    <Text style={styles.nameT}>{name}</Text>
                 </View> 
                </View> )
        }
      </View>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ccc',
        marginTop:12,
        borderRadius:4,
        padding:6
    },
    ListT:{
        fontSize:28,
        fontWeight:'bold',
        // color:'#deffff'
    },
    imgCon:{
        height:50,
        width:50,
        borderRadius:25
    },
    listItem:{
// flex:1
flexDirection:'row',
gap:8,
alignItems:'center',
backgroundColor:'#fff',
marginVertical:5,
padding:8,
borderRadius:12

    },
    nameT:{
        fontSize:16,
        fontWeight:'600'
    }
})