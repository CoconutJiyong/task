import React, { useState, KeyboardEvent } from "react";

interface tagTypes {
  title: string;
  index: number;
}

export const useOutputHooks = () => {
  const [tagItems, setTagItems] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
  };

  const handleInputTextTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "NumpadEnter" || event.code === "Enter") {
      if (event.target) {
        setTagItems((pre) => [
          ...pre,
          (event.target as HTMLInputElement).value,
        ]);
      }
    }
  };

  const handleInputTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagItems((pre) => [...pre, event.target.value]);
  };

  const handleRemoveTags = (tag: string) => {
    const removeTags = tagItems.filter((tagItem) => tagItem !== tag);
    setTagItems(() => [...removeTags]);
  };

  const handleResetTags = () => {
    setTagItems(() => []);
  };

  const handlePrintRadio = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.htmlFor);
  };

  return {
    tagItems: tagItems,
    input: input,
    onInputChange: handleInputOnChange,
    onInputTags: handleInputTags,
    onRemoveTags: handleRemoveTags,
    onResetTags: handleResetTags,
    onPrintRadioLabel: handlePrintRadio,
    onEnterInput: handleInputTextTags,
  };
};
