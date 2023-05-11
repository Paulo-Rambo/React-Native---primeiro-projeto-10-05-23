import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Form from "../../src/components/AddForm";
import styles from "./style";

export default function ToDoList() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Adicionar mais tarefas</Text>
      </View>
      <Form />
      <Button title="Ver Tarefas" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
