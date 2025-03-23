import { router } from "expo-router";
import { Controller, useFormContext } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Oauth from "@/components/Oauth";
import { RegistrationInterface } from "@/modules/Auth/types";
import { createUserDocument } from "@/modules/Auth/services";
import { Toast } from "toastify-react-native";

const SignupScreen = () => {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
    getValues,
  } = useFormContext<RegistrationInterface>();

  const [name, email, password] = watch(["name", "email", "password", "role"]);

  const handleRegister = async () => {
    await trigger();
    if (errors.email || errors.name || errors.password) return;

    const payload = getValues();
    const { error } = await createUserDocument(payload.role, payload);

    if (!error) router.replace("/(root)/(tabs)/home");
    else Toast.error(error.message);
  };

  return (
    <View className="bg-white pt-14 pb-24 rounded-t-[50px] mt-auto w-full ">
      <View className="p-5 w-full">
        <Text className="font-JakartaBold text-5xl text-center mb-2">Registracija</Text>
        <Text className="text-center mb-14">Spreman si za voznju? Registruj se sada</Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              label="Ime"
              placeholder="Unesite svoje ime"
              icon={<FontAwesomeIcon icon={faUser} color={errors.name && !name ? "#f87171" : "#999999"} />}
              error={errors.name && !name}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputField
              label="Email"
              placeholder="Unesite svoju email adresu"
              icon={<FontAwesomeIcon icon={faEnvelope} color={errors.email && !email ? "#f87171" : "#999999"} />}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="email-address"
              error={errors.email && !email}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              label="Lozinka"
              placeholder="Unesite svoju lozinku"
              icon={<FontAwesomeIcon icon={faLock} color={errors.password && !password ? "#f87171" : "#999999"} />}
              secureTextEntry
              value={value}
              error={errors.password && !password}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

        <CustomButton title="Završi registraciju" onPress={handleRegister} className="mt-6" />

        <Oauth />

        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-in")}
          className="text-lg flex flex-row justify-center text-center text-general-200 mt-10"
        >
          <Text>Već imate nalog? </Text>
          <Text className="text-primary-500">Prijavi se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
