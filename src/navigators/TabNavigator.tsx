import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.screen";
import CartScreen from "../screens/Cart.screen";
import FavoritesScreen from "../screens/Favorites.screen";
import HistoryScreen from "../screens/History.screen";
import { COLORS, SPACING } from "../theme/theme";
import CustomIcon from "../components/CustomIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="like"
              size={21}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="bell"
              size={21}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackHex,
    elevation: 0,
    borderTopColor: "transparent",
    borderTopWidth: 0,
  },
  tabBarBlurStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabNavigator;
