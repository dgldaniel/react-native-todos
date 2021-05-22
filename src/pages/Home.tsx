import React, { useState } from "react";
import { Appearance, Switch, View, StyleSheet } from "react-native";

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
});
