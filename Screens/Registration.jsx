import React from "react";
import { View, Text, TouchableOpacity, TextInput, Platform, TouchableWithoutFeedback, Keyboard, Animated, KeyboardAvoidingView } from "react-native";
import Container from "../components/Container/Container";
import Avatar from "../components/Avatar/Avatar";
import Loader from "../components/Loader";
import { useKeyboard } from "../services/hooks";
import styles from "../components/AuthForm/AuthForm.styles";
import AuthForm from "../components/AuthForm/AuthForm";

const Registr = ({ navigation }) => {
  const { marginСompensator } = useKeyboard(78);
  const keyboardHide = () => Keyboard.dismiss();

  return (
    <>
      <Loader />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "android" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <Container>
            <Avatar />
            <AuthForm type={"registr"} />
            <Animated.Text
              style={{ ...styles.link, ...marginСompensator }}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an account? Sign In
            </Animated.Text>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Registr;
