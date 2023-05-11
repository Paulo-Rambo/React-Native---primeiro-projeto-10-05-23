import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { ToDoContext } from "../../../context/toDoListContext";
import styles from "./style";

export default function Form() {
  const {
    textMessage,
    textInput,
    setTextInput,
    addNewTaskFunction,
    tasksList,
  } = useContext(ToDoContext);

  return (
    <View>
      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputTextsStyle}>Nova tarefa</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={setTextInput}
            value={textInput}
            placeholder="Adicione a tarefa"
            keyboardType="default"
          ></TextInput>
          <Text>{textMessage}</Text>
        </View>
        <Button
          onPress={() => addNewTaskFunction()}
          title="Confirmar!"
        ></Button>
      </View>
    </View>
  );
}
