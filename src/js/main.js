import parallax from "./modules/parallax";
import calcScroll from "./modules/calcScroll";
import mouseMove from "./modules/mouseMove";
// import showElements from "./modules/showElements";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    parallax();
    calcScroll('.question__container','.question__card','#canvas');
    mouseMove('.question__color-fon','.question__container');
    // showElements('.question__card','#canvas');
});
