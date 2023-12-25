import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default function Feature({navigation , route}) {
  return (
  <>
  <View style = {styles.container}>
  <View>
  <Text style = {{fontSize:24, borderBottomWidth:2,
  borderBottomColor:'white' , color :'whitesmoke'}}>
    <Feather name="shopping-bag" size={24} color="whitesmoke" />   Cart
    </Text>

  </View>
  <View style = {styles.items}>
    <View style = {styles.item1}>
      <Image style = {styles.img} source={require('../img/bg1.png')}></Image>
      <Text style = {styles.txt}>Dried apricots {'\n'}
      <Text style = {{fontSize:14 , color:'#808080'}}>$9.38</Text>
      </Text>
      <Text style = {styles.txt}>x1</Text>
    </View>
    <View style = {styles.item1}>
      <Image style = {styles.img} source={require('../img/bg2.png')}></Image>
      <Text style = {styles.txt}>Dried apricots {'\n'}
      <Text style = {{fontSize:14 , color:'#808080'}}>$9.38</Text></Text>
      <Text style = {styles.txt}>x1</Text>
    </View>
    <View style = {styles.item1}>
      <Image style = {styles.img} source={require('../img/bg3.png')}></Image>
      <Text style = {styles.txt}>Dried apricots {'\n'}
      <Text style = {{fontSize:14 , color:'#808080'}}>$9.38</Text></Text>
      <Text style = {styles.txt}>x2</Text>
    </View>
    <View style = {styles.item1}>
      <Image style = {styles.img} source={require('../img/bg4.png')}></Image>
      <Text style = {styles.txt}>Dried apricots {'\n'}
      <Text style = {{fontSize:14 , color:'#808080'}}>$9.38</Text></Text>
      <Text style = {styles.txt}>x3</Text>
    </View>

  </View>
  <View style = {styles.total}>
    <View>
    <Text style = {{color:'whitesmoke'}}>4 items</Text>
    </View>
    <View style = {styles.btn}>
      <Text style = {{paddingVertical:5 , color:'whitesmoke'}}>   $38.68  </Text>
      <View style = {styles.buy}>
        <Text style = {{paddingVertical:5}}>Buy Now</Text>

      </View>
      
      
    </View>
  </View>
  </View>
  
  </>
      
   
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#2e2e2e',
    flex:1,
    paddingHorizontal:10, 
  },
  items:{
    flex:.8
  },
  item1:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:30,
    
    
  },
  img:{
    height:80,
    width:50,
  },
  txt:{
    color:'whitesmoke',
    fontSize:18,
  
  }
  ,
  total:{
    flex:.2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:40,
  }
  ,
  btn:{
    flexDirection:'row',
    borderWidth:1,
    height:40,
    borderColor:'#c19e5f',
  
    borderRadius:10,
    
  },
  buy:{
    backgroundColor:'#c19e5f',
    paddingHorizontal:20,
    borderRadius:10,

  }
  

})