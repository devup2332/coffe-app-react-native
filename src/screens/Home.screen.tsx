import {
  View,
  Text,
  SafeAreaView,
  SafeAreaViewComponent,
  StyleSheet,
  StatusBar,
  ScrollView,
  ViewBase,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import CustomIcon from "../components/CustomIcon";
import { useState } from "react";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyles}
      >
        <HeaderBar />
        <Text style={styles.textStyles}>
          Find the best {"\n"}Coffee for you
        </Text>
        <View style={styles.InputContainerText}>
          <TouchableOpacity>
            <CustomIcon
              name="search"
              size={18}
              style={styles.IconInputSearchStyles}
              color={
                searchText
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee"
            value={searchText}
            style={styles.InputTextStyles}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            onChangeText={(value) => setSearchText(value)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewStyles: {
    flexGrow: 1,
  },
  textStyles: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    paddingLeft: SPACING.space_30,
  },
  InputContainerText: {
    borderRadius: 20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: "row",
    margin: SPACING.space_30,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_10,
    alignItems: "center",
  },
  InputTextStyles: {
    color: "white",
    fontFamily: FONTFAMILY.poppins_medium,
    flex: 1,
  },
  IconInputSearchStyles: {
    marginRight: SPACING.space_20,
  },
});

export default HomeScreen;
