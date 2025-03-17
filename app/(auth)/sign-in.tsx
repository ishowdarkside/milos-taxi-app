import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import Oauth from "@/components/Oauth";
import { useAuthActions } from "@/modules/Auth/hooks/useAuthActions";

const SignIn = () => {
  const { loginMutation } = useAuthActions();
  const [form, setForm] = useState({ email: "", password: "" });

  const onSignInPress = async () => {
    await loginMutation({ email: form.email, password: form.password });
  };
  return (
    <ScrollView className="flex-1 bg-white" snapToStart={false}>
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome 👋</Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm((prev) => ({ ...prev, email: value }))}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm((prev) => ({ ...prev, password: value }))}
          />

          <CustomButton title="Sign in" onPress={onSignInPress} className="mt-6" />

          <Oauth />

          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up")}
            className="text-lg flex flex-row justify-center text-center text-general-200 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
