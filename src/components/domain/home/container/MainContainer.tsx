import { useOutputHooks } from "./hooks/useOutputHooks";

import Input from "@/src/components/common/input/Input";
import Title from "@/src/components/common/title/Title";
import Radio from "@/src/components/common/radio/Radio";

import * as S from "./MainContainer.styled";

const MainContainer = () => {
  const radioItems = [{ name: "All" }, { name: "Agree" }, { name: "Disagree" }];
  const placeholder = "Enter the name of driver";
  // custom hooks
  const {
    tagItems,
    input,
    onInputChange,
    onInputTags,
    onRemoveTags,
    onResetTags,
    onPrintRadioLabel,
    onEnterInput,
  } = useOutputHooks();

  return (
    <S.Main>
      {
        <table>
          <tbody>
            <tr>
              <S.TitleTd>
                <Title title="Marketing" />
              </S.TitleTd>
              <S.BodyTd>
                <Radio
                  item={radioItems}
                  onChange={onInputTags}
                  onClick={onPrintRadioLabel}
                />
              </S.BodyTd>
            </tr>
            <tr>
              <S.TitleTd>
                <Title title="Name" />
              </S.TitleTd>
              <S.BodyTd>
                <Input
                  type="text"
                  placeholder={placeholder}
                  onChange={onInputChange}
                  onKeyDown={onEnterInput}
                />
              </S.BodyTd>
            </tr>
            <tr>
              <S.TitleTd>
                <Title title="Reset" />
                <S.ResetButton onClick={onResetTags}>↻</S.ResetButton>
              </S.TitleTd>
              <S.BodyTd>
                <S.TagWrapper>
                  {tagItems &&
                    tagItems.map((tag) => {
                      return (
                        <S.TagItem key={tag.uuid}>
                          {tag.title}
                          <span onClick={() => onRemoveTags(tag.uuid)}>X</span>
                        </S.TagItem>
                      );
                    })}
                </S.TagWrapper>
              </S.BodyTd>
            </tr>
            <tr>
              <S.TitleTd>
                <Title title="Input onChange" />
              </S.TitleTd>
              <S.BodyTd>{input}</S.BodyTd>
            </tr>
          </tbody>
        </table>
      }
    </S.Main>
  );
};

export default MainContainer;
