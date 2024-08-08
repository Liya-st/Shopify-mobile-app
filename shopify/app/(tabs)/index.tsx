import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { auth } from "@/firebase/config";
import Home from "../home";
import Landing from "@/components/ui/Landing";

export default function HomeScreen() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }

  return <View>{currentUser ? <Home /> : <Landing />}</View>;
}
