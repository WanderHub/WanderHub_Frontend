import React from 'react';
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  classNameProps?: string;
}
const Image = ({ src, alt, width, height, classNameProps }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width ?? ''}
      height={height ?? ''}
      className={classNameProps ?? ''}
    />
  );
};

export default Image;
