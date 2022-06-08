import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
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
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppIntroSlider from "react-native-app-intro-slider";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AllBook from "./AllBook";
import Profile from "./Profile";
import NewBook from "./NewBook";
import Library from "./Library";
import BookDetail from "./BookDetail";
import Search from "./Search";
import Slide from "./Slide";

const Stack = createNativeStackNavigator();

// const images = [
//   'https://img5.thuthuatphanmem.vn/uploads/2021/11/19/hinh-anh-phong-canh-anime-co-trang-dep-nhat_041750479.png',
//   'https://i.pinimg.com/originals/f7/9d/f7/f79df798f0f6493919d1c5c20263614b.png',
//   'https://upload-os-bbs.mihoyo.com/upload/2021/02/11/74909084/788f2835f7b6e154dab050638cb4a587_7196276921254682119.png?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,png',

// ]

// const WITH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height

// function TopTab(){
// return(
//   <Tab.Navigator>
//       <Tab.Screen name="Library" component={Library} />
//       <Tab.Screen name="NewBook" component={NewBook} />

//     </Tab.Navigator>
// )
// }

function OutStanDing(props) {
  // Slide

  const header = "Trang chủ";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.main}
        Vertical
        showsVerticalScrollIndicator={false}
      >
        {/* phan slide  */}
        <Slide />

        {/* book category  */}
        <Text style={styles.category}>Mới Nhất</Text>

        <ScrollView
          style={styles.box}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.book}
            onPress={() => {
              props.navigate("BookDetail");
            }}
          >
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://i-giaitri.vnecdn.net/2018/03/20/toi-la-beto-6441-1521549732_m_460x0.jpg",
              }}
            />

            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "http://vietart.co/blog/wp-content/uploads/2014/01/9_thiet_ke_bia_sach_dep_20.jpg",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTF8NMZTs1-OIMP4qrRjJE1MNBy69B7owkg&usqp=CAU",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "http://listsach.com/wp-content/uploads/2020/05/bia-sach-dep-ngoi-nha-nghin-hanh-lang.jpg",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEnjwUkOY56M0mbXqiSADnmujaNK0hcIdDA&usqp=CAU",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>
        </ScrollView>

        {/*------------------------------------------------*/}

        <Text style={styles.category}>Mới Nhất</Text>

        <ScrollView style={styles.box} horizontal>
          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>

          <View style={styles.book}>
            <ImageBackground
              style={styles.picbook}
              source={{
                uri: "https://recmiennam.com/wp-content/uploads/2019/03/hinh-nen-naruto-mobile-12.png",
              }}
            ></ImageBackground>
            <View style={styles.booktitle}>
              <Text style={styles.bookname}>Naruto</Text>
              <Text style={styles.bookauthor}>Kashashi Kisimoto</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/* phan tabbar ben duoi man hinh */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function Home({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "OutStanDing", title: "Nổi Bật" },

    { key: "AllBook", title: "Tất Cả" },
    { key: "NewBook", title: "Sách Mới" },
  ]);
  // React.useEffect(() => {
  //   console.log("navigation: ", navigation);
  // });
  const renderScene = ({ route }) => {
    const props = { ...navigation, ...route };
    switch (route.key) {
      case "AllBook":
        return <AllBook {...props} />;
      case "NewBook":
        return <NewBook {...props} />;
      case "OutStanDing":
        return <OutStanDing {...props} />;
      default:
        return null;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {/* phan header */}
      <View style={styles.boxIcon}>
        <Icon
          style={styles.bar}
          name="bars"
          onPress={() => {
            navigation.navigate("BookCategory");
          }}
        />
        <Text style={styles.header}>Trang Chủ</Text>
        <Icon
          style={styles.isearch}
          name="search"
          onPress={() => {
            navigation.navigate("Search");
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
        renderTabBar={(props) => <TabBar {...props} style={styles.tabTop} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabTop: {
    maxHeight: 45,
    backgroundColor: "#EA7005",
    borderRadius: 20,
    maxWidth: 360,
    marginLeft: 20,
    color: "#000",
    paddingBottom: 5,
  },
  boxIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  bar: {
    color: "red",
    fontSize: 20,
    marginLeft: 10,
  },
  isearch: {
    fontSize: 20,
    marginRight: 10,
    color: "red",
  },
  header: {
    color: "black",
    fontSize: 20,
  },
  navbar: {
    minHeight: 28,
    marginTop: 15,

    borderRadius: 10,
    fontSize: 10,
  },

  main: {
    marginTop: 5,
  },
  slide: {
    flex: 1,
    minHeight: 150,
    //  height:HEIGHT * 0.20,
    //  width:WITH,
  },
  category: {
    marginTop: 5,
    marginLeft: 5,
  },
  box: {
    marginTop: 5,
    flexDirection: "row",
    height: 210,
    borderBottomWidth: 1,
    borderBottomColor: "#C7C9C9",
  },
  book: {
    width: 86,
    height: 150,
    marginLeft: 10,
  },
  picbook: {
    width: 86,
    height: 140,
  },
  bookname: {
    textAlign: "center",
    fontSize: 15,
  },
  bookauthor: {
    textAlign: "center",
    fontSize: 12,
    color: "#949B99",
  },
  tabbottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: 40,
    marginTop: 15,
    backgroundColor: "#E0DEDC",

    bottom: 0,
    fontSize: 10,
  },
  Itabbot: {
    fontSize: 25,
    marginTop: 6,
    color: "#7C7573",
  },
});
