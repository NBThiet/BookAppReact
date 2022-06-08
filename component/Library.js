import { StatusBar } from 'expo-status-bar';
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


import AppIntroSlider from 'react-native-app-intro-slider';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllBook from './AllBook'
import Reading from './Reading';
import Favorite from './Favorite';

import Detail from './BookDetail';
import Search from './Search';








const Stack = createNativeStackNavigator();










const renderScene = SceneMap({
  Reading: Reading,
  Favorite: Favorite,
  

});

export default function Library({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
  
    
    { key: 'Reading', title: 'Đang Đọc' },
    { key: 'Favorite', title: 'Yêu Thích' },
   

  ]);

  return(
    <View style={{flex: 1}}>
        {/* phan header */}
  <View style={styles.boxIcon}>
<Icon
style={styles.bar} 
name="bars"
onPress={()=>{
 navigation.navigate('BookCategory')
}}
/>
<Text style={styles.header}>Thư Viện</Text>
<Icon 
style={styles.isearch}
name='search'
onPress={()=>{
  navigation.navigate('Search')
 }}

/>
</View>
<StatusBar BackgroundColor="#fff" />
    <TabView
    style={styles.navbar}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
    renderTabBar={props => <TabBar {...props} style={styles.tabTop}/>}
  />
      </View>



  )
 
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
tabTop:{
 maxHeight:45,
 backgroundColor:'#EA7005',
 borderRadius:20,
 maxWidth:360,
marginLeft:20,
color:'#000',
paddingBottom:5,
    
},
 boxIcon:{
  flexDirection:'row',
  justifyContent: 'space-around',
  marginTop:40
 },
 bar:{
  color:'red',
 fontSize:20,
 marginLeft:10,
 },
 isearch:{
   fontSize:20,
   marginRight:10,
   color:'red'
 },
 header:{
color:'black',
fontSize:20,
 },
 navbar:{
  
  minHeight:28,
  marginTop:15,


  
  borderRadius:10,
  fontSize:10,
 },
 
 main:{

  marginTop:5,
 },
 slide:{
  flex: 1,
  minHeight:150,
//  height:HEIGHT * 0.20,
//  width:WITH,
 
  
 },
 category:{
  marginTop:5,
  marginLeft:5,
 },
 box:{
marginTop:5,
flexDirection:'row',
height:210,
borderBottomWidth:1,
borderBottomColor:'#C7C9C9'


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
tabbottom:{
flexDirection:'row',
justifyContent: 'space-around',
 minHeight:40,
 marginTop:15,
backgroundColor:'#E0DEDC',

bottom:0,
fontSize:10,
 
},
Itabbot:{
  fontSize:25,
  marginTop:6,
  color:'#7C7573',
},

});