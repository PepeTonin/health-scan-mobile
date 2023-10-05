import { Button } from "react-native-paper";
import Colors from "../../css/default/Colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <Button
      textColor={Colors.primaryFontColorButton}
      buttonColor={Colors.primaryButtonColor}
      mode="elevated"
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
