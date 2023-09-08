import React, { useEffect, useState } from 'react';
import { DEBOUNCE_TIME } from '../constants/apis';
import { debounce } from '../utils/debounce';
import { setData } from '../utils/setData';

interface useSearchProps<T> {
  keyword: string;
  getCacheCallback: () => Promise<T>;
  setCacheCallback: (data: T) => Promise<void>;
  getAPICallback: () => Promise<T>;
}

const debouncedFetchData = debounce(setData, DEBOUNCE_TIME);

export default function useSearch<T>({
  keyword,
  getCacheCallback,
  setCacheCallback,
  getAPICallback,
}: useSearchProps<T>) {
  const [searchList, setSearchList] = useState<T>();

  useEffect(() => {
    if (!keyword.trim()) return;
    debouncedFetchData<T>({
      getCacheCallback,
      setCacheCallback,
      getAPICallback,
      dispatchCallback: setSearchList,
    });
  }, [keyword]);

  return searchList;
}
