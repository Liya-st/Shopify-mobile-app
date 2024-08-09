import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { auth } from "@/firebase/config";
import Home from "../home";
import Landing from "@/components/ui/Landing";

export default function HomeScreen() {
  

 const currentUser = auth.currentUser

  return <View>{currentUser ? <Home /> : <Landing />}</View>;
}
