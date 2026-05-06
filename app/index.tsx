import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Text className="text-success text-xl font-bold">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="bg-primary m-1 p-4 text-white">
        Onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="bg-primary m-1 p-4 text-white">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="bg-primary m-1 p-4 text-white">
        Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="bg-primary m-1 p-4 text-white"
      >
        Spotify Subscription{" "}
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="bg-primary m-1 p-4 text-white"
      >
        Claude Subscription
      </Link>
    </View>
  );
}
