import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 h-full ">
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Ukini sesijuE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
