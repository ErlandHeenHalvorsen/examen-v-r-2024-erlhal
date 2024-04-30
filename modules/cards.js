////<div class="mainCol">
////  <div class="card">
////    <img class="cardImg" src="img/rdr2-afis-900x563.webp" alt="" />
////    <div class="cardBanner1">
////      <h4>Red Dead Redemption 2</h4>
////    </div>
////    <div class="cardBanner2">
////      <h4>10/10</h4>
////    </div>
////    <p>
////      An epic journey trough the American wild midwest. One of the best gaming
////      experiences i have had these last ten years.
////    </p>
////    <button>Read More</button>
////  </div>
////</div>;
//
//{
//  "data": {
//    "id": "string",
//    "title": "string",
//    "body": "string",
//    "tags": ["string"],
//    "media": {
//      "url": "https://url.com/image.jpg",
//      "alt": "string"
//    },
//    "created": "2022-09-04T08:08:38.830Z",
//    "updated": "2022-09-04T08:08:38.830Z",
//    "author": {
//      "name": "string",
//      "email": "string",
//      "bio": "string",
//      "avatar": {
//        "url": "https://url.com/image.jpg",
//        "alt": "string"
//      },
//      "banner": {
//        "url": "https://url.com/image.jpg",
//        "alt": "string"
//      }
//    }
//  },
//  "meta": {}
//}
const mainRow = document.querySelector(`.mainRow`);

function generateCard() {
  let html = "";
  for (let i = 0; i < 6; i++) {
    html += `<div class="mainCol">
  <div class="card">
    <img class="cardImg" src="img/rdr2-afis-900x563.webp" alt="" />
    <div class="cardBanner1">
      <h4>Red Dead Redemption 2</h4>
    </div>
    <div class="cardBanner2">
      <h4>10/10</h4>
    </div>
    <p>
      An epic journey trough the American wild midwest. One of the best gaming
      experiences i have had these last ten years.
    </p>
    <button>Read More</button>
  </div>
</div>
<div class="mainCol">
  <div class="card">
    <img class="cardImg" src="img/rdr2-afis-900x563.webp" alt="" />
    <div class="cardBanner1">
      <h4>Red Dead Redemption 2</h4>
    </div>
    <div class="cardBanner2">
      <h4>10/10</h4>
    </div>
    <p>
      An epic journey trough the American wild midwest. One of the best gaming
      experiences i have had these last ten years.
    </p>
    <button>Read More</button>
  </div>
</div>
`;
  }
  return html;
}
export default generateCard;
