import { Button } from "react-native-paper";
import Colors from "../../../css/default/Colors";
import { Text } from "react-native";
import { styles } from "./style";

export default function PrimaryButton({ children, onPress, props }) {
  return (
    <Button
      textColor={Colors.primaryFontColorButton}
      buttonColor={Colors.primaryButtonColor}
      mode="elevated"
      onPress={onPress}
    >
      <Text style={styles.textChildren}>
        {children}
      </Text>
    </Button>
  );
}
