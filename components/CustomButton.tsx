import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity, View } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariant = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-500";
    case "success":
      return "text-green-500";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 p-3 ${getBgVariantStyle(bgVariant)} ${className} `}
    {...props}
  >
    {IconLeft && (
      <View className="mr-4">
        <IconLeft />
      </View>
    )}
    <Text className={`text-lg font-bold ${getTextVariant(textVariant)}`}>{title}</Text>
    {IconRight && (
      <View className="mr-4">
        <IconRight />
      </View>
    )}
  </TouchableOpacity>
);

export default CustomButton;
