import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  NativeScrollEvent,
  Pressable,
} from "react-native";
import Setting2 from "../../contentForSlide/setting2";
import { Link } from "expo-router";

const images = [
  "https://wx1.sinaimg.cn/orj360/7d89f3d7ly1hrdg80i7h7g20qo0f0qv8.gif",
  "https://th.bing.com/th?id=OIF.39ZE0jlB%2bVtLSWVyYBjStQ&rs=1&pid=ImgDetMain",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1jfA3S.img?w=768&h=512&m=6",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const homePage = () => {
  const [imaActive, setingActive] = useState(0);

  const onchange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imaActive) {
        setingActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {images.map((image, index) => (
            <Link href={`/contentForSlide/${index}`} asChild>
              <Pressable>
                <Image
                  key={index}
                  style={styles.wrap}
                  resizeMode="stretch"
                  source={{ uri: image }}
                />
              </Pressable>
            </Link>
          ))}
        </ScrollView>

        <View style={styles.wrapDot}>
          {images.map((image, index) => (
            <Text
              key={index}
              style={imaActive == index ? styles.dotActive : styles.dot}
            >
              O
            </Text>
          ))}
        </View>
      </View>

      <Text>Tools</Text>

      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Link href={`tools/date`} asChild>
            <Pressable>
              <Image
                style={[styles.icon, styles.border]}
                source={require("../../../assets/images/icon/4.png")}
              />
            </Pressable>
          </Link>
          <Link href={`tools/date`} asChild>
            <Pressable>
              <Image
                style={[styles.icon, styles.border]}
                source={require("../../../assets/images/icon/9.png")}
              />
            </Pressable>
          </Link>
          <Link href={`tools/date`} asChild>
            <Pressable>
              <Image
                style={[styles.icon, styles.border]}
                source={require("../../../assets/images/icon/10.png")}
              />
            </Pressable>
          </Link>
          <Link href={`tools/date`} asChild>
            <Pressable>
              <Image
                style={[styles.icon, styles.border]}
                source={require("../../../assets/images/icon/12.png")}
              />
            </Pressable>
          </Link>
        </ScrollView>
      </View>

      <View>
        <Setting2 />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Adjust the resizeMode as per your requirement
    marginHorizontal: 5, // Adjust horizontal margin between images
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
  border: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10, // Optional border radius
  },
});
export default homePage;
