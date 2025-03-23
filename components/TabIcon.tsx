import { Image, ImageSourcePropType } from "react-native";
import { View } from "react-native";

type TabIconProps = {
  focused: boolean;
  source: ImageSourcePropType;
};

const TabIcon = ({ focused, source }: TabIconProps) => {
  return (
    <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
      <Image source={source} tintColor="white" resizeMode="contain" className="w-7 h-7" />
    </View>
  );
};

export default TabIcon;
