import { PrivateLayout } from "@/components/PrivateLayout";
import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <PrivateLayout>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 30,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 20,
            height: 78,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            flexDirection: "row",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />,
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />,
          }}
        />
      </Tabs>
    </PrivateLayout>
  );
};

export default Layout;
