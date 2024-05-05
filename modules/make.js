async function makePost() {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
    let make = await fetch("https://v2.api.noroff.dev/blog/posts/erlhal", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "My First Post",
        body: "YAYAYAYAYA",
      }),
    });
    let parsedRes = await make.json();
    console.table(parsedRes);
  } else {
    console.table("not logged in");
  }
}
makePost();
