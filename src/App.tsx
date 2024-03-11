// App.tsx
import React from 'react';
import Form from './components/form/Form'

const App: React.FC = () => {
  const config = [
    {
      component: "input",
      placeholder: "username",
      tag: "username",
      type: "text",
    },
    {
      component: "input",
      placeholder: "Enter your password...",
      tag: "password",
      type: "password",
    },
    {
      component: "text-area",
      placeholder: "address",
      tag: "address",
    },
    {
      component: "input",
      placeholder: "gender",
      tag: "gender",
      type: "text",
    },
  ];

  const handleSubmit = (formData: any) => {
    console.log(formData);
  };

  const validateConfig = () => {
    config.forEach(field => {
      if (field.component === 'text-area' && field.type) {
        throw new Error(`'type' property is not allowed for 'text-area' components in config`);
      }
    });
  };

  validateConfig();

  return (
    <div>
      <h1 className='titleStyle'>Ye Form Nehi hai bhai :)</h1>
      <Form config={config} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
