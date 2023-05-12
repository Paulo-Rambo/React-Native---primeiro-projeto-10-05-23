import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

interface IProps {
  rota: string;
  texto: string;
}

export default function NavigateButton(props: IProps) {
  const navigation = useNavigation();
  const { rota, texto } = props;
  return (
    <View style={styles.buttonView}>
      <TouchableHighlight
        style={styles.buttonNavigateStyle}
        activeOpacity={0.6}
        underlayColor="#bdbdbd"
        onPress={() => navigation.navigate(`${rota}`)}
      >
        <Text style={styles.textButton}>{texto}</Text>
      </TouchableHighlight>
    </View>
  );
}
