import React, { useState } from 'react';
import SearchBar from './SearchBar';

import { CACHE_RESET_TIME } from '../constants/apis';
import { SickInfos } from '../types';
import { getFromCacheStorage, setToCacheStorage } from '../utils/cacheStorage';
import { getRecommendedWord } from '../apis/get';
import SearchBox from './SearchBox';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import useSearch from '../hooks/useSearch';
import useModal from '../hooks/useModal';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const { isOn, targetRef } = useModal(inputValue);

  const searchList = useSearch<SickInfos>({
    keyword: inputValue,
    getCacheCallback: () => getFromCacheStorage(inputValue),
    setCacheCallback: (data) => setToCacheStorage(inputValue, data, CACHE_RESET_TIME),
    getAPICallback: () => getRecommendedWord(inputValue),
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setInputValue(keyword);
    setSelectedIndex(-1);
  };

  const selectListItemByKeyArrow = (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => {
    if (!searchList) return;
    if (e.nativeEvent.isComposing) return;
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const lastIndex = searchList.length - 1;
        setSelectedIndex((prev) => (prev < lastIndex ? prev + 1 : 0));
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const lastIndex = searchList.length - 1;
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : lastIndex));
        break;
      }
      default:
        break;
    }
  };

  return (
    <div ref={targetRef}>
      <SearchBar
        inputValue={inputValue}
        setSelectedIndex={setSelectedIndex}
        selectListItemByKeyArrow={selectListItemByKeyArrow}
        changeHandler={changeHandler}
      />
      {isOn && searchList && (
        <SearchBox
          searchList={searchList}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          selectListItemByKeyArrow={selectListItemByKeyArrow}
          inputValue={inputValue}
        />
      )}
    </div>
  );
}

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 12px;

  path {
    fill: var(--gray);
  }
`;
