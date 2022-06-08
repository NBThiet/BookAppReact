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
} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppIntroSlider from "react-native-app-intro-slider";

import { initializeApp } from "firebase/app";

import Home from "./component/Home";
import AllBook from "./component/AllBook";
import Profile from "./component/Profile";
import Library from "./component/Library";
import BookCategory from "./component/BookCategory";
import BookDetail from "./component/BookDetail";
import Search from "./component/Search";
import Reading from "./component/Reading";
import Favorite from "./component/Favorite";
import Login from "./component/Login";
import Registor from "./component/Registor";
import CateDetail from "./component/CateDetail";
import OutStanDing from "./component/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Mytab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "#F25F04",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" style={styles.Itabbot} color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="th-large" style={styles.Itabbot} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" style={styles.Itabbot} color={color}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App({ navigation }) {
  // connect fireBase

  // Initialize Firebase
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyD3smNO8E3LydDYf8R_ek4oEGhgLifAt7E",
  //     authDomain: "bookapp2-3c4b2.firebaseapp.com",
  //     projectId: "bookapp2-3c4b2",
  //     storageBucket: "bookapp2-3c4b2.appspot.com",
  //     messagingSenderId: "299641854237",
  //     appId: "1:299641854237:web:06fb9e507e2931f6f129f4",
  //     measurementId: "G-STLP2RYSXZ"
  //   };
  // initializeApp(firebaseConfig);

  // onAuthStateChanged(auth, user => {
  //   if (user != null) {
  //     console.log('We are authenticated now!');
  //   }

  //   // Do other things
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
        headerMode="screen"
      >
        <Stack.Screen
          name="Mytab"
          component={Mytab}
          navigationOptions={{
            header: { visible: false },
          }}
        />
        <Stack.Group
          screenOptions={({ navigation }) => ({
            presentation: "modal",
            headerTitle: false,
            headerLeft: () => <CancelButton onPress={navigation.goBack} />,
          })}
        ></Stack.Group>
        <Stack.Screen name="AllBook" component={AllBook} />

        <Stack.Screen
          name="BookCategory"
          component={BookCategory}
          screenOptions={{ headerShown: true }}
        />
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registor" component={Registor} />
        <Stack.Screen name="CateDetail" component={CateDetail} />
        <Stack.Screen name="OutStanDing" component={OutStanDing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: 28,
    marginTop: 15,
    backgroundColor: "#E0DEDC",
    maxWidth: 350,
    marginLeft: 20,
    borderRadius: 10,
    fontSize: 10,
  },
  btn: {
    color: "black",
    backgroundColor: "#E0DEDC",
    minWidth: 110,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 4,
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
  },
});
