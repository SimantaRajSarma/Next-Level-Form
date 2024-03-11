// DynamicForm.tsx
import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import { Button } from "@/components/ui/button"



interface FieldConfig {
  component: string;
  placeholder: string;
  tag: string;
  type?: string;
}

interface DynamicFormProps {
  config: FieldConfig[];
  onSubmit: (value: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (value: string, tag: string) => {
    setFormData({
      ...formData,
      [tag]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedData: { [key: string]: string } = {};
    config.forEach(field => {
      formattedData[field.tag] = formData[field.tag];
    });
    onSubmit(formattedData);
  };
  
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => {
        if (field.component === 'input') {
          return (
            <div key={index} style={{ marginBottom: '10px' }}>
            <InputField
              key={index}
              placeholder={field.placeholder}
              value={formData[field.tag] || ''}
              onChange={(value) => handleChange(value, field.tag)}
              type={field.type}
            />
            </div>
          );
        } else if (field.component === 'text-area') {
          return (
            <div key={index} style={{ marginBottom: '10px' }}>
            <TextAreaField
              key={index}
              placeholder={field.placeholder}
              value={formData[field.tag] || ''}
              onChange={(value) => handleChange(value, field.tag)}
            />
            </div>
          );
        }
        return null;
      })}
      <div className='text-center text-lg px-4 py-2'>
      <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  );
};

export default DynamicForm;
