import { Image } from "react-native";
import { styles } from "./style";

export default function NutriScoreImage(props){
        if (!props.produto || !props.produto.nutriscore || !props.produto.nutriscore["2023"] || !props.produto.nutriscore["2023"].grade) {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-unknown.png")} />)
        }
        if (props.produto.nutriscore["2023"].grade == "a") {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-a.png")} />)
        }
        if (props.produto.nutriscore["2023"].grade == "b") {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-b.png")} />)
        }
        if (props.produto.nutriscore["2023"].grade == "c") {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-c.png")} />)
        }
        if (props.produto.nutriscore["2023"].grade == "d") {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-d.png")} />)
        }
        if (props.produto.nutriscore["2023"].grade == "e") {
          return (<Image
            style={styles.imageSize}
            source={require("../../../../assets/nutritional-score/nutri-score-e.png")} />)
        }
    
        return (<Image
          style={styles.imageSize}
          source={require("../../../../assets/nutritional-score/nutri-score-unknown.png")} />);
}
