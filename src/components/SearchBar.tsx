import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (isFocus: boolean) => void;
  isInputFocused: boolean;
}

export default function SearchBar({
  inputValue,
  handleInputChange,
  handleInputFocus,
  isInputFocused,
}: SearchBarProps) {
  return (
    <SearchBarBox isInputFocused={isInputFocused}>
      <div>🔍</div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder='질환명을 입력해 주세요.'
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
      />
      <button>검색</button>
    </SearchBarBox>
  );
}

interface SearchBarBox {
  isInputFocused: boolean;
}

const SearchBarBox = styled.div<SearchBarBox>`
  border-radius: 42px;
  border: 2px solid;
  border-color: ${({ isInputFocused }) => (isInputFocused ? '#007be9' : '#ffffff')};
  background-color: #ffffff;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 100%;
  padding: 0px 16px;

  input {
    border: none;
    background-color: transparent;
    padding: 0 8px;
    flex: 1;
    height: 48px;
    font-size: 1rem;
    font-weight: 400;
    font-family: inherit;
    outline: none;

    &::placeholder {
      color: #c4c4c4;
    }
  }

  button {
    border: none;
    border-radius: 100%;
    background-color: #007be9;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    font-weight: 1000;
  }
`;
