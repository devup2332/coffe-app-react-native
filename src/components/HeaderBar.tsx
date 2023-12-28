import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import GradientIcon from "./Icons/GradientIcon";
import ProfilePic from "./ProfilePic";

interface HeaderBarProps {
  title?: string;
}

const HeaderBar = ({ title = "" }: HeaderBarProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientIcon color={COLORS.primaryLightGreyHex} size={17} name="menu" />
      <Text style={styles.HeaderTitleStyles}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderTitleStyles: {
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
