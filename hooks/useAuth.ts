import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/keyFactory";
import { AuthType } from "@/types/authTypes";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";

export const useAuth = () => {
  const { data: session, isLoading } = useQuery({
    queryKey: queryKeys.auth,
    gcTime: Infinity,
    refetchInterval: 55 * 60 * 1000,
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) return null;
      else return Promise.resolve<AuthType>({ user: data.user });
    },
  });

  const logout = async () => {
    await supabase.auth.signOut();
    router.replace("/(auth)/sign-in");
  };

  return { session, isLoading, logout };
};
