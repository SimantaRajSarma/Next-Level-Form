// InputField.tsx
import React from 'react';
import { Input } from "@/components/ui/input"


interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, type = 'text' }) => {
  const autoComplete = type === 'password' ? 'current-password' : 'username';

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
    />
  );
};

export default InputField;
