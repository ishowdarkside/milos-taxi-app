import { Text, TouchableOpacity, View } from "react-native";
import React, { SetStateAction } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { activeScreenType } from "@/app/(auth)/sign-up";
import { RegistrationInterface } from "@/modules/types";
import { Controller, useFormContext } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";

const DriverDetailsScreen = ({ setActiveScreen }: { setActiveScreen: React.Dispatch<SetStateAction<activeScreenType>> }) => {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
    clearErrors,
  } = useFormContext<RegistrationInterface>();

  const [carMake, carModel, carPlate] = watch(["car_make", "car_model", "car_plate"]);

  const handleNextStep = async () => {
    await trigger();
    if (!carMake || !carModel || !carPlate) return;

    clearErrors(["email", "name", "password"]);
    setActiveScreen("signup");
  };

  return (
    <SafeAreaView className="p-5 bg-white flex-1">
      <TouchableOpacity onPress={() => setActiveScreen("role")} className="bg-primary-500 self-start p-5 rounded-full">
        <FontAwesomeIcon icon={faArrowLeft} color="#ffff" />
      </TouchableOpacity>

      <View className="mt-5">
        <Text className="header">Detalji o vašem automobilu</Text>
        <Text className="subheader">
          Kako bi nastavili sa registracijom, odgovorite na par pitanja o vašem vozilu, što će pomoći vašim klijentima da vas
          odaberu/pronađu.
        </Text>

        <KeyboardAvoidingView className="mt-14 gap-4">
          <View>
            <Controller
              control={control}
              name="car_make"
              render={({ field: { onBlur, onChange, value } }) => (
                <InputField
                  label="Proizvodac vozila"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Wolkswagen"
                />
              )}
            />
            {errors.car_make && !carMake && <Text className="text-red-500">Ovo polje je obavezno!</Text>}
          </View>

          <View>
            <Controller
              control={control}
              name="car_model"
              render={({ field: { onBlur, onChange, value } }) => (
                <InputField label="Model vozila" onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Passat 6" />
              )}
            />
            {errors.car_model && !carModel && <Text className="text-red-500">Ovo polje je obavezno!</Text>}
          </View>

          <View>
            <Controller
              control={control}
              name="car_plate"
              render={({ field: { onBlur, onChange, value } }) => (
                <InputField
                  label="Registracijske oznake vozila"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="XXX-XXX-XXX"
                />
              )}
            />

            {errors.car_plate && !carPlate && <Text className="text-red-500">Ovo polje je obavezno!</Text>}
          </View>
          <View className="mt-14 gap-4">
            <CustomButton title="Dalje" className="mt-4" onPress={handleNextStep} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default DriverDetailsScreen;
