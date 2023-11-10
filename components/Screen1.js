import { Text, View, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import {useState, useEffect} from "react"

export default function Screen1({navigation}) {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [loginUser, setLoginUser] = useState();

  useEffect(() => {
    fetch(`https://6540984045bedb25bfc22306.mockapi.io/shop`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);

  var handleLogin = () => {
    var user = data.find((user) => user.name === name);
    if (user) {
      setLoginUser(user);
      navigation.navigate("Screen2", { selectUser: user });
    } else {
      alert("Ten dang nhap khong dung");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/PenNote.png")}
        style={{ width: 240, height: 240, marginTop: 30 }}
      />

      <Text style={styles.viewMana}>
        MANAGER YOUR {`\n`} TASK
      </Text>

      <View style={styles.viewEmail}>
        <Image
          source={require("../assets/EmailIcon.png")}
          style={{ width: 20, height: 20 }}
        ></Image>
        <TextInput
          placeholder="Enter your name"
          style={{ marginLeft: 10 ,width:250}}
          onChangeText={(text) => setName(text)}
        ></TextInput>
      </View>

      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text style={{color:'#fff', fontWeight:700, fontSize:16}}>GET STARTED</Text>
      </Pressable>
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
  viewMana:{
    marginTop: 20,
    textAlign: "center",
    color: "#8353E2",
    fontFamily: "Epilogue",
    fontSize: 24,
    fontWeight: 700,
  },
  viewEmail: {
    width: 320,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 40,
  },
  btn: {
    marginTop: 40,
    width: 200,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 15,
  },

});
