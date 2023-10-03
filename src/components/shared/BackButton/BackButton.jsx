import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { style } from "./style";

export default function BackButton ({onPress}) {
    return (
        <Pressable onPress={onPress} style={style.container}>
            <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
    )
}
