import { accompanyPostInputs } from '@/constant/AccompanyPostInputs';
import React, { ChangeEvent, useState } from 'react';
import InputWithLabel from '@components/accompany/InputWithLabel';

const initialState = {
  nickname: '',
  maxPeople: '',
  location: '',
  title: '',
  content: '',
};
interface PostFormProps {
  handleSubmit: (formData: any) => void;
}

const PostForm = ({ handleSubmit }: PostFormProps) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const getFormData = (e: React.FormEvent) => {
    // console.log(e);
    e.stopPropagation();
    e.preventDefault();
    handleSubmit(form);
  };

  return (
    <form id="accompanyPostForm" onSubmit={getFormData}>
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
                compType: item.compType,
                isReadOnly: item.isReadOnly,
                type: item.type,
              }}
            />
          </div>
        );
      })}
    </form>
  );
};

export default PostForm;
