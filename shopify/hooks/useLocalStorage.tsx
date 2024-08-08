import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage<T>(key: string, initialValue: T | (() => T)): [T, (value: T) => void] {
    const [value, setValue] = useState<T>(() => {
        try {
            const jsonValue = AsyncStorage.getItem(key);
            if (jsonValue !== null) {
                return JSON.parse(jsonValue);
            }
        } catch (error) {
            console.error("Error reading AsyncStorage:", error);
        }

        if (typeof initialValue === "function") {
            return initialValue();
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(value)).then(() => {
            console.log(`Saved ${key}`);
        }).catch(error => {
            console.error("Error saving AsyncStorage:", error);
        });
    }, [key, value]);

    return [value, setValue];
}