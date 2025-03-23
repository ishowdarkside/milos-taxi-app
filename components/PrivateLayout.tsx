import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { ReactNode } from "react";
import { ActivityIndicator } from "react-native";

export const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { session, isLoading } = useAuth();

  if (isLoading) return <ActivityIndicator />;
  if (!session?.user) return <Redirect href="/(auth)/sign-in" />;

  return children;
};
