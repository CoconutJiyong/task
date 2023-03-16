import React, { useState, KeyboardEvent } from "react";
import { v4 as uuidCreate } from "uuid";

interface tagTypes {
  title: string;
  uuid: string;
}

export const useOutputHooks = () => {
  const [tagItems, setTagItems] = useState<tagTypes[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
  };

  const handleInputTextTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "NumpadEnter" || event.code === "Enter") {
      if (event.target) {
        setTagItems((pre) => [
          ...pre,
          {
            title: (event.target as HTMLInputElement).value,
            uuid: uuidCreate(),
          },
        ]);
      }
    }
  };

  const handleInputTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagItems((pre) => [
      ...pre,
      { title: event.target.value, uuid: uuidCreate() },
    ]);
  };
  const handleRemoveTags = (uuid: string) => {
    const removeTags = tagItems.filter((tagItem) => tagItem.uuid !== uuid);
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
