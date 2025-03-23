import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCarSide, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { useFormContext } from "react-hook-form";
import { RegistrationInterface } from "@/modules/Auth/types";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import React, { SetStateAction } from "react";
import { activeScreenType } from "@/app/(auth)/sign-up";

const RoleScreen = ({ setActiveScreen }: { setActiveScreen: React.Dispatch<SetStateAction<activeScreenType>> }) => {
  const { setValue } = useFormContext<RegistrationInterface>();

  const chooseRole = (role: "drivers" | "clients") => {
    setValue("role", role);
    if (role === "drivers") setActiveScreen("driver_details");
    else setActiveScreen("signup");
  };

  return (
    <SafeAreaView className="h-full flex-1  relative bg-white">
      <View className="flex-1 p-5 pt-10">
        <Text className="header text-center">Odaberi ulogu</Text>
        <Text className="text-center subheader">Kako bi volio da koristis Milos App</Text>

        <View className=" mt-10 gap-5 ">
          <TouchableOpacity
            onPress={() => chooseRole("clients")}
            className=" relative  flex-row gap-4 p-5 items-start bg-secondary-100 border border-secondary-200 rounded-md"
          >
            <View className="absolute top-5 right-5  ">
              <FontAwesomeIcon icon={faArrowRight} color="#C2C2C2" />
            </View>
            <View className="p-5 rounded-full bg-primary-100 border-primary-500 border">
              <FontAwesomeIcon icon={faUser} size={14} color="#0286FF" />
            </View>

            <View className="w-full">
              <Text className="text-xl font-JakartaSemiBold">Putnik</Text>
              <Text className="max-w-72 text-xs mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => chooseRole("drivers")}
            className=" relative flex-row gap-4 p-5 items-start bg-secondary-100 border border-secondary-200 rounded-md"
          >
            <View className="absolute top-5 right-5  ">
              <FontAwesomeIcon icon={faArrowRight} color="#C2C2C2" />
            </View>
            <View className="p-5 rounded-full bg-green-100 border-green-500 border">
              <FontAwesomeIcon icon={faCarSide} size={14} color="#22c55e" />
            </View>

            <View className=" justify-start w-auto">
              <Text className="text-xl font-JakartaSemiBold">Vozac</Text>
              <Text className="max-w-72 text-xs mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="mt-auto">
          <Text className="mb-5 text-center">Vec imas postojeci nalog?</Text>
          <CustomButton title="Prijavi se" onPress={() => router.replace("/(auth)/sign-in")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RoleScreen;
