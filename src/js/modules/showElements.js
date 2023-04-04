import calcScroll from "./calcScroll";
const showElements = (cartSelector, lineSelector) => {
    let cart = document.querySelectorAll(cartSelector);
    let canvas = document.querySelector(lineSelector);
    console.log(canvas);
    let context = canvas.getContext('2d');
    let x = canvas.width / 2;
    let y = canvas.height / 5;
    let radius = 500;
    let endPercent = 51;
    let curPerc = 0;
    let counterClockwise = false;
    let circ = Math.PI*2;
    let quart = Math.PI*2;

    context.lineWidth = 5;
    context.strokeStyle = '#FFCC48';

    let nIntervId
    let i
    let isResizeble = 0

    cart.forEach((item)=>{
        item.classList.add('hide'); 
    })

    // showElements('.question__card','#canvas');
    calcScroll(result, '.question__container');

    const displayScrollElement = (result) => {
        if(result){
          // showElements('.question__card','#canvas');
          changeColor()
        }
    };

    displayScrollElement()

    function animate(current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
    context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
        context.stroke();
        curPerc++;
        if (curPerc < endPercent) {
            requestAnimationFrame(function () {
                animate(curPerc / 100)
            });
        }
    }

    function changeColor() {
        i = 0
        nIntervId = setInterval(function(){
            if (i < cart.length) {
                cart[i].classList.remove('hide');
                cart[i].classList.add('fade-in'); 
                i++
            }else{
                clearInterval(nIntervId);
                animate() 
            }
        },1000);
    }

    // changeColor()
}
export default showElements;