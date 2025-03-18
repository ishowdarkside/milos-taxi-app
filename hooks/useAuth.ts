import { useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncSotrage from "@react-native-async-storage/async-storage";

import { queryKeys } from "@/keyFactory";
import { AuthType } from "@/types/authTypes";
import { preferenceKeys } from "@/preferenceKeys";
import { router } from "expo-router";
import { Session, User } from "@supabase/supabase-js";

export const useAuth = () => {
  const QueryClient = useQueryClient();

  const { data: session, isLoading } = useQuery({
    queryKey: queryKeys.auth,
    gcTime: Infinity,
    staleTime: Infinity,
    queryFn: async () => {
      const sessionStorageAuthData = await AsyncSotrage.getItem(preferenceKeys.auth);
      if (sessionStorageAuthData) return Promise.resolve<AuthType>(JSON.parse(sessionStorageAuthData));
      else return Promise.resolve<AuthType>({ user: null, session: null });
    },
  });

  const setAuth = async (data: { user: User | null; session: Session | null }) => {
    QueryClient.setQueryData(queryKeys.auth, data);
    await AsyncSotrage.setItem(preferenceKeys.auth, JSON.stringify(data));
  };

  const logout = async () => {
    setAuth({ session: null, user: null });
    await AsyncSotrage.removeItem(preferenceKeys.auth);
    router.replace("/(auth)/sign-in");
  };

  return { session, isLoading, setAuth, logout };
};
