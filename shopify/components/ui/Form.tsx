import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

interface FormProps {
  onSubmit: (values: any) => void;
  children: React.ReactNode;
  title: string;
  validationSchema: z.ZodType<any>;
}

const Form = ({ title, onSubmit, children, validationSchema }: FormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmitHandler = (values: any) => {
    onSubmit(values);
  };

  return (
    <View style={styles.container} className="m-5">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              control,
              rules: {
                required: {
                  value: true,
                  message: `${child.props.name} is required`,
                },
              },
            })
          : child
      )}
      <View style={styles.submitContainer}>
        <Button onPress={handleSubmit(onSubmitHandler)} title={title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  submitContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default Form;

const zodResolver = (schema: z.ZodType<any>) => {
  return (data: any) => {
    try {
      return {
        values: schema.parse(data),
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          values: {},
          errors: error.formErrors.fieldErrors,
        };
      }
      throw error;
    }
  };
};