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
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import {
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { authentication, provider } from "../FireBaseConfig";

export default function Login({ navigation }) {
  //sign up Email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInEmail(props) {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //your code
        Alert.alert("Alert title", "Dang nhap thanh cong", [
          {
            text: "ok",
            onPress: () => {
              props.navigate("BookDetail");
            },
          },
        ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage) {
          alert("mat khau hoac email chua dung");
        }
      });
  }

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
      <Text style={styles.TitleLogin}>ĐĂNG NHẬP</Text>

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
        <Text
          style={styles.BtnLogin}
          onPress={() => {
            navigation.navigate("Mytab");
          }}
          // onPress={signInEmail}
        >
          Đăng Nhập
        </Text>
      </View>
      <Text style={styles.Or}>Hoặc</Text>
      <View style={styles.BoxFace}>
        <Text style={styles.LogFace}>Đăng nhập với FaceBook</Text>
        <Text style={styles.LogGG} onPress={signUpGoogle}>
          Đăng nhập với Google
        </Text>
      </View>

      <View style={styles.BoxReg}>
        <Text style={styles.ForgetPW}>Quên mật khẩu ?</Text>
        <Text
          style={styles.Regis}
          onPress={() => {
            navigation.navigate("Registor");
          }}
        >
          ĐĂNG KÍ
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
