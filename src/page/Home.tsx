import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import SearchBox from '../components/SearchBox';
import useInput from '../hooks/useInput';

export default function Home() {
  const { inputValue, handleInputChange, isInputFocused, handleInputFocus } = useInput();

  return (
    <Layout>
      <main>
        <header>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </header>
        <SearchBar
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          isInputFocused={isInputFocused}
        />
        {isInputFocused && <SearchBox />}
      </main>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: rgb(150, 239, 238);
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 100%;
    max-width: 360px;
    padding: 100px 0 290px;
    height: 100%;
  }

  header {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    margin: 0;
    margin-bottom: 20px;
    font-family: inherit;
    text-align: center;
  }
`;
