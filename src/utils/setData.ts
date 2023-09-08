import { isEmptyArray } from './isEmptyArray';

export interface IsetDataProps<T> {
  getCacheCallback: () => Promise<T>;
  setCacheCallback: (data: T) => Promise<void>;
  getAPICallback: () => Promise<T>;
  dispatchCallback: React.Dispatch<React.SetStateAction<T | undefined>>;
}

export const setData = async <T>({
  getCacheCallback,
  setCacheCallback,
  getAPICallback,
  dispatchCallback,
}: IsetDataProps<T>) => {
  const cacheResponse: T = await getCacheCallback();
  if (!isEmptyArray(cacheResponse)) {
    dispatchCallback(cacheResponse);
  } else {
    try {
      const response = await getAPICallback();
      await setCacheCallback(response);
      dispatchCallback(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
