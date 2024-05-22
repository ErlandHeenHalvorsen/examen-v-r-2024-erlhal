function getIdFromUrl() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  //console.log(params);
  //console.log(id);
  return id;
}

export default getIdFromUrl;
