import { baseUrl } from "./constants.js";
import getIdFromUrl from "./url.js";
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
    console.log(res);
  }
}
function editButtonSubmit() {
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
    console.log(update);
    await updatePost(update);
    window.location.href = "/post/edit.html";
  });
}
editButtonSubmit();
