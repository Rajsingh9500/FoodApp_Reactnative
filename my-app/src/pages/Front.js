import { View, Text, Dimensions, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';


const arr = [

  {
    image:require('../img/bg1.png'),
    title:'Dried apricots',
    price:'$6 / 300gm',
    rating:'⭐⭐⭐⭐',
    id:1,
  },
  {
    image:require('../img/bg2.png'),
    title:'Almonds',
    price:'$5 / 300gm',
    rating:'⭐⭐⭐⭐',
    id:1,

  },
  {
    image:require('../img/bg3.png'),
    title:'pista',
    price:'$10 / 300gm',
    rating:'⭐⭐⭐⭐',
    id:1,

  },
  {
    image:require('../img/bg4.png'),
    title:'khajoor',
    price:'$8 / 300gm',
    rating:'⭐⭐⭐⭐',
    id:1,

  }

]

 


const Wh =  Dimensions.get('window').height

export default function Front({navigation , route}) {
  const [img , setImg] = useState(0)
  return (
   
    <>
     
   <View style = {styles.container}>
   <Text  style = {styles.icon}><FontAwesome name="bars" size={24} color="black" /></Text>
 <Text style = {styles.icon}>
 <FontAwesome  name="shopping-bag" size={24} color="black" />
 </Text>

   </View>
   <View style = {styles.txt}>
    <Text style = {styles.txt1}>HI, Raj</Text>
    <Text  style = {styles.txt2}>How was your day Raj, 😋 </Text>

    </View>
    <View style = {styles.search}>
    <View style = {styles.cc}>
      <Image style = {styles.dry} source={require('../img/almonds.png')}/>
      </View> 
      <View style = {styles.cc11}>
      <Image style = {styles.dry} source={require('../img/nuts.png')}/>
      </View>
      <View style = {styles.sicon}>
      <FontAwesome name="search" size={24} color="black" />
      </View>

    </View>
    <View style = {styles.circle}>
      <View style = {styles.c}>
        <View style = {styles.product}>
          <Image style = {styles.img} source={arr[img].image}></Image>
          
        </View>
        <View style = {styles.description}>
          <Text style = {styles.dtxt}>{arr[img].title}</Text>
          <Text style = {styles.dtxt}>{arr[img].price}</Text>
          <Text style = {styles.dtxt}>{arr[img].rating}</Text>
         <TouchableOpacity onPress={()=>navigation.navigate('Home', arr[img])}>
           <Text style = {styles.btn}><FontAwesome  name="shopping-cart" size={22} color="black" />  Add to cart</Text>
           </TouchableOpacity>
        </View>
        <View style = {styles.heart}>
        <FontAwesome style = {{}}  name="heart" size={20} color="red" />
        </View>
      </View>
    </View>
    <View style = {styles.shop}>
      <ScrollView showsHorizontalScrollIndicator = {false} horizontal = {true}>
      <TouchableOpacity onPress={()=> setImg(0)} style = {[styles.cc1 , img == 0 ? styles.active:'']}>
        <Image style = {[styles.ccimg , img == 0 ? styles.active1:'']} source={arr[0].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(1)} style = {[styles.cc1 , img == 1 ? styles.active:'']}>
      <Image style ={[styles.ccimg , img == 1 ? styles.active1:'']}  source={arr[1].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(2)} style = {[styles.cc1 , img == 2 ? styles.active:'']}>
      <Image style = {[styles.ccimg , img == 2 ? styles.active1:'']}  source={arr[2].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(3)} style = {[styles.cc1 , img == 3 ? styles.active:'']}>
      <Image style = {[styles.ccimg , img == 3 ? styles.active1:'']}  source={arr[3].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(3)} style = {[styles.cc1 , img == 3 ? styles.active:'']}>
      <Image style = {[styles.ccimg , img == 3 ? styles.active1:'']}  source={arr[3].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(3)} style = {[styles.cc1 , img == 3 ? styles.active:'']}>
      <Image style = {[styles.ccimg , img == 3 ? styles.active1:'']}  source={arr[3].image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setImg(3)} style = {[styles.cc1 , img == 3 ? styles.active:'']}>
      <Image style = {[styles.ccimg , img == 3 ? styles.active1:'']}  source={arr[3].image} />
      </TouchableOpacity>
      </ScrollView>
      
    </View>
    <StatusBar backgroundColor={'#808080a3'}/>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:.1,
   
    flexDirection:'row',
    justifyContent:'space-between'

  },
  icon:{
   

    marginHorizontal:10,
    marginVertical:10,
  
  }
  ,
  txt:{
    flex:.1,
    marginHorizontal:10,
   
  },
  txt1:{
   
    marginBottom:5,
  },
  txt2:{
    fontWeight:'bold',
  


  },
  b:{
    height:40,
    width:40,
    borderRadius:20,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  }
  ,
  dry:{
    height:70,
    width:70,
    resizeMode:'contain',
  
  }
  ,
  
  search:{
    flex:.2,
    flexDirection:'row',
    paddingHorizontal:20,


  },
  cc:{
    height:70,
    width:70,
    borderRadius:35,
    backgroundColor:'#f9c986',
    
    justifyContent:'center',
    alignItems:'center'
    
  },
  
  cc11:{
    height:70,
    width:70,
    borderRadius:35,
    backgroundColor:'#808080a3',
    marginHorizontal:30,
    justifyContent:'center',
    alignItems:'center'
    
  },
  sicon:{
    
  paddingHorizontal:30,
  
    



  }
  ,
  circle:{
    flex:.4,
    justifyContent:'center',
    alignItems:'center'
    

  },
  c:{
    height:250,
    width:250,
    borderRadius:150,
    backgroundColor:'#ff9859',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   

  }
  ,
  product:{
    justifyContent:'center',
    alignItems:'center',
  
  }
  ,
  img:{
    height:100,
    width:70,
  position:'absolute',
  alignItems:'center',
  resizeMode:'contain'
    
    
  },
  description:{
    justifyContent:'center',
  
    alignItems:'center',
       
    
    

  },
  dtxt:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    paddingBottom:10,
    textAlign:'center'
  }
  ,
  btn:{
    backgroundColor:"#fff",
    paddingHorizontal:20,
    paddingVertical:7,
    borderRadius:50,
   fontWeight:'600'
   
    
  },
  heart:{
    width:40,
    height:40,
   backgroundColor:'whitesmoke',
   justifyContent:'center',
   alignItems:'center',  
   borderRadius:300,
   transform:[{translateX:20}],
   elevation:2,
   
  }
  ,
  shop:{
    flex:.2,
    alignItems:'center',
    justifyContent:'space-between',
    
    flexDirection:'row',
    height:50,
    borderRadius:20,
    
   

  },
  cc1:{
    height:80,
    width:80,
    borderRadius:40,
    backgroundColor:'#808080a3',
    justifyContent:'center',
    marginHorizontal:10,
  

  
  },
  ccimg:{
    height:60,
    width:60,
    resizeMode:'contain',
    overflow:'hidden',
  
   marginHorizontal:10,
  }
,
  active:{
/*    backgroundColor:'#ff9859', */
 /*   transform:[{scale:1.5}] */
   backgroundColor:'#ff9859',
   
  }
  ,
  active1:{
 
    transform:[{scale:1.5}] 
   
  }



})