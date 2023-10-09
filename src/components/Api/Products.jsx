const url = 'https://api.noroff.dev/api/v1/online-shop';

async function fetchPosts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response didnt work properly');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error ${error.message}`);
  }
}

export default fetchPosts;
