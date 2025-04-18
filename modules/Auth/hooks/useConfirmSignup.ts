import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";

export const useConfirmSignup = () => {
  const { session } = useAuth();

  const { mutate: verifyIntegrityMutation, isPending } = useMutation({
    mutationFn: async (token: string) => {
      if (!session?.user) return;

      const { error } = await supabase.auth.verifyOtp({
        email: session?.user?.email || "",
        token,
        type: "signup",
      });

      if (error) return Toast.error(error.message);

      Toast.success("Uspjesno ste prijavljeni!");
      router.replace("/(root)/(tabs)/home");
    },
  });

  return { verifyIntegrityMutation, isPending };
};
