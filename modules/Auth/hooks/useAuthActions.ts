import { useAuth } from "@/hooks/useAuth";
import { login, signup } from "@/modules/Auth/services";
import { SignUpType } from "@/types/authTypes";
import { Session, SignInWithPasswordCredentials, User } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";

export const useAuthActions = () => {
  const { setAuth } = useAuth();

  const onSuccessfulAuth = (response: { user: User | null; session: Session | null }) => {
    setAuth(response);
    router.replace("/(root)/(tabs)/home");
  };

  const { mutateAsync: registerMutation, isPending } = useMutation({
    mutationFn: (payload: SignUpType) => signup(payload),
    onError: (err) => Toast.error(err.message, "top"),
  });

  const { mutateAsync: loginMutation, isPending: isLogginIn } = useMutation({
    mutationFn: (payload: SignInWithPasswordCredentials) => login(payload),
    onSuccess: onSuccessfulAuth,
    onError: (err) => Toast.error(err.message, "top"),
  });

  return { registerMutation, isPending, loginMutation, isLogginIn };
};
