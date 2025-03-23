import { Text, TouchableOpacity, View } from "react-native";
import React, { SetStateAction } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { activeScreenType } from "@/app/(auth)/sign-up";
import { RegistrationInterface } from "@/modules/Auth/types";
import { Controller, useFormContext } from "react-hook-form";

const DriverDetailsScreen = ({ setActiveScreen }: { setActiveScreen: React.Dispatch<SetStateAction<activeScreenType>> }) => {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
    clearErrors,
  } = useFormContext<RegistrationInterface>();

  const [carMake, carModel, carPlate, carSeats] = watch(["car_make", "car_model", "car_plate", "car_seats"]);

  const handleNextStep = async () => {
    await trigger();
    if (!carMake || !carModel || !carPlate) return;

    clearErrors(["email", "name", "password"]);
    setActiveScreen("signup");
  };

  const handleBack = () => {
    setActiveScreen("role");
    clearErrors(["car_make", "car_plate", "car_model", "car_seats"]);
  };

  return (
    <SafeAreaView className="p-5 bg-white flex-1">
      <TouchableOpacity onPress={handleBack} className="bg-primary-500 self-start p-5 rounded-full">
        <FontAwesomeIcon icon={faArrowLeft} color="#ffff" />
      </TouchableOpacity>

      <View className="mt-5">
        <Text className="header">Detalji o vašem automobilu</Text>
        <Text className="subheader">
          Kako bi nastavili sa registracijom, odgovorite na par pitanja o vašem vozilu, što će pomoći vašim klijentima da vas
          odaberu/pronađu.
        </Text>

        <View className="mt-14 gap-4">
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
                  error={errors.car_make && !carMake}
                />
              )}
            />
          </View>

          <View>
            <Controller
              control={control}
              name="car_model"
              render={({ field: { onBlur, onChange, value } }) => (
                <InputField
                  label="Model vozila"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Passat 6"
                  error={errors.car_model && !carModel}
                />
              )}
            />
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
                  error={errors.car_plate && !carPlate}
                />
              )}
            />
          </View>

          <View>
            <Controller
              control={control}
              name="car_seats"
              render={({ field: { onBlur, onChange, value } }) => (
                <InputField
                  label="Broj sjedišta"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value as any}
                  placeholder="4"
                  error={errors.car_seats && !carSeats}
                  keyboardType="number-pad"
                />
              )}
            />
          </View>
          <View className="mt-2  gap-4">
            <CustomButton title="Dalje" className="mt-4" onPress={handleNextStep} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriverDetailsScreen;
