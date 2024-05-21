import getIdFromUrl from "./url.js";
import { baseUrl } from "./constants.js";
const editRow = document.querySelector(".edit-list-row");
const editCol = document.querySelector(".edit-list-col");
const editTitle = document.querySelector(".edit-list-title");
const editButton = document.querySelector(".edit-list-edit");
let deleteButtons;
let editButtons;
///
// const id = getIdFromUrl();

function buttonListeners() {
  deleteButtons = document.querySelectorAll(".edit-list-delete");
  editButtons = document.querySelectorAll(".edit-list-edit");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();

      let id = button.getAttribute("data-id");
      deleteCard(id);
    });
  });
  editButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      let id = button.getAttribute("data-id");
      const nextLocation = `/post/post_edit.html?id=${id}`;
      window.location.href = nextLocation;
    });
  });
}

async function makeEditList() {
  let res = await fetch(`https://v2.api.noroff.dev/blog/posts/erlhal`);
  res = await res.json();
  let data = res.data;
  let html = "";
  data.map((post) => {
    html += `
    <div class="edit-list" data-id="${post.id}">
      <div class="edit-list-row">
        <div class="edit-list-col edit-list-title">${post.title}</div>
        <div class="edit-list-col">
          <button class="edit-list-button edit-list-edit" data-id="${post.id}">Edit</button>
          <button class="edit-list-button edit-list-delete" data-id="${post.id}">Delete</button>
        </div>
      </div>
    </div>
    `;
  });
  document.querySelector("main").innerHTML = html;
  buttonListeners();
}
makeEditList();

async function deleteCard(id) {
  let token = localStorage.getItem("token");

  if (token) {
    token = JSON.parse(token);

    let result = await fetch(`${baseUrl}/blog/posts/erlhal/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.ok) {
      const posts = document.querySelectorAll(".edit-list");
      posts.forEach((post) => {
        const postId = post.getAttribute("data-id");
        if (postId === id) {
          post.remove();
        }
      });
      alert("This has deleted the post");
    }
  }
}

async function redirectToEditPost() {}
