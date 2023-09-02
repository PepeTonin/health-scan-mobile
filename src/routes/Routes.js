import { NavigationContainer } from "@react-navigation/native";

import StackRoute from "./router/StackRouter";
import BottomRouter from "./router/BottomRouter";

export default function Routes() {

  const isLogged = false;

  return (
    <NavigationContainer>
      {isLogged? <StackRoute /> : <BottomRouter />}
    </NavigationContainer>
  );
}
