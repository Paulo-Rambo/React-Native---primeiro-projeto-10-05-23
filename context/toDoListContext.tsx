import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ToDoContextType = {
  setTextInput: (newText: string) => void;
  textInput: string;
  setTextMessage: (newText: string) => void;
  textMessage: string;
  setTasksList: (newList: string[]) => void;
  tasksList: string[];
  addNewTaskFunction: () => void;
  onPressHandleFunction: (item: string) => void;
  renderAppFunction: () => void;
};

export const ToDoContext = React.createContext<ToDoContextType>({
  setTextInput: () => {},
  textInput: "",
  setTextMessage: () => {},
  textMessage: "",
  setTasksList: () => {},
  tasksList: [],
  addNewTaskFunction: () => {},
  onPressHandleFunction: () => {},
  renderAppFunction: () => {},
});

export const ToDoContextProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [tasksList, setTasksList] = useState([]);

  async function onPressHandleFunction(item: string) {
    var usefulList = [];
    try {
      const getListItens = await AsyncStorage.getItem("lista_bonita123@");
      if (getListItens != null) {
        usefulList = JSON.parse(getListItens);
        const getIndex = usefulList.findIndex((itemList) => itemList === item);
        if (getIndex === -1) {
          console.log("Houve algum problema, de refresh");
        }
        usefulList.splice(getIndex, 1);
      }
    } catch (err) {
      console.log("Erro ao recuperar valor: ", err);
    }
    try {
      await AsyncStorage.setItem(
        "lista_bonita123@",
        JSON.stringify(usefulList)
      );
      setTasksList(usefulList);
      console.log("Tarefa removida");
    } catch (err) {
      console.log("Não foi possivel remover");
    }
  }

  async function renderAppFunction() {
    try {
      const getListItens = await AsyncStorage.getItem("lista_bonita123@");
      if (getListItens != null) {
        const storage_value = JSON.parse(getListItens);
        setTasksList(storage_value);
      }
    } catch (err) {
      console.log("Erro ao recuperar valor: ", err);
    }
  }

  async function addNewTaskFunction() {
    var storage_value = [];
    setTextInput("");
    if (!textInput) {
      setTextMessage("Adicione uma tarefa!");
      return;
    }
    try {
      const getListItens = await AsyncStorage.getItem("lista_bonita123@");
      if (getListItens != null) {
        storage_value = JSON.parse(getListItens);
        storage_value = [...storage_value, textInput];
      }
    } catch (err) {
      console.log("Erro ao recuperar valor: ", err);
    }
    try {
      if (!storage_value) {
        storage_value = [textInput];
      }
      await AsyncStorage.setItem(
        "lista_bonita123@",
        JSON.stringify(storage_value)
      );
      setTasksList(storage_value);
      setTextMessage("Nova tarefa adicionada!");
    } catch (err) {
      setTextMessage("Não foi possivel adicionar");
    }
    console.log(tasksList);
  }

  return (
    <ToDoContext.Provider
      value={{
        textMessage,
        textInput,
        setTextInput,
        addNewTaskFunction,
        tasksList,
        setTextMessage,
        setTasksList,
        onPressHandleFunction,
        renderAppFunction,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
