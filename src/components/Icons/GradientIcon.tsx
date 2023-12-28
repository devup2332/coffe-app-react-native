import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "../../theme/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomIcon from "../CustomIcon";

interface GradientIconProps {
  name?: string;
  color?: string;
  size?: number;
}

const GradientIcon = ({ name, color, size }: GradientIconProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.gradientStyles}
      >
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  gradientStyles: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center"
  },
});
export default GradientIcon;
