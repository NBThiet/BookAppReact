import { StyleSheet, 
  Text, 
 View,
 ImageBackground,
  Button,
  Alert,
 Dimensions,
 ScrollView,
 Image,
 SafeAreaView,
 onChange } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from './BookDetail';




export default function NewBook({navigation}) {
return (
 <SafeAreaView>
  {/* book category  */}

<View style={styles.box}
horizontal
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
>
<View style={styles.book}>
<ImageBackground style={styles.picbook}
source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}


onPress={()=>{
  navigation.navigate('BookDetail')
  
  }}
>
</ImageBackground>
<View style={styles.booktitle}>
<Text style={styles.bookname}>
Naruto
</Text>
<Text style={styles.bookauthor}>
Kashashi Kisimoto
</Text>
</View>
</View>

<View style={styles.book}>
<ImageBackground style={styles.picbook}
source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}

>
</ImageBackground>
<View style={styles.booktitle}>
<Text style={styles.bookname}>
Naruto
</Text>
<Text style={styles.bookauthor}>
Kashashi Kisimoto
</Text>
</View>
</View>

<View style={styles.book}>
<ImageBackground style={styles.picbook}
source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}

>
</ImageBackground>
<View style={styles.booktitle}>
<Text style={styles.bookname}>
Naruto
</Text>
<Text style={styles.bookauthor}>
Kashashi Kisimoto
</Text>
</View>
</View>

<View style={styles.book}>
<ImageBackground style={styles.picbook}
source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}

>
</ImageBackground>
<View style={styles.booktitle}>
<Text style={styles.bookname}>
Naruto
</Text>
<Text style={styles.bookauthor}>
Kashashi Kisimoto
</Text>
</View>
</View>



<View style={styles.book}>
<ImageBackground style={styles.picbook}
source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}

>
</ImageBackground>
<View style={styles.booktitle}>
<Text style={styles.bookname}>
Naruto
</Text>
<Text style={styles.bookauthor}>
Kashashi Kisimoto
</Text>
</View>
</View>

</View>
 </SafeAreaView>
)
}

const styles = StyleSheet.create({

 category:{
     marginTop:5,
     marginLeft:5,
    },
    box:{
   marginTop:5,
   flexDirection:'row',
   flexWrap: 'wrap',
   
  
   borderBottomColor:'#C7C9C9',
   
   
    },
   book:{
   width:86,
 marginBottom:10,
   marginLeft:10,
   
   },
   picbook:{
   width:86,
   height:140,
   
   },
   bookname:{
    textAlign:'center',
    fontSize:15,
   
   },
   bookauthor:{
     textAlign:'center',
     fontSize:12,
     color:'#949B99'
   
   },
})