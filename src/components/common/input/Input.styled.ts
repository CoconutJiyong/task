import styled from "@emotion/styled";

export const EmotionInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: none;

  border-bottom: 2px solid #9f9f9f;

  :focus {
    outline: none;
  }

  &::placeholder {
    color: #9f9f9f;
  }
`;
