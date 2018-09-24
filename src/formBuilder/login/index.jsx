import FormBuilder from "@elevenlabs/react-formbuilder";

const LoginForm = () => {
  const form = new FormBuilder();

  form
    .createForm()
    .add("email", "TextField", {
      label: "Email",
      required: true,
      validators: ["Required", "Email"],
      initialValue: "john@gmail.com",
    })
    .add("password", "TextField", {
      type: "password",
      label: "Password",
      required: true,
      validators: [
        "Required",
        ["IsGreaterThan", { length: 6 }]
      ],
    })
    .add("rememberMe", "CheckboxField", {
      label: "Remember me",
    })
    .add("checkboxGroup", "CheckboxGroupField", {
      initialValue: [],
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    })
    .add("select", "SelectField", {
      placeholder: "Select ...",
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    })
    .add("submit", "Button", {
      type: "submit",
      label: "Login"
    });

  return form;
};

export default LoginForm;
