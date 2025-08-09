import { useState } from "react";

export function useCardState() {
  const [name, setName] = useState("");
  // State for the 'options' array, starting with 5 empty strings
  const [options, setOptions] = useState<string[]>(Array(5).fill(""));

  function updateOption(index: number, value: string) {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = value;
      return updatedOptions;
    });
  }

  return {
    name,
    setName,
    options,
    updateOption,
  };
}
