import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type SageFormComponentBasic = {
  component: string;
  tag: string;
};

type SageFormInput = SageFormComponentBasic & {
  component: "input";
  placeholder: string;
  type: string;
  min?: number;
  max?: number;
};

type SageFormTextArea = SageFormComponentBasic & {
  component: "text-area";
  placeholder: string;
};

type SageFormRadio = {
  value: string;
  label: string;
};

type SageFormRadioGroup = SageFormComponentBasic & {
  component: "radio-group";
  radioComponents: SageFormRadio[];
};

export type SageFormComponent =
  | SageFormInput
  | SageFormTextArea
  | SageFormRadioGroup;

type SageFormParams = {
  component: SageFormComponent[];
  onSubmit: (formData: any) => void;
};

const SageForm: FC<SageFormParams> = ({ component, onSubmit }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject: Record<string, any> = {};
    for (let [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    onSubmit(formDataObject);
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      {component.map((value, index) => {
        return <Component key={index} component={value} />;
      })}
       <div className='text-center text-lg px-4 py-2'>
      <Button type="submit">Submit</Button>
      </div>
    </form>
    </div>
  );
};

const Component = ({ component }: { component: SageFormComponent; }) => {

  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (value: string, tag: string) => {
    setFormData({
      ...formData,
      [tag]: value
    });
  };

  switch (component.component) {
    case "input":
      return (
        <div style={{ marginBottom: '10px' }}>
        <SageFormInput
          config={component}
          onChange={(value) => handleChange(value, component.tag)}
        />
        </div>
      );
      case "text-area":
        return (
        <div style={{ marginBottom: '10px' }}> 
        <SageFormTextArea 
        config={component} 
        onChange={(value) => handleChange(value, component.tag)}
         />
         </div>
        );
    default:
      return <h1>Nothing to render</h1>;
  }
};

const SageFormInput = ({
  config,
  onChange,
}: {
  config: SageFormInput;
  onChange: (value: string) => void;
}) => {
  return (
    <Input
      {...config}
      name={config.tag}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const SageFormTextArea = ({ config, onChange }: { config: SageFormTextArea; onChange: (value: string) => void }) => {
  return (
    <Textarea
      name={config.tag}
      placeholder={config.placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};


export default SageForm;
