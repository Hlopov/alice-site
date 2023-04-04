const mouseMove = (imgSelector, containerSelector) => {
    let moveElement = document.querySelector(imgSelector);
    let container = document.querySelector(containerSelector);
    container.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        moveElement.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
    });
   
}

export default mouseMove;