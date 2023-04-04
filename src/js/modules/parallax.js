// const parallax = () => {
//   window.addEventListener("scroll", (e) => {
//     console.log(this);
//     document.documentElement.style.setProperty("--scrollTop", `${this.scrollY}px`); // Update method
//   });
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   ScrollSmoother.create({
//     wrapper: ".wrapper",
//     content: ".content",
//   });
// };

// export default parallax;


const parallax = () => {
  window.addEventListener("scroll", calcTopScroll);
  function calcTopScroll(){
    document.documentElement.style.setProperty("--scrollTop", `${this.scrollY}px`); // Update method  
  }
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
  });
};

export default parallax;
