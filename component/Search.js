import { View, Text,SafeAreaView,TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function Search({navigation}) {
  return (
    <SafeAreaView>
     <View style={styles.HeadSearch}>
         <TextInput style={styles.InputSearch}
          placeholder="Tìm kiếm tên sách "
         />

         
         <Text style={styles.BackHome}
         
         onPress={()=>{
            navigation.goBack()
           }}>
         Hủy
         </Text>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 HeadSearch:{
marginTop:50,
flexDirection:'row',

 },
InputSearch:{
    backgroundColor:'#E4E4EC',
    height:40,
    width:300,
    marginLeft:10,
    borderRadius:10,
fontSize:18,


},
BackHome:{
marginLeft: 'auto',
marginRight: 20,
fontSize:20,
marginTop:5,
color:'#EF6228'


},

})

