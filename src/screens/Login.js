import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import InputForm from "../components/InputForm";
import { useState } from "react";
import { color } from "../global/color";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../feature/userSlice";
import { loginSchema } from "../validations/loginSchema";
import { deleteSesion, insertSession } from "../config/dbSQLite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const response = await triggerLogin({ email, password });
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
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresar</Text>
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
        <SubmitButton onPress={onSubmit} title="Ingresar" />
        <Text style={styles.sub}>No tienen una cuenta? Registrate</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.subLink}>Registrarme</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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
