import React from 'react';
import styled from 'styled-components';

export default function Suggestion({ suggestion }: { suggestion: string }) {
  return (
    <SuggestionBox>
      🔍<div>{suggestion}</div>
    </SuggestionBox>
  );
}

const SuggestionBox = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;

  div {
    padding: 0 8px;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;
  }
`;
