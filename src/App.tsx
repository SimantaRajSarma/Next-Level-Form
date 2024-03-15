import React from 'react';
import SageForm, { SageFormComponent } from './components/form/Form';

const App: React.FC = () => {
  const config: SageFormComponent[] = [
    {
      component: 'input',
      placeholder: 'Username',
      tag: 'username',
      type: 'text',
    },
    {
      component: 'input',
      placeholder: 'Password',
      tag: 'password',
      type: 'password',
    },
    {
      component: 'text-area',
      placeholder: 'Address',
      tag: 'address',
    },
    {
      component: 'input',
      placeholder: 'Gender',
      tag: 'gender',
      type: 'text',
    },
  ];

  const sendFormData = (formData: any) => {
    console.log(formData);
  };
  
  return (
    <>
      <h1 className='titleStyle font-bold'>Form Component</h1>
      <SageForm component={config} onSubmit={sendFormData} />
   </>
  );
};

export default App;
