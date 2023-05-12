import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ToDoContext } from "../../context/toDoListContext";
import Task from "../../src/components/Task";
import styles from "./style";
import NavigateButton from "../../src/components/NavigateButton";

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
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listStyle}
            data={tasksList.reverse()}
            renderItem={({ item }) => {
              return <Task item={item} />;
            }}
          ></FlatList>
        )}
      </View>
      <NavigateButton texto="Adicionar tarefas" rota="ToDoList" />
    </View>
  );
}
