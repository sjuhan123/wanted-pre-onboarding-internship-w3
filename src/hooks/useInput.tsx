import React, { useState } from 'react';

export default function useInput() {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = (isFocused: boolean) => {
    setInputFocused(isFocused);
  };

  return { inputValue, handleInputChange, isInputFocused, handleInputFocus };
}
