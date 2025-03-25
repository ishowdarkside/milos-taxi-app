import { login } from "@/modules/Auth/services";
import { Session, SignInWithPasswordCredentials, User } from "@supabase/supabase-js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";
import { queryKeys } from "@/keyFactory";

export const useAuthActions = () => {
  const queryClient = useQueryClient();
  const onSuccessfulLogin = (res: { session: Session; user: User }) => {
    queryClient.setQueryData(queryKeys.auth, { user: res.user });
    router.replace("/(root)/(tabs)/home");
  };

  const { mutateAsync: loginMutation, isPending: isLogginIn } = useMutation({
    mutationFn: (payload: SignInWithPasswordCredentials) => login(payload),
    onSuccess: onSuccessfulLogin,
    onError: (err) => Toast.error(err.message),
  });

  return { loginMutation, isLogginIn };
};
