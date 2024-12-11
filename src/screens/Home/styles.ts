import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  header: {
    paddingTop: 68,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    borderColor: colors.gray[600],
    padding: 10,
    fontSize: 16,
    marginRight: 12,
    color: "#fff",
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: colors.blue_dark,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  task: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskSpan: {
    backgroundColor: colors.gray[500],
    borderRadius: 25,
    marginLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  taskCreated: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "600",
  },
  taskDone: {
    fontSize: 16,
    color: colors.purple,
    fontWeight: "600",
  },
  taskItem: {
    backgroundColor: colors.gray[500],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 1,
    padding: 16,
    borderRadius: 8,
  },
  taskItemText: {
    color: "#fff",
    fontSize: 14,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: colors.gray[300],
  },
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: colors.gray[300],
  },
  messageEmptyList: {
    marginTop: 20,
    color: colors.gray[300],
    fontSize: 16,
    fontWeight: "600",
  },
});
