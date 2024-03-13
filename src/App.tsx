// App.tsx
import Form from './components/form/Form'

const App: React.FC = () => {

  interface InputFieldConfig {
    component: 'input';
    placeholder: string;
    tag: string;
    type: string;
}

interface TextAreaFieldConfig {
    component: 'textarea';
    placeholder: string;
    tag: string;
    type?: never;
}

type FieldConfig = InputFieldConfig | TextAreaFieldConfig;

const config: FieldConfig[] = [
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
        component: 'textarea',
        placeholder: 'Address',
        tag: 'address',
    },
    {
      component: "input",
      placeholder: "gender",
      tag: "gender",
      type: "text",
    },

];


  const sendFormData = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <h1 className='titleStyle font-bold'>Ye Form Nehi hai bhai :)</h1>
      <Form config={config} onSubmit={sendFormData} />
    </div>
  );
};

export default App;
