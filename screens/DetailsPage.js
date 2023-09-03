import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsPage = ({navigation, route}) => {

  const {title, price , description} = route.params.ProductsData

  return (
    <View style={styles.container} >
      <Text style={styles.name} >{title} </Text>
      <Text style={styles.link} > Price : {price} £ </Text>
      <Text style={styles.country} >{description} </Text>
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#B5D5C5',
    },
    name:{
      fontSize:20,
      fontWeight:'bold',
    },
    link: {
      color:'blue',
      fontSize:18,
      margin:8,
    },
    country:{
      fontSize: 25,
      color:'#B08BBB',
      margin:9,
    }
})