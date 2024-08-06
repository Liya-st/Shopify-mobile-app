import React, { useState } from 'react';
import { View, StyleSheet,Button } from 'react-native';

interface FormProps {
  onSubmit: (values: any) => void;
  children: React.ReactNode;
}


export default function Form({ onSubmit, children }: FormProps) {
  const [formValues, setFormValues] = useState({});

  const handleChange = (fieldName: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              onChangeText: (value: any) =>
                handleChange(child.props.name, value),
            })
          : child
      )}
      <View style={styles.submitContainer}>
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  submitContainer: {
    alignItems: 'center',
  },
});