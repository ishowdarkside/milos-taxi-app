import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { logout } = useAuth();

  return (
    <View className="flex-1 h-full items-center justify-center">
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Ukini sesijuE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
