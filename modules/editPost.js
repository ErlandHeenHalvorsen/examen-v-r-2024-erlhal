import { baseUrl } from "./constants.js";
import getIdFromUrl from "./url.js";
import { fetchPost } from "./url.js";
///
const editTitle = document.querySelector(`#title-input`);
const editBody = document.querySelector(`#body-input`);
const editUrl = document.querySelector(`#edit-url-input`);
const editAlt = document.querySelector(`#edit-alt-input`);
const updateButton = document.querySelector(`.edit-post-button`);

///
const id = getIdFromUrl();

async function updatePost(body) {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);

    let res = await fetch(`${baseUrl}/blog/posts/erlhal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
  }
}
async function editButtonSubmit() {
  let fetchPostData = await fetchPost(id);
  editTitle.value = fetchPostData.title;
  editBody.value = fetchPostData.body;
  editUrl.value = fetchPostData.media ? fetchPostData.media.url : null;
  editAlt.value = fetchPostData.media ? fetchPostData.media.alt : null;

  updateButton.addEventListener("click", async () => {
    const update = {
      title: editTitle.value,
      body: editBody.value.length > 0 ? editBody.value : null,
      media:
        editUrl.value.length > 0
          ? {
              url: editUrl.value,
              alt: editAlt.value.length > 0 ? editAlt.value : null,
            }
          : null,
    };
    if (update.title) {
      await updatePost(update);
      window.location.href = "/post/edit.html";
    } else {
      alert("Title needed");
    }
  });
}
editButtonSubmit();
