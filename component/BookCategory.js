import { View,
     Text,
     SafeAreaView,
    ScrollView,
    StyleSheet,
    ImageBackground,


 } from 'react-native'
import React from 'react'



import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const image = { uri: "https://i.imgur.com/oNExKzI.jpg" };

export default function BookCategory({navigation}) {


  return (
    <SafeAreaView style={styles.ListMain}>
     <View style={styles.HeadCate}>
<Icon
style={styles.Icate}
name='arrow-left'
onPress={()=>{
  navigation.goBack()
 }}
/>
<Text

style={styles.Title}>
 
  Thể loại
</Text>

     </View>
       <View style={styles.BoxCate}>
       <View style={styles.Category}
      
       >
       <ImageBackground source={image} resizeMode="cover" style={styles.PicCate}>
      <Text style={styles.CateTitle}
       onPress={()=>{
        navigation.navigate('CateDetail')
       }}
      >Tiểu Thuyết</Text>
    </ImageBackground>
       </View>

       <View style={styles.Category}>
       <ImageBackground source={image} resizeMode="cover" style={styles.PicCate}>
      <Text style={styles.CateTitle}>Tiểu Thuyết</Text>
    </ImageBackground>
       </View>

       <View style={styles.Category}>
       <ImageBackground source={image} resizeMode="cover" style={styles.PicCate}>
      <Text style={styles.CateTitle}>Tiểu Thuyết</Text>
    </ImageBackground>
       </View>


       <View style={styles.Category}>
       <ImageBackground source={image} resizeMode="cover" style={styles.PicCate}>
      <Text style={styles.CateTitle}>Tiểu Thuyết</Text>
    </ImageBackground>
       </View>

       <View style={styles.Category}>
       <ImageBackground source={image} resizeMode="cover" style={styles.PicCate}>
      <Text style={styles.CateTitle}>Tiểu Thuyết</Text>
    </ImageBackground>
       </View>
       </View>
     
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HeadCate:{
flexDirection:'row',
height:60,
width:'auto',
paddingBottom:10,
borderBottomWidth:1,
borderBottomColor:'#C7C9C9'
  },
Icate:{
fontSize:25,
marginTop:'auto',
marginBottom:'auto',
marginLeft:20,
color:'red',

  },
Title:{
fontSize:25,
marginLeft:'auto',
marginRight:'auto',
marginTop:'auto',
marginBottom:'auto',

  },
    ListMain:{
flex: 1,
marginTop:50,

    },
   BoxCate:{
       
  flexDirection:'row',
  flexWrap: 'wrap',
      


       
       
    },
    Category:{
    minHeight:180,
    width:120,
    marginLeft:8,
    marginTop:10,
   borderRadius:10,

    },
   PicCate:{
    flex: 1,
   opacity:0.8,
   

   },
    CateTitle:{
        color: "white",
    fontSize: 20,
     backgroundColor: "#000000c0",
    textAlign: "center",
    fontWeight: "bold",
    borderWidth:1,
    borderColor: "white",
    marginTop:'auto',
    marginBottom:'auto'
    }


})