import { API_BASE_URL } from '@/utils/constants';

export const getPosts = async (id) => {
  let url;
  if (id) {
    url = `${API_BASE_URL}/posts?userId=${id}`;
  } else {
    url = `${API_BASE_URL}/posts`;
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error(error.message, error.code);
  }
};

export const createPost = async (form) => {
  const url = `${API_BASE_URL}/posts`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error(error.message, error.code);
  }
};
