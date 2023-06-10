import { accompanyPostInputs } from '@/constant/AccompanyPostInputs';
import React, { ChangeEvent, useState } from 'react';
import InputWithLabel from './InputWithLabel';
import Button from '@components/Atoms/Button';

interface FormProps {
  initialState: object;
  submitFunc: (formData: any) => void;
  btnTxt: string;
}

const Form = ({ initialState, submitFunc, btnTxt }: FormProps) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                classNameProps: 'border-2 w-full h-9 px-3',
              }}
            />
          </div>
        );
      })}
      <Button
        type="submit"
        classNameProps={
          'text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary w-[70%] m-auto block mt-[1rem]'
        }
      >
        {btnTxt}
      </Button>
    </form>
  );
};

export default Form;
