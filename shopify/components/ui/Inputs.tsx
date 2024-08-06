import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<TextInput> {
    title: string;
    error?: string;
  }

export default function input({title, error, ...rest}: Props){
    return (
        <View className = ' flex gap-2 '>
            <Text >
             {title}
            </Text>
            <TextInput
            className = "input input-bordered flex items-center gap-2 text-blue-700"
            />
            {error && <Text className = "text-red-400 text-xs">{error}</Text>}
        </View>
    )
}