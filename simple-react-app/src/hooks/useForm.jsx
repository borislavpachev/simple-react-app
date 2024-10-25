import { useState } from 'react';

export default function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const updateForm = (prop) => (e) => {
    setForm({ ...form, [prop]: e.target.value });
  };

  const clearForm = () => setForm(initialValues);

  return { form, updateForm, clearForm };
}
