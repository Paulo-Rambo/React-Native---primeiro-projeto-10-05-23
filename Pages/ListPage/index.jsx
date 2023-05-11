import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ToDoContext } from "../../context/toDoListContext";

import Task from "../../src/components/Task";
import styles from "./style";

export default function Main() {
  const { tasksList, renderAppFunction } = useContext(ToDoContext);
  const navigation = useNavigation();
  useEffect(() => {
    renderAppFunction();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Minha To do List</Text>
      </View>

      <View style={styles.listContainer}>
        {tasksList.length == 0 ? (
          <Text style={{ marginTop: 15 }}>
            Clique em adicionar tarefas para começar.
          </Text>
        ) : (
          tasksList.map((item, index) => <Task key={index} item={item} />)
        )}
      </View>
      <Button
        title="Adicionar Tarefas"
        onPress={() => navigation.navigate("ToDoList")}
      />
    </View>
  );
}
