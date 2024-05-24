import { baseUrl } from "./constants.js";
function getIdFromUrl() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  //console.log(params);
  //console.log(id);
  return id;
}
async function fetchPost(postId) {
  let res = await fetch(`${baseUrl}/blog/posts/erlhal/${postId}`);
  res = await res.json();
  let data = res.data;
  return data;
}
export default getIdFromUrl;
export { fetchPost };
