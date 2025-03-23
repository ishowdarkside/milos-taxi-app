import { View } from "react-native";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import SignupScreen from "@/modules/Auth/components/SignupScreen";
import RoleScreen from "@/modules/Auth/components/RoleScreen";
import { RegistrationInterface } from "@/modules/types";
import { FormProvider, useForm } from "react-hook-form";
import { registrationSchema } from "@/modules/utils";

const SignUp = () => {
  const form = useForm<RegistrationInterface>({ resolver: yupResolver(registrationSchema) });
  const [activeScreen, setActiveScreen] = useState<"signup" | "role" | "driver_details">("role");

  const onSignUpPress = async () => setActiveScreen("role");
  return (
    <FormProvider {...form}>
      <View className="flex-1 bg-primary-500">
        {activeScreen === "signup" && <SignupScreen onChangeScreen={onSignUpPress} />}
        {activeScreen === "role" && <RoleScreen navigateBack={() => setActiveScreen("signup")} />}
      </View>
    </FormProvider>
  );
};

export default SignUp;
