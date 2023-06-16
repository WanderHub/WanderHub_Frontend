import React from 'react';

export interface LabelProps {
  htmlFor: string;
  classNameProps?: string;
  labelText: string;
}

const Label = ({ htmlFor, classNameProps, labelText }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={classNameProps}>
      {labelText}
    </label>
  );
};

export default Label;
