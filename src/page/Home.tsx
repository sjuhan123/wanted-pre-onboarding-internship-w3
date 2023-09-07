import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';

export default function Home() {
  return (
    <Layout>
      <header>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </header>
      <Search />
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;

  header {
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 42px;
  }
`;
