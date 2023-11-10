import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
export default function Screen3({ navigation }) {
  var [data, setData] = useState([]);
  useEffect(() => {
    setData(route.params.userInsert);
  });
  var route = useRoute();
  var [jobInput, setJobInput] = useState("");
  var handleInsertJob = () => {
    if (jobInput !== "") {
      data.jobs.push(jobInput);
      fetch(`https://6540984045bedb25bfc22306.mockapi.io/shop/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((updatedUser) => {
          setData(updatedUser);
        });
      navigation.navigate("Screen2");
    } else {
      alert("Khong duoc de rong");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Pressable style={{  }} onPress={() => navigation.navigate('Screen2',{})}>      
          <Image
            source={require("../assets/BackIcon.png")}
            style={{width:40,height:40}}
          />
        </Pressable>
        <Image
          source={{ uri: data.avatar }}
          style={{ height: 50, width: 50 }}
        ></Image>
        <View style={styles.viewTextAvatar}>
          <Text
            style={{
              width: 101,
              height: 30,
              marginLeft: 10,
              fontFamily: "Epilogue",
              fontSize: 20,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
          Hi {data.name}
          </Text>
          <Text style={{marginLeft:10, marginTop: -5, fontSize: 14, fontWeight:700, color:"grey"}}>
            Have agrate day a head
          </Text>
        </View>
      </View>
      <Text
        style={{
          width: "80%",
          height: 48,
          fontFamily: "Epilogue",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        ADD YOUR JOB
      </Text>
      <View style={styles.viewInputJob}>
        <Image
          source={require("../assets/InputIcon.png")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput
          placeholder="input your job"
          style={{ marginLeft: 10 }}
          onChangeText={(text) => setJobInput(text)}
        ></TextInput>
      </View>
      <Pressable style={styles.btn} onPress={handleInsertJob}>
        <Text style={{fontSize:20, fontWeight:700, color:"#fff"}}>Finish</Text>
      </Pressable>
      <Image
        source={require("../assets/PenNote.png")}
        style={{ width: 190, height: 170, marginTop: 50 }}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    color: "white",
    borderRadius: 15,
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
  },
  viewInputJob: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    width: 310,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});