import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    marginTop: 22,
    paddingVertical: 8,
    backgroundColor: "#48b3ff",
    borderColor: "#20232a",
    borderRadius: 14,
    borderWidth: 4,
  },
  listContainer: {
    height: "50%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#20232a",
    borderRadius: 14,
    borderWidth: 4,
    marginTop: 8,
  },
});

export default styles;
