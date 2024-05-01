import { baseUrl } from "./constants.js";
import CarouselInit from "./carousell.js";
import generateCard from "./cards.js";

CarouselInit();
const mainRow = document.querySelector(`.mainRow`);
mainRow.innerHTML = generateCard();
