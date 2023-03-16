import React, { useRef } from "react";
import * as S from "./Radio.styled";

interface RadioProps {
  item: ArrayProps[];
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ArrayProps {
  name: string;
  checked?: boolean;
}

const Radio = ({ item, onChange, onClick }: RadioProps) => {
  return (
    <>
      <S.Wrapper>
        {item.length > 0 &&
          item.map((item, index) => {
            return (
              <React.Fragment key={item.name}>
                <S.EmootionRadio
                  key={item.name}
                  type="radio"
                  id={item.name}
                  value={item.name}
                  name="grops"
                  defaultChecked={index === 0 ? true : false}
                  onChange={onChange}
                />
                <label
                  key={item.name + index}
                  htmlFor={item.name}
                  onClick={onClick}
                >
                  {item.name}
                </label>
              </React.Fragment>
            );
          })}
      </S.Wrapper>
    </>
  );
};

export default Radio;
