import { Field, FieldProps } from "formik";
import { InputText } from "primereact/inputtext";
import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <InputText
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className="w-full p-2 border rounded-md"
        />
      )}
    </Field>
  );
};

export default Input;
