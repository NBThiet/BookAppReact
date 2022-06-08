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
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import {
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import GoogleButton from "react-google-button";

require("firebase/auth");
import { authentication, provider } from "../FireBaseConfig";

export default function Registor({ navigation }) {
  //SignUp voi email va passW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpEmail = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("dang ki thanh cong");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  //SignUp voi Google
  const signUpGoogle = () => {
    signInWithRedirect(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // name = user.displayName
        // email = user.email
        // photo = user.photoURL

        // your code here
        alert(user.displayName);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  };

  return (
    <SafeAreaView>
      <Text style={styles.TitleLogin}>ĐĂNG KÍ</Text>

      <View style={styles.BoxInput}>
        <TextInput
          style={styles.Email}
          placeholder="Email"
          value={email}
          onChangeText={(Text) => setEmail(Text)}
        />
        <TextInput
          style={[styles.PassWord, styles.Email]}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(Text) => setPassword(Text)}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text
            style={styles.BtnLogin}
            title="Đăng Kí"
            onPress={handleSignUpEmail}
          >
            Đăng Kí
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Or}>Hoặc</Text>
      <View style={styles.BoxFace}>
        <Text style={styles.LogFace}>Đăng kí với FaceBook</Text>
        <Text style={styles.LogGG} onPress={signUpGoogle}>
          Đăng kí với Google
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TitleLogin: {
    backgroundColor: "#EF6916",
    paddingTop: 100,
    textAlign: "center",
    paddingBottom: 30,
    fontSize: 30,
    color: "#E7E5E3",
  },
  BoxInput: {
    marginTop: 20,
    height: 150,
  },
  Email: {
    borderBottomWidth: 1,
    width: 350,
    marginLeft: 25,
    fontSize: 20,
  },
  PassWord: {
    marginTop: 20,
  },
  BtnLogin: {
    backgroundColor: "#1A8691",
    height: 50,
    width: 200,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    marginLeft: 100,
    borderRadius: 10,
    color: "#E5EBEC",
  },
  Or: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },
  BoxFace: {
    marginTop: 20,
  },
  LogFace: {
    textAlign: "center",
    backgroundColor: "#1F0D7A",
    width: 340,
    marginLeft: 30,
    height: 50,
    paddingTop: 10,
    fontSize: 20,
    borderRadius: 10,
    color: "#E5E4EA",
  },
  LogGG: {
    textAlign: "center",
    backgroundColor: "#EB6903",
    width: 340,
    marginLeft: 30,
    height: 50,
    paddingTop: 10,
    fontSize: 20,
    borderRadius: 10,
    color: "#E5E4EA",
    marginTop: 20,
  },
  BoxReg: {
    marginTop: 20,
  },
  ForgetPW: {
    marginLeft: "auto",
    marginRight: 35,
  },
  Regis: {
    backgroundColor: "#F92403",
    height: 50,
    width: 200,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    marginLeft: 100,
    borderRadius: 10,
    color: "#E5EBEC",
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// import React, { useState } from "react";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { authentication } from "../FireBaseConfig";

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function SignUp() {
//     createUserWithEmailAndPassword(authentication, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // your code

//         alert("Successfully sign up!");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // ..
//       });
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Firebase Auth!</Text>
//       <StatusBar style="auto" />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         style={styles.textBoxes}
//         onChangeText={(Text) => {
//           setEmail(Text);
//         }}
//       ></TextInput>
//       <TextInput
//         placeholder="Password"
//         value={password}
//         style={styles.textBoxes}
//         onChangeText={(Text) => {
//           setPassword(Text);
//         }}
//       ></TextInput>
//       <Button onPress={SignUp} style={styles.submitBtn} title="Submit" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   textBoxes: {
//     width: "90%",
//     fontSize: 18,
//     padding: 12,
//     borderColor: "gray",
//     borderWidth: 0.2,
//     borderRadius: 10,
//     margin: 10,
//   },
// });
