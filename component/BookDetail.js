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
  onChange,
  useWindowDimensions ,
  

} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function BookDetail({navigation}) {
  return (
    <SafeAreaView>
       <Icon style={styles.IBackDetail} 
        name='chevron-left'
        onPress={()=>{
          navigation.goBack()
         }}
        />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
       {/* phan head và anh bia, ten sách */}
    <View style={styles.BgrDetail}>
   
      <View style={styles.BoxMainDetail}>
      <ImageBackground style={styles.PicDetail}
      source={{
        uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png"}}
        
      ></ImageBackground>
      <View style={styles.BoxDetail}>
        <Text style={styles.NameDetail}>Naruto</Text>
        <Text style={styles.AuthorDetail}>Hashashi</Text>
        <Text style={styles.BtnDetail} >ĐỌC NGAY</Text>
      </View>
    </View>
    </View>
{/* phan icon cac chuc nang  */}
    <View style={styles.BoxIconDetail}>
<Icon style={styles.IconDetail} 
name='heart-o'
/>
<Icon style={styles.IconDetail} 
name='comment-o'
/>
<Icon style={styles.IconDetail} 
name='share-square-o'
/>
<Icon style={styles.IconDetail} 
name='bookmark-o'
/>

    </View>

    {/* phan gioi thieu thong tin */}

    <View style={styles.IntroduceDetail}>
   <Text style={styles.IntroTitle}>Giới thiệu</Text>
  <View style={styles.BoxIntro}>
 <View style={styles.Intro1}>
   <Text style={styles.TextIntro1}>Thể loại:</Text>
   <Text style={styles.TextIntro1}>Lượt xem:</Text>
   <Text style={styles.TextIntro1}>Trạng thái:</Text>
   

 </View>
 <View style={styles.Intro2}>
   <Text style={[styles.TextIntro2,styles.TextIntro2Cate]}>Tiểu Thuyết</Text>
   <Text style={styles.TextIntro2}>0</Text>
   <Text style={styles.TextIntro2}>Hoàn thành</Text>
   
 </View>



  </View>
    </View>
{/* phan sach gơi ý */}
<View style={styles.RecomDetail}>
<Text style={styles.IntroTitle}>Có thể bạn quan tâm</Text>

<ScrollView style={styles.box}
horizontal
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
>
<View style={styles.book}

>
<ImageBackground style={styles.picbook}

source={{
uri:"https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png" }}

/>

<View style={styles.booktitle}
>
<Text style={styles.bookname}

>
Naruto
</Text>
<Text style={styles.bookauthor}

>
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

</ScrollView>


</View>

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  BgrDetail:{
paddingTop:50,

backgroundColor:'#ECE7E4',
borderBottomWidth:1,
paddingBottom:20,
borderBottomColor:'#A19F9D',

  },
  BoxMainDetail:{
    flexDirection: 'row',
  },
  IBackDetail:{
fontSize:25,
paddingLeft:20,
paddingTop:30,
color:'#ECE7E4',
height:60,
marginTop:'auto',
backgroundColor:'#F36209'




  },
PicDetail:{
width:100,
height:160,

marginLeft:20,

},
BoxDetail:{
  marginLeft:20,
},
NameDetail:{

fontSize:25,
},
AuthorDetail:{
fontSize:15,
color:'#646362'
},
BtnDetail:{
fontSize:20,
backgroundColor:'#F36209',
paddingHorizontal:20,
paddingVertical:5,
borderRadius:5,
marginTop:'auto',
color:'#ECE7E4'

},
BoxIconDetail:{
flexDirection:'row',
height:60,
borderBottomWidth:1,
justifyContent:'space-around',
borderBottomColor:'#B6B3B1',

},
IconDetail:{
fontSize:25,
marginTop:'auto',
marginBottom:'auto',
color:'#858281'
},
IntroduceDetail:{
marginLeft:20,
marginTop:10,
borderBottomWidth:1,
paddingBottom:20,
borderBottomColor:'#C7C9C9',
},
IntroTitle:{
fontSize:20,

},
BoxIntro:{
flexDirection: 'row',
marginTop:20,
marginLeft:20,
},
Intro1:{
justifyContent:'flex-end'
},
TextIntro1:{
  fontSize:15,
  color:'#646362',
  marginTop:3,
},
Intro2:{

},
TextIntro2:{
  fontSize:15,
  marginTop:3,

},
TextIntro2Cate:{
  color:'#EF5F06',
},
RecomDetail:{
marginLeft:20,
paddingBottom:50,
marginTop:20,
},
box:{
  marginTop:20,
  flexDirection:'row',
  height:210,
 
  
  
   },
  book:{
  width:86,
  height:150,
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