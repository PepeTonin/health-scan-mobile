import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { style } from "./style";
import Colors from "../../../css/default/Colors";

export default function BackButton ({onPress}) {
    return (
        <Pressable onPress={onPress} style={style.container}>
            <Ionicons name="chevron-back" size={32} color={Colors.white} />
        </Pressable>
    )
}
