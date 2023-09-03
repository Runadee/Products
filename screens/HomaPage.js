import { StyleSheet, Text, View , FlatList, Image} from 'react-native'
import React, { useEffect , useState } from 'react'
import axios from 'axios';
import ListBox from '../components/ListBox';

const HomaPage = ({navigation}) => {
   
  const [products, setProductsList] = useState([])  ;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
          .then((value) => setProductsList(value.data))

  }, [])

  const handleNavigation = (value) => {
        navigation.navigate('DetailsPage', {ProductsData: value})
  }
  


  return (
    <View style={styles.container} >
      <Text style={{fontSize:20, fontWeight:'bold', color:'#B08BBB'}} >List of Products</Text>

       <View style={styles.FlatListContainer} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item,index) => index}
            renderItem={({item}) => 
            <ListBox  
            handlePress={() => handleNavigation(item)}
            ProductsInfo={item} />
          }
           
          />
       </View>
   
    </View>
  )
}

export default HomaPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F5F5DC'
    },
    FlatListContainer:{
        height:'70%',
        width:'80%',
        top:20,
        borderRadius:10,
        backgroundColor:'#F5F5DC',
    }
})