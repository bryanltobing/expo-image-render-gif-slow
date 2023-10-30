import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image as ExpoImage } from "expo-image";
import { Image as RnImage } from "react-native";
import { useState } from "react";

const Stack = createStackNavigator();

const Home = ({ navigation }: any) => {
  const [isRnImage, setIsRnImage] = useState(false);

  const Image = isRnImage ? RnImage : (ExpoImage as any);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Navigate to notifications screen"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button
        title={`Current: ${isRnImage ? "Rn Image" : "Expo Image"} - Use ${
          isRnImage ? "Expo Image" : "Rn Image"
        } instead`}
        onPress={() => setIsRnImage((prev) => !prev)}
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
      <Image
        source={{
          uri: "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
        }}
        style={{ width: 300, height: 200 }}
        contentFit="contain"
        contentPosition="left"
      />
    </ScrollView>
  );
};
const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
