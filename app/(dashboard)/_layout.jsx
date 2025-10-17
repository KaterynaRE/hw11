import { Tabs } from "expo-router"
import { COLORS } from "../../constants/colors";
import { useColorScheme, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;
    return <Tabs screenOptions={
        {
            headerShown: false,
            tabBarStyle: {
                backgroundColor: theme.navBackground,
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
        }
    }>
        <Tabs.Screen name="profile" options={
            {
                title: "Профіль",
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? "person" : "person-outline"}
                        size={24}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                )
            }
        } />
        <Tabs.Screen name="report" options={
            {
                title: "Звіти",
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? "book" : "book-outline"}
                        size={24}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                )
            }
        } />
        <Tabs.Screen name="settings" options={
            {
                title: "Параметри",
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? "settings" : "settings-outline"}
                        size={24}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                )
            }
        } />
    </Tabs>
}

export default DashboardLayout;

