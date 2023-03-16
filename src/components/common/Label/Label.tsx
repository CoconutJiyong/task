import React from "react";
import * as S from "./Label.styled";

interface LabelProps {
  title: string;
}

const Label = ({ title }: LabelProps) => {
  return <S.Label>{title}</S.Label>;
};

export default Label;
