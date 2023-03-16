import * as S from "./Title.styled";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <S.EmotionTitle>{title}</S.EmotionTitle>
    </>
  );
};

export default Title;
