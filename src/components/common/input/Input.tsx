import React, { KeyboardEvent } from "react";
import * as S from "./Input.styled";

interface InputProps {
  ref?: React.RefObject<HTMLInputElement> | undefined;
  type: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ ref, type, placeholder, onChange, onKeyDown }: InputProps) => {
  return (
    <>
      <S.EmotionInput
        type={type}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default Input;
