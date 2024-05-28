const formTitle = document.querySelector(`#formTitle`);
const formBody = document.querySelector(`#formBody`);
const formUrl = document.querySelector(`#formUrl`);
const formAlt = document.querySelector(`#formAlt`);
const postButton = document.querySelector(`.formButtonPost`);
const messages = document.querySelector(`.messages`);

async function makePost(body) {
  let token = localStorage.getItem("token");

  if (token) {
    token = JSON.parse(token);

    let result = await fetch("https://v2.api.noroff.dev/blog/posts/erlhal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (result.ok) {
      messages.innerHTML = `
        <div class="messages">
          <p>Post created successfully!</p>
        </div>
      `;
    } else {
      alert("Post NOT created!");
    }
  } else {
    console.table("not logged in");
  }
}
postButton.addEventListener("click", async () => {
  const post = {
    title: formTitle.value,
    body: formBody.value.length > 0 ? formBody.value : null,
    media:
      formUrl.value.length > 0
        ? {
            url: formUrl.value,
            alt: formAlt.value.length > 0 ? formAlt.value : null,
          }
        : null,
  };
  await makePost(post);
});
