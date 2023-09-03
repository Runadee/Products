import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const ListBox = (props) => {
  return (
    <Pressable 
    style={styles.container}
     onPress={props.handlePress}
    >
      <Text>{props.ProductsInfo.title} </Text>
   
      

    </Pressable>
  )
}

export default ListBox

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#B08BBB',
    margin:7,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  link: {
    color:'blue',
  }
})