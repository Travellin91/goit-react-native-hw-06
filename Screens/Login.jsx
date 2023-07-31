import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";
import Container from "../components/Container/Container";
import AuthForm from "../components/AuthForm/AuthForm";
import Loader from "../components/Loader";
import { useKeyboard } from "../services/hooks";
import styles from "../components/AuthForm/AuthForm.styles";

const Login = ({ navigation }) => {
  const { marginСompensator } = useKeyboard(144);
  const keyboardHide = () => Keyboard.dismiss();
  const [login, setLogin] = useState("");

  const handleLogin = (loginValue) => {
    setLogin(loginValue);
  };

  return (
    <>
      <Loader />
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <Container>
          <AuthForm type={"auth"} login={login} handleLogin={handleLogin} />
          {/* Передаємо логін та функцію handleLogin у компонент AuthForm */}
          <Animated.Text
            style={{ ...styles.link, ...marginСompensator }}
            onPress={() => navigation.navigate("Registr")}
          >
            Don't have an account? Sign Up
          </Animated.Text>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
