import { Dimensions } from "react-native";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export const widthScale = (percentage: number) => winWidth * percentage / 100;
export const heightScale = (percentage: number) => winHeight * percentage / 100;