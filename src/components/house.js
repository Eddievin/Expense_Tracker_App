import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default function Home(){
  
  return(
    <View style={styles.container}>
    <View style={{paddingTop:50}}>
      <View style={{flexDirection:'row', marginHorizontal:30, justifyContent:'space-between'}}>
        <Image 
        resizeMode='contain'
        style={{height:50, width:50}}
        source={require('../images/menu.png')} />

          <Image
          style={{height:60, width:60, borderRadius:100, borderWidth:5, borderColor:'#00192D'}}
          source={require('../images/profile.jpg')} />  
      </View>
    </View>

    <View style={{padding:30}}>
      <Text style={{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
      }}>My budget</Text>
      <Text style={{
        fontSize:50,
        fontWeight:'700',
        color:'#fff',
      }}>$ 521,436</Text>
    </View>

    <View style={{
      height:1000,
      width:'100%',
      backgroundColor:'#fff',
      marginTop:50,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    }}>

      <View style={{flexDirection:'row', paddingTop:20, padding:50}}>
        <View style={{height:50, width:100, backgroundColor:'#00192D'}}>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>18th may 2020</Text>
        <Text style={{fontSize:30, fontWeight:'bold'}}>270</Text>
      </View>

<View style={{width:'100%', height:'30%'}}>
  <ScrollView>

  <View style={{flexDirection:'row', justifyContent:'space-between', 
      marginHorizontal:30, paddingTop:30, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          style={{height:70, width:70, borderRadius:100}}
          source={require('../images/profile.jpg')} />  
          <Text style={{fontSize:25, fontWeight:'bold', marginLeft:10}}>Electricity</Text>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>40,000</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', 
      marginHorizontal:30, paddingTop:30, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          style={{height:70, width:70, borderRadius:100}}
          source={require('../images/profile.jpg')} />  
          <Text style={{fontSize:25, fontWeight:'bold', marginLeft:10}}>Home</Text>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>40,000</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', 
      marginHorizontal:30, paddingTop:30, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          style={{height:70, width:70, borderRadius:100}}
          source={require('../images/profile.jpg')} />  
          <Text style={{fontSize:25, fontWeight:'bold', marginLeft:10}}>Food</Text>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>40,000</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', 
      marginHorizontal:30, paddingTop:30, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
          style={{height:70, width:70, borderRadius:100}}
          source={require('../images/profile.jpg')} />  
          <Text style={{fontSize:25, fontWeight:'bold', marginLeft:10}}>Transport</Text>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>40,000</Text>
      </View>

  </ScrollView>


</View>


      

<TouchableOpacity


style={{
  height:80, 
  width:80, 
  backgroundColor:'#00192D',
  alignSelf:'center',
  borderRadius:100,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
  }}>
    <Image
          style={{height:50, width:50, borderRadius:100}}
          source={require('../images/add.png')} />  

</TouchableOpacity>





      



    </View>

    
  </View>
  ); 
}

const styles = StyleSheet.create({
 container:{
   
   flex: 1,
   backgroundColor:'#22CE99'
 }
})