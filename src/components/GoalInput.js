import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ onAddGoal, isVisible, modalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInpuHandler(text) {
    setEnteredGoal(text);
  }
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={goalInpuHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              onPress={() => {
                modalHandler();
              }}
              color="red"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
});

export default GoalInput;
