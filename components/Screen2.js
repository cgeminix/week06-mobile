import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

export default function Screen2({ navigation}) {
  var [data, setData] = useState([]);
  var [jobs, setJobs] = useState([]);
  useEffect(() => {
    setData(route.params.selectUser);
    fetch(`https://6540984045bedb25bfc22306.mockapi.io/shop/${data.id}`)
      .then((response) => response.json())
      .then((json) => {
        data;
      });
  }, []);
  var route = useRoute();
  var handleInsert = () => {
    if (data !== null) {
      navigation.navigate("Screen3", { userInsert: data });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Pressable style={{  }} onPress={() => navigation.navigate('Screen1',{})}>      
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
      <View style={styles.viewSearch}>
        <Image
          source={require("../assets/SearchIcon.png")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput placeholder="Search"></TextInput>
      </View>
      <View
        style={{
          width: "100%",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={data.jobs}
          renderItem={({ item }) => (
            <View style={styles.viewJob}>
              <Image
                source={require("../assets/CheckIcon.png")}
                style={{ width: 20, height: 20, marginLeft: 20 }}
              ></Image>
              <Text style={{ marginLeft: 20, fontWeight:700, fontSize:16, width:220 }}>{item}</Text>
              <Image
                source={require("../assets/EditIcon.png")}
                style={{ width: 20, height: 20, marginRight: 30 }}
              ></Image>
            </View>
          )}
        />
      </View>
      <Pressable style={styles.btn} onPress={handleInsert}>
        <Text style={{fontWeight:700,fontSize:40,color:"#fff"}}>+</Text>
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
  btn: {
    marginTop: 40,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 30,
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
  },
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 40,
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 2,
  },
  viewJob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: 320,
    height: 48,
    backgroundColor: "rgba(222, 225, 230, 0.47)",
    borderRadius: 25,
  },
});