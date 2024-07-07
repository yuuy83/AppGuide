import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const ListPage = () => {
  return (
    <View style={styles.link}>
      <Link href="/List/1" style={styles.link}>link 1</Link>
      <Link href="/List/2" style={styles.link}>link 2</Link>
      <Link href="/List/3" style={styles.link}>link 3</Link>
      <Link href="/List/4" style={styles.link}>link 4</Link>
      <Link href="/List/5" style={styles.link}>link 5</Link>
      <Link href="/List/6" style={styles.link}>link 6</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  link: {
    fontSize: 20, // Larger text
    padding: 10,
    borderWidth: 1, // Border width
    borderColor: "black", // Border color
    borderRadius: 5, // Rounded corners
  },
});

export default ListPage;
