import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const LogoImage = require("./assets/adaptive-icon.png");
import Greet from "./components/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text style={styles.title}>LightBlue Box</Text>
      </View>
      <View style={[styles.lightGreenBox, , styles.box]}>
        <Text style={styles.title}>Lightgreen Box</Text>
      </View>
    </View>
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   {/* <Greet name="Bambo" />
    //   <Greet name="Bubble" /> */}
    //   {/* <Button title="Alert" onPress={() => Alert.alert("Invalid Ui")} />
    //   <Button
    //     title="Alert 2"
    //     onPress={() => Alert.alert("Invalid Ui", "Incorrect DOB")}
    //   />

    //   <Button
    //     title="Alert 3"
    //     onPress={() =>
    //       Alert.alert("Invalid Ui", "Incorrect DOB", [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Canceled Pressed"),
    //         },
    //         {
    //           text: "Ok",
    //           onPress: () => console.log("Ok Pressed"),
    //         },
    //       ])
    //     }
    //   /> */}
    //   {/* <ActivityIndicator />
    //   <ActivityIndicator size="large" />
    //   <ActivityIndicator size="large" color="midnightblue" /> */}
    //   {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden />
    //   <Button
    //     title="Press"
    //     onPress={() => setIsModalVisible(true)}
    //     color="midnightblue"
    //   /> */}
    //   {/* <ScrollView>
    //     <Pressable onPress={() => console.log("Image Pressed")}>
    //       <Image source={LogoImage} style={{ width: 300, height: 300 }} />
    //     </Pressable>
    //     <Pressable onPress={() => console.log("Text Pressed")}>
    //       <Text>
    //         "But I must explain to you how all this mistaken idea of denouncing
    //         pleasure and praising pain was born and I will give you a complete
    //         account of the system, and expound the actual teachings of the great
    //         explorer of the truth, the master-builder of human happiness. No one
    //         rejects, dislikes, or avoids pleasure itself, because it is
    //         pleasure, but because those who do not know how to pursue pleasure
    //         rationally encounter consequences that are extremely painful. Nor
    //         again is there anyone who loves or pursues or desires to obtain pain
    //         of itself, because it is pain, but because occasionally
    //         circumstances occur in which toil and pain can procure him some
    //         great pleasure. To take a trivial example, which of us ever
    //         undertakes laborious physical exercise, except to obtain some
    //         advantage from it? But who has any right to find fault with a man
    //         who chooses to enjoy a pleasure that has no annoying consequences,
    //         or one who avoids a pain that produces no resultant pleasure?"
    //       </Text>
    //     </Pressable>

    //     <Image source={LogoImage} style={{ width: 300, height: 300 }} />
    //   </ScrollView> */}

    //   {/* <Modal
    //     visible={isModalVisible}
    //     onRequestClose={() => setIsModalVisible(false)}
    //     // animationType="fade"
    //     animationType="slide"
    //     // presentationStyle="formSheet"
    //     presentationStyle="pageSheet"
    //   >
    //     <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
    //       <Text>Modal Content</Text>

    //       <Button
    //         title="Close"
    //         color="midnightblue"
    //         onPress={() => setIsModalVisible(false)}
    //       />
    //     </View>
    //   </Modal> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
});
