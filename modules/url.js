import { baseUrl } from "./constants.js";

function getIdFromUrl() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");

  return id;
}

async function fetchPost(postId) {
  let res = await fetch(`${baseUrl}/blog/posts/erlhal/${postId}`);
  res = await res.json();
  let data = res.data;

  return data;
}

async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseUrl}/blog/posts/erlhal`);
    const res = await response.json();

    if (!response.ok) throw new Error(res.status);

    const data = res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function fetchCarouselPosts() {
  try {
    const response = await fetch(`${baseUrl}/blog/posts/erlhal?limit=3`);
    const res = await response.json();

    if (!response.ok) throw new Error(res.status);

    const data = res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default getIdFromUrl;
export {
  fetchPost,
  fetchAllPosts,
  fetchCarouselPosts,
};
