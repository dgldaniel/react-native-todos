import React, { useState } from "react";
import { Switch, View, StyleSheet, Text } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      })
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <View
      style={
        isDarkTheme
          ? { ...styles.background, backgroundColor: "#191622" }
          : styles.background
      }
    >
      <Header isDarkTheme={isDarkTheme} />

      <TodoInput isDarkTheme={isDarkTheme} addTask={handleAddTask} />

      <View style={styles.containerSwitch}>
        <Text
          style={
            isDarkTheme
              ? { ...styles.switchTextColor, color: "#FF79C6" }
              : styles.switchTextColor
          }
        >
          Claro
        </Text>
        <Switch
          trackColor={{
            false: "#767577",
            true: isDarkTheme ? "#483C67" : "#81b0ff",
          }}
          thumbColor={isDarkTheme ? "#988BC7" : "#f4f3f4"}
          onValueChange={setIsDarkTheme}
          value={isDarkTheme}
        />
        <Text
          style={
            isDarkTheme
              ? { ...styles.switchTextColor, color: "#FF79C6" }
              : styles.switchTextColor
          }
        >
          Escuro
        </Text>
      </View>

      <MyTasksList
        isDarkTheme={isDarkTheme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerSwitch: {
    width: "40%",
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "flex-end",
  },
  switchTextColor: {
    color: "#3D3D4D",
  },
  switch: {
    color: "pink",
  },
});
