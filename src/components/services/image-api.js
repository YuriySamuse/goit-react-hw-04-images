import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const RESPONSE_OK = 200;
const serchParams = {
  key: '4214875-78e3ff66b8a1fc23d203f30eb',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

export const fetchImages = async (search, page) => {
  serchParams.q = search;
  serchParams.page = page;
  const response = await axios.get(BASE_URL, { params: serchParams });
  if (response.status !== RESPONSE_OK) {
    throw new Error(response.status);
  }
  return response.data;
};
