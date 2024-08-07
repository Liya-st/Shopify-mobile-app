import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User, UserCredential } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCifVBrUaC_oxl0HfCz9KhxEJQPSsYTDdA",
  authDomain: "shopify-m.firebaseapp.com",
  projectId: "shopify-m",
  storageBucket: "shopify-m.appspot.com",
  messagingSenderId: "438150289467",
  appId: "1:438150289467:web:31d64dacef7a3757caa41e"
};
export const getFirebaseApp = (options: FirebaseOptions) => {
  return !getApps().length ? initializeApp(options) : getApp();
};

export const useFirebaseAuth = () => {
  const getFirebaseAuth = getAuth(getFirebaseApp(firebaseConfig));
  return { auth: getFirebaseAuth };
};
export const auth = getAuth(getFirebaseApp(firebaseConfig));
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(getFirebaseApp(firebaseConfig));

