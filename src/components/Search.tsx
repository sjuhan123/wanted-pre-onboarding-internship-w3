import React, { useState } from 'react';
import SearchBar from './SearchBar';

import { debounce } from '../utils/debounce';
import { setData } from '../utils/setData';
import { CACHE_RESET_TIME, DEBOUNCE_TIME } from '../constants/apis';
import { SickInfos } from '../types';
import { getFromCacheStorage, setToCacheStorage } from '../utils/cacheStorage';
import { getRecommendedWord } from '../apis/get';
import SearchBox from './SearchBox';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

const debouncedFetchData = debounce(setData, DEBOUNCE_TIME);

export default function Search() {
  const [searchList, setSearchList] = useState<SickInfos>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSelectedIndex(-1);
    const keyword = e.target.value;
    if (!keyword.trim()) return;
    debouncedFetchData<SickInfos>({
      getCacheCallback: () => getFromCacheStorage(keyword),
      setCacheCallback: (data) => setToCacheStorage(keyword, data, CACHE_RESET_TIME),
      getAPICallback: () => getRecommendedWord(keyword),
      dispatchCallback: (data) => setSearchList(data),
    });
  };

  const selectListItemByKeyArrow = (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => {
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
    <>
      <SearchBar
        inputValue={inputValue}
        setSelectedIndex={setSelectedIndex}
        selectListItemByKeyArrow={selectListItemByKeyArrow}
        changeHandler={changeHandler}
      />
      {inputValue && (
        <SearchBox
          searchList={searchList}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          selectListItemByKeyArrow={selectListItemByKeyArrow}
          inputValue={inputValue}
        />
      )}
    </>
  );
}

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 12px;

  path {
    fill: var(--gray);
  }
`;
