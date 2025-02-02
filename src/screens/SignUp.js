import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { color } from "../global/color";
import { useNavigation } from "@react-navigation/native";
import { useSignUpMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../feature/userSlice";
import { signupSchema } from "../validations/singupSchema";
import { deleteSesion, insertSession } from "../config/dbSQLite";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerSignup] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      signupSchema.validateSync({ email, password, confirmPassword });
      const response = await triggerSignup({ email, password });
      const user = {
        email: response.data.email,
        idToken: response.data.idToken,
        localId: response.data.localId,
      };
      dispatch(setUser(user));
      await deleteSesion();
      await insertSession(user.localId, user.email, user.idToken);
    } catch (error) {
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          setConfirmPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          setConfirmPasswordError("");
          break;
        case "confirmPassword":
          setConfirmPasswordError(error.message);
          setEmailError("");
          setPasswordError("");
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Registrarme</Text>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputForm
          label="Confirmar password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={confirmPasswordError}
        />
        <SubmitButton title="Registrarme" onPress={onSubmit} />
        <Text style={styles.sub}>Tenes cuenta registrada?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: color.primario,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  title: {
    color: color.letra,
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  sub: {
    color: color.letra3,
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  subLink: {
    color: color.letra,
    fontSize: 16,
    fontFamily: "RobotoRegular",
    marginBottom: 10,
  },
});
