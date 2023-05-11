import { useContext } from "react";
import React from "react";
import { View, Text, Button } from "react-native";
import { ToDoContext } from "../../../context/toDoListContext";
import styles from "./style";

export default function Task({ item }) {
  const { onPressHandleFunction } = useContext(ToDoContext);
  return (
    <View style={styles.container}>
      <Text style={styles.taskStyle}>{item}</Text>
      <Button
        onPress={() => onPressHandleFunction(item)}
        title="Remover"
      ></Button>
    </View>
  );
}
