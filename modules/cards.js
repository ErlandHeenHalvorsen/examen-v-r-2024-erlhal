function ratings(ratingsArray) {
  let html = "";
  ratingsArray.map((rating) => {
    html += `<span>${rating}</span>`;
  });
  return html;
}

async function generateCard() {
  try {
    let response = await fetch("https://v2.api.noroff.dev/blog/posts/erlhal");
    let res = await response.json();

    if (!response.ok) {
      throw new Error(res.status);
    }

    let html = "";
    res.data.map((post) => {
      html += `
        <div class="mainCol">
          <div class="card">
            <img class="cardImg" src="${
              post.media ? post.media.url : "/img/gameOver.jpg"
            }" alt="${post.media ? post.media.alt : "Placeholder image"}" />
            <div class="cardBanner1">
              <h4>${post.title}</h4>
            </div>
            <div class="cardBanner2">
              ${post.tags ? ratings(post.tags) : "Not yet rated"}
            </div>
            <p>
              ${post.body ? post.body : "Nothing to see"}
            </p>
            <button class="read-more-button" data-id="${
              post.id
            }">Read More</button>
          </div>
        </div>
      `;
    });

    return html;
  } catch (err) {
    console.error(err);
  }
}

export default generateCard;
