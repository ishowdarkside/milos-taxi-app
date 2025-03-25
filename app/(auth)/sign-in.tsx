import { router } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Controller, useForm } from "react-hook-form";

import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import Oauth from "@/components/Oauth";
import { useAuthActions } from "@/modules/Auth/hooks/useAuthActions";
import { LoginInterface } from "@/modules/Auth/types";
import { Toast } from "toastify-react-native";

const SignIn = () => {
  const { control, handleSubmit } = useForm<LoginInterface>();
  const { loginMutation } = useAuthActions();

  const onSignInPress = async (data: LoginInterface) => {
    if (!data.password || !data.email) return Toast.error("Unesite sva potrebna polja!");
    await loginMutation(data);
  };
  return (
    <View className="bg-primary-500 flex-1 ">
      <View className="bg-white pt-20 pb-24 rounded-t-[50px] mt-auto w-full">
        <View className="p-5">
          <Text className="font-JakartaBold text-5xl text-center mb-14">Prijava</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email"
                placeholder="Unesite svoju email adresu"
                icon={<FontAwesomeIcon icon={faEnvelope} color="#C2C2C2" />}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Password"
                placeholder="Unesite lozinku"
                icon={<FontAwesomeIcon icon={faLock} color="#C2C2C2" />}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                value={value}
              />
            )}
          />

          <CustomButton title="Prijavi se" onPress={handleSubmit(onSignInPress)} className="mt-6" />

          <Oauth />

          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up")}
            className="text-lg flex flex-row justify-center text-center text-general-200 mt-10"
          >
            <Text>Još uvijek nemaš nalog? </Text>
            <Text className="text-primary-500">Registruj se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
