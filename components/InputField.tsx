import { InputFieldProps } from "@/types/type";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

const InputField = ({
  label,
  labelStyle,
  placeholder,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  error,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle} `}>{label}</Text>
          <View
            className={`flex flex-row justify-start items-center relative ${error ? "bg-red-50 border-red-300" : "bg-white  border-neutral-100"} rounded-lg border  focus:border-primary-500 ${containerStyle}`}
          >
            {icon && <View className="w-6 h-6 ml-4">{icon}</View>}
            <TextInput
              className={`rounded-lg p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left placeholder:text-secondary-400 placeholder:font-JakartaLight ${error ? "placeholder:text-red-400" : ""}`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
