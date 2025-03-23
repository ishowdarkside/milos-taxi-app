import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";

const DriverOnboarding = () => {
  return (
    <SafeAreaView className="p-5 bg-white flex-1">
      <TouchableOpacity onPress={() => router.back()} className="bg-primary-500 self-start p-5 rounded-full">
        <FontAwesomeIcon icon={faArrowLeft} color="#ffff" />
      </TouchableOpacity>
      <Text>DriverOnboarding</Text>
    </SafeAreaView>
  );
};

export default DriverOnboarding;
