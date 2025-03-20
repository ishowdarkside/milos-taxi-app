import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";

const Home = () => {
  const { logout } = useAuth();
  const { user } = useUser();

  console.log(user);

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
