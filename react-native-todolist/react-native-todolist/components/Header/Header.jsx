import { Image, Text, View } from "react-native";
import { s } from "./Header.style";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <>
      <Image style={s.img} source={logo} resizeMode="contain"></Image>
      <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
  );
}
export { Header };

