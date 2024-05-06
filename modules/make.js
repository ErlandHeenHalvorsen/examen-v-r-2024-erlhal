// const deleteButton = document.querySelector(`.formButtonDelete`);
///////////
// const post = {
//   title: "string", // Required
//   body: "string", // Optional
//   tags: ["string"], // Optional
//   media: {
//     url: "https://url.com/image.jpg",
//     alt: "string",
//   }, // Optional
// };
///////////
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
    console.log(result);

    if (result.ok) {
      // let parsedRes = await result.json();
      messages.innerHTML = `
        <div class="">
          Post created successfully!
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
  console.log(post);
  await makePost(post);
});
//makePost("my second post", "Hello everybody, i'm furby, your furry friend");
//makePost("my third post", "Bye everybody, i'm furby, your furry friend");

async function deletePost() {
  let token = localStorage.getItem("token");
  token = JSON.parse(token);
  let posts = await fetch("https://v2.api.noroff.dev/blog/posts/erlhal");
  posts = await posts.json();
  posts = posts.data;
  //  posts.map(async (p) => {
  //     await fetch(`https://v2.api.noroff.dev/blog/posts/erlhal/${p.id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   });
  console.log(posts);
}
//deletePost();
