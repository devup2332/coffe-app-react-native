import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import iconMoonConfig from "../../selection.json";
const CustomIcon = createIconSetFromIcoMoon(
  require("../../selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default CustomIcon;
