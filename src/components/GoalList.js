import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const GoalList = ({ courseGoal, onDelete }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={courseGoal}
        // keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Text>{item.value}</Text>
              <TouchableOpacity onPress={onDelete.bind(this, item.key)}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalList;
