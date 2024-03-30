import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#528DFF",
    borderRadius: 5,
  },
  user: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#82ACFF",
    borderRadius: 5,
  },
  userDetail: {
    marginBottom: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#006DFF",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#1D40D4",
    minWidth: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  titulo: {
    fontSize: 15,
    color: "#0021AD",
    marginTop: 10,
  }
});

export default styles;
