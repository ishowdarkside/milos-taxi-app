import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import AsyncSotrage from "@react-native-async-storage/async-storage";

export const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.EXPO_PUBLIC_SUPABASE_API_KEY!, {
  auth: {
    storage: AsyncSotrage,
  },
});
