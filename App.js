import { ToDoContextProvider } from "./context/toDoListContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Pages/ListPage";
import ToDoList from "./Pages/AddToDoPage";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ToDoContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToDoContextProvider>
  );
}
