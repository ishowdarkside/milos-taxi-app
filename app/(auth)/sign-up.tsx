import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import Oauth from "@/components/Oauth";
import { useAuthActions } from "@/modules/Auth/hooks/useAuthActions";
import { useAuth } from "@/hooks/useAuth";

const SignUp = () => {
  const { registerMutation } = useAuthActions();
  const { setAuth } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onSignUpPress = async () => {
    const response = await registerMutation({
      email: form.email,
      first_name: form.name,
      password: form.password,
      last_name: "dummy",
    });

    setAuth(response);
    router.replace("/(auth)/confirm");
  };
  return (
    <ScrollView className="flex-1 bg-white" snapToStart={false}>
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Create Your Account</Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm((prev) => ({ ...prev, name: value }))}
          />

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

          <CustomButton title="Sign up" onPress={onSignUpPress} className="mt-6" />

          <Oauth />

          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-in")}
            className="text-lg flex flex-row justify-center text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log in</Text>
          </TouchableOpacity>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
