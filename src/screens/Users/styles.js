import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userDetailButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
  },
  userName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#528DFF",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#528DFF",
    minWidth: 70,
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    color: "#0021AD",
    marginTop: 70,
  },
  box: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#006DFF",
    borderRadius: 10,

  }
});

export default styles;
