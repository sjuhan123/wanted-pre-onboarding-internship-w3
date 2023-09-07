import { API_METHOD } from '../constants/apis';

export const getAPI = async (url: string) => {
  try {
    console.info('calling api');
    const res = await fetch(url, {
      method: API_METHOD.GET,
    });
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
