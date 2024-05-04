import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ToDoList from "./components/Todolist";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <ToDoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#06359B",
    paddingHorizontal: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 9,
    textAlign: "center",
    color: "#8C9CF4",
  },
});
