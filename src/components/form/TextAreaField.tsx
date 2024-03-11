// TextAreaField.tsx
import React from 'react';
import { Textarea } from "@/components/ui/textarea"


interface TextAreaFieldPropsWithoutType {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

interface TextAreaFieldProps extends TextAreaFieldPropsWithoutType {
    type?: never;
  }

const TextAreaField: React.FC<TextAreaFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextAreaField;
