import React, { useState } from "react";
import GoalInput from "./src/components/GoalInput";
import GoalList from "./src/components/GoalList";

import { StyleSheet, View, SafeAreaView, Button } from "react-native";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isModeVisible, setIsModeVisisble] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }

    setCourseGoal((courseGoal) => [
      ...courseGoal,
      { key: Math.random().toString(), value: enteredGoal },
    ]); //This guaranties that the courseGoal is actually the current courseGoal
    setIsModeVisisble(false);
  };
  const addGoal = (goal) => {
    addGoalHandler(goal);
    setIsModeVisisble(false);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((item) => item.key !== key);
    });
  };
  const modalHandler = () => {
    setIsModeVisisble(!isModeVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add New Goal" onPress={modalHandler} />
      <GoalInput
        onAddGoal={addGoal}
        isVisible={isModeVisible}
        modalHandler={modalHandler}
      />

      {/* Why does the ScrollView not scroll completely to the last item*/}
      {/* {courseGoal.map((goal) => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))} */}
      <GoalList courseGoal={courseGoal} onDelete={deleteGoalHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
