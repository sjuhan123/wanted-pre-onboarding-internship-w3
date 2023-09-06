import React from 'react';
import styled from 'styled-components';
import Suggestion from './Suggestion';

export default function SearchBox() {
  return (
    <SearchContainer>
      <RecentSearchBox>
        <p>최근 검색어</p>
        <Suggestion suggestion='비만' />
      </RecentSearchBox>
      <SuggestionBox>
        <p>추천 검색어</p>
        <Suggestion suggestion='비형감염' />
      </SuggestionBox>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  border-radius: 20px;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  padding: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  p {
    color: #818181;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
    font-family: inherit;
  }
`;

const RecentSearchBox = styled.div`
  border-bottom: 2px solid #e0e0e0;
  background-color: #ffffff;
`;

const SuggestionBox = styled.div`
  padding-top: 16px;
`;
