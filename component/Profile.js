import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile() {
  return (
    <SafeAreaView>
    <View style={styles.HeadProf}>

    </View>
    <View style={styles.BoxProf}>
      <Text style={styles.AboutProf}>
        ABOUT
      </Text>
      {/* thông tin  */}
      <View style={styles.BoxItem}>
        <Icon style={styles.IProf} 
        name='rss-square'/>
        <Text style={styles.NameItem}>Thông tin ứng dụng</Text>
        <Icon style={styles.IArow}
        name='chevron-right'
        />
      </View>
        {/* Góp ý  */}
        <View style={styles.BoxItem}>
        <Icon style={[styles.IProf,styles.Imail]} 
        name='envelope-square'/>
        <Text style={styles.NameItem}>Góp ý phản hồi</Text>
        <Icon style={styles.IArow}
        name='chevron-right'
        />
      </View>
       {/* Đánh giá  */}
       <View style={styles.BoxItem}>
        <Icon style={[styles.IProf,styles.Ipen]} 
        name='pencil-square'/>
        <Text style={styles.NameItem}>Đánh giá ứng dụng</Text>
        <Icon style={styles.IArow}
        name='chevron-right'
        />
      </View>
       {/* Cộng đồng FB  */}
       <View style={styles.BoxItem}>
        <Icon style={[styles.IProf,styles.Iface]} 
        name='facebook-square'/>
        <Text style={styles.NameItem}>LemonBook trên FaceBook</Text>
        <Icon style={styles.IArow}
        name='chevron-right'
        />
      </View>
       {/* Đăng Xuất */}
       <View style={[styles.BoxItem,styles.Logout]}>
        <Icon style={[styles.IProf,styles.ILogOut]} 
        name='caret-square-o-left'/>
        <Text style={styles.NameItem}>ĐĂNG XUẤT</Text>
        
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HeadProf:{
height:230,
backgroundColor:'#F27C2A',
width:'auto',



  },
  BoxProf:{

  },
AboutProf:{
fontSize:15,
width:'auto',
height:45,
backgroundColor:'#EBE9E9',
color:'#8E8B89',
paddingTop:15,
paddingLeft:20,
borderBottomWidth:1,
borderBottomColor:'#C7C9C9'

},

BoxItem:{
flexDirection:'row',
paddingTop:10,
height:60,


},
IProf:{
fontSize:40,
marginLeft:10,
color:'#C81D75'
},
NameItem:{
fontSize:20,
marginLeft:30,
marginTop:8,
color:'#484849',
borderBottomWidth:1,
minWidth:360,
borderBottomColor:'#A29EA0',
},
IArow:{
marginLeft:'auto',
fontSize:20,
marginTop:10,

color:'#767475',
borderBottomWidth:1,
borderBottomColor:'#A29EA0',
paddingRight:10,

},
Imail:{
color:'#18629E',
},
Ipen:{
color:'#1DBA23'
},
Iface:{
color:'#081C61'
},

ILogOut:{
 color:'#F41A1A',
},
Logout:{
  backgroundColor:'#EBE9E9',
}
})