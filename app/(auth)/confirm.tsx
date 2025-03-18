import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { useAuth } from "@/hooks/useAuth";
import { useConfirmSignup } from "@/modules/Auth/hooks/useConfirmSignup";
import { useState } from "react";
import { Text, View } from "react-native";

const ConfirmScreen = () => {
  const [token, setToken] = useState("");
  const { session } = useAuth();

  const { verifyIntegrityMutation } = useConfirmSignup();

  return (
    <View className="flex-1 h-full items-center justify-center px-5">
      <Text>Check {session?.user?.email} email and look for verification code</Text>
      <InputField onChangeText={(e) => setToken(e)} placeholder="Verification token" label="Verification token" />
      <CustomButton onPress={() => verifyIntegrityMutation(token)} title="Verify" />
    </View>
  );
};

export default ConfirmScreen;
