import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

interface HeaderProps {
  isDarkTheme: boolean;
}

export function Header({ isDarkTheme }: HeaderProps) {
  return (
    <View
      style={
        isDarkTheme
          ? { ...styles.header, backgroundColor: "#483C67" }
          : styles.header
      }
    >
      <Text
        style={
          isDarkTheme
            ? { ...styles.headerText, color: "#E1E1E6" }
            : styles.headerText
        }
      >
        to.
      </Text>
      <Text
        style={
          isDarkTheme
            ? [
                styles.headerText,
                { fontFamily: "Poppins-SemiBold", color: "#E1E1E6" },
              ]
            : [styles.headerText, { fontFamily: "Poppins-SemiBold" }]
        }
      >
        do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
