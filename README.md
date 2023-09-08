# wanted-pre-onboarding-internship-w3

원티드 프리온보딩 인턴십 3주차 과제

## 과제 소개

- 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현 프로젝트입니다.

## 실행 방법

- [배포 링크](https://wanted-pre-onboarding-internship-w3.vercel.app/)
- 로컬 실행 방법
  - git clone
  - npm install
  - npm start

## 동작 방법

- 검색창에 질환명을 입력
- 입력한 질환명에 대한 검색어 추천 리스트가 표출
- 추천 리스트에서 키보드 방향키를 통해 이동 가능
- 추천 리스트 밖을 클릭하면 추천 리스트가 사라짐

## 프로젝트 소개

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  - 검색어가 없을 시 “검색어 없음” 표출
- API 호출별로 로컬 캐싱 구현
  - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
  - expire time을 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 구현 전략

- API 호출 횟수를 줄이기 위해 debounce를 사용
- API 호출 횟수를 줄이기 위해 캐싱 기능 구현
  - Cache Storage에 기존 검색 결과 저장하고, expire time이 경과되면, cache를 삭제 후 API 호출

```js
debouncedFetchData <
  SickInfoList >
  {
    getCacheCallback: () => getFromCacheStorage(keyword),
    setCacheCallback: (data) => setToCacheStorage(keyword, data, CACHE_RESET_TIME),
    getAPICallback: () => getRecommendedWord(keyword),
    dispatchCallback: (data) => setSearchList(data),
  };
```
