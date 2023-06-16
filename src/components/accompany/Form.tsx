import { accompanyPostInputs } from '@/constant/AccompanyPostInputs';
import React, { ChangeEvent, useState } from 'react';
import InputWithLabel from './InputWithLabel';

interface FormProps {
  initialState: object;
  submitFunc: (formData: any) => void;
}

const Form = ({ initialState, submitFunc }: FormProps) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
    // console.log(form);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitFunc(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {accompanyPostInputs.map((item, idx) => {
        return (
          <div key={idx} className="flex flex-col items-start align-baseline mb-2">
            <InputWithLabel
              labelProps={item}
              inputProps={{
                placeholder: item.placeholder,
                value: form[item.htmlFor as keyof typeof form],
                handleChange,
                id: item.htmlFor,
                type: item.type,
                classNameProps:
                  'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
                compType: item.compType,
                isReadOnly: item.isReadOnly,
              }}
              textareaProps={{
                placeholder: item.placeholder,
                value: form[item.htmlFor as keyof typeof form],
                handleChange,
                id: item.htmlFor,
                classNameProps:
                  'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
                compType: item.compType,
                isReadOnly: item.isReadOnly,
              }}
            />
          </div>
        );
      })}
    </form>
  );
};

export default Form;
