import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../../contexts/auth";

export default function Home() {
  const { isLogged, usuario, setUsuario, setIsLogged } = useContext(AuthContext);

  return (
    <View>
      <Text>{usuario.login}</Text>
    </View>
  );
}
