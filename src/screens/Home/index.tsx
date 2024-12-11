import {
  Alert,
  Button,
  FlatList,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../styles/color";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [taskDone, setTaskDone] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  function handleAddTask() {
    if (taskInput === "") return;
    setTask((state) => [...state, taskInput]);
    setTaskInput("");
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTask((state) => state.filter((task) => task !== name));
          if (taskDone.includes(name)) {
            setTaskDone((state) => state.filter((task) => task !== name));
          }
        },
      },
    ]);
  }

  function handleDoneTask(name: string) {
    if (taskDone.includes(name)) {
      setTaskDone((state) => state.filter((task) => task !== name));
    } else {
      setTaskDone((state) => [...state, name]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>todo</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setTaskInput}
          value={taskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray[300]}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <MaterialIcons
            name="add-circle-outline"
            size={24}
            style={styles.buttonText}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.task}>
        <View style={styles.taskWrapper}>
          <Text style={styles.taskCreated}>Criadas</Text>
          <Text style={styles.taskSpan}>{task.length}</Text>
        </View>
        <View style={styles.taskWrapper}>
          <Text style={styles.taskDone}>Concluídas</Text>
          <Text style={styles.taskSpan}>{taskDone.length}</Text>
        </View>
      </View>
      <FlatList
        data={task}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => handleDoneTask(item)}>
              {!taskDone.includes(item) ? (
                <MaterialIcons name="check" size={24} color={colors.purple} />
              ) : (
                <MaterialIcons name="cancel" size={24} color={colors.purple} />
              )}
            </TouchableOpacity>
            <Text
              style={[
                styles.taskItemText,
                taskDone.includes(item) ? styles.taskTextDone : {},
              ]}
            >
              {item}
            </Text>
            <TouchableOpacity onPress={() => handleRemoveTask(item)}>
              <MaterialIcons name="delete" size={24} color={colors.blue} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyBox}>
            <Text style={styles.messageEmptyList}>
              Você ainda não tem tarefas cadastradas
            </Text>
          </View>
        )}
      />
    </View>
  );
}
