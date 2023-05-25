const URL = 'https://swapi.dev/api';

export const getCharacters = async ( page ) => {
  try {
    const response = await fetch(`${URL}/people?page=${page}`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
