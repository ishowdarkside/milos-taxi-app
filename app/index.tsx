import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { ActivityIndicator } from "react-native";

const Home = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) return <ActivityIndicator />;
  if (session?.session && session.user) return <Redirect href="/(root)/(tabs)/home" />;
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
