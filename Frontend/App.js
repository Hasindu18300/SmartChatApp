import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
  Button,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [getImage, setImage] = useState(null);

  const [loaded, error] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const logoPath = require("./assets/favicon.png");

  const [getMobile, setMobile] = useState("");
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getPassword, setPassword] = useState("");

  return (
    <LinearGradient colors={["#03c8ff", "#8ab4eb"]} style={styleSheet.view1}>
      <ScrollView>
        <View style={styleSheet.view2}>
          <Image source={logoPath} style={styleSheet.image1} />

          <Text style={styleSheet.text1}>Create Account</Text>

          <Text style={styleSheet.text2}>Hello! Welcome to smart chat.</Text>

          <Pressable
            onPress={async () => {
              let result = await ImagePicker.launchImageLibraryAsync({});

              if (!result.canceled) {
                setImage(result.assets[0].uri);
              }
            }}
            style={styleSheet.avater1}
          >
            <Image source={getImage} style={styleSheet.image2} />
          </Pressable>

          <Text style={styleSheet.text3}>Mobile</Text>
          <TextInput
            style={styleSheet.input1}
            inputMode={"tel"}
            placeholder="Enter your mobile"
            maxLength={10}
            onChangeText={(text) => {
              setMobile(text);
            }} 
          />

          <Text style={styleSheet.text3}>First Name</Text>
          <TextInput
            style={styleSheet.input1}
            inputMode={"text"}
            placeholder="Enter your First Name"
            onChangeText={(text) => {
              setFirstName(text);
            }}
          />

          <Text style={styleSheet.text3}>Last Name</Text>
          <TextInput
            style={styleSheet.input1}
            inputMode={"text"}
            placeholder="Enter your Last Name"
            onChangeText={(text) => {
              setLastName(text);
            }}
          />

          <Text style={styleSheet.text3}>Password</Text>
          <TextInput
            style={styleSheet.input1}
            secureTextEntry={true}
            inputMode={"text"}
            placeholder="Enter Your Password"
            maxLength={20}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

          <Pressable
            style={styleSheet.Pressable1}
            onPress={async () => {

              let formData = new FormData();
              formData.append("mobile", getMobile);
              formData.append("firstName", getFirstName);
              formData.append("lastName", getLastName);
              formData.append("password", getPassword);

              let response = await fetch(
                "https://qi92bjrbas9y.share.zrok.io/SignUp", 
                {
                  method: "POST",
                  body: formData,
                }
              );

              if (response.ok) {
                let json = await response.json();
                Alert.alert("Message", json.message);
              }
            }}
          >
            <FontAwesome6 name="right-to-bracket" color="white" size={20} />
            <Text style={styleSheet.text4}>Sign Up</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              Alert.alert("Message", "Go to Sign In");
            }}
          >
            <Text style={styleSheet.text5}>
              Already have an account? SignIn.
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styleSheet = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image1: {
    height: 50,
    width: "100%",
    resizeMode: "contain",
  },
  text1: {
    fontFamily: "Montserrat-Bold",
    fontSize: 30,
    color: "#264075",
  },
  text2: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
  },
  text3: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    alignSelf: "flex-start",
  },

  input1: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    width: "100%",
    height: 40,
    marginVertical: 5,
    paddingStart: 10,
  },

  Pressable1: {
    backgroundColor: "#fcba03",
    width: "60%",
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },
  text4: {
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    color: "#fff",
  },
  text5: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
  background1: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  avater1: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  // image2: {
  //   width: "100%",
  //   height: 70,
  //   borderRadius: 50,
  // },
  view2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    rowGap: 10,
    paddingVertical: 40,
  },
});
