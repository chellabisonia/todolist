import { s } from "./ButtonAdd.style";
import { TouchableOpacity, Text} from "react-native";



export function ButtonAdd({onPress}){
return <>

<TouchableOpacity onPress={onPress} style={s.btn}>
<Text style={s.txt}>+ New todo</Text>
</TouchableOpacity>

</>

}