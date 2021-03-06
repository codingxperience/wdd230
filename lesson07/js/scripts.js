// get all images with data src attribute
// let imagesToLoad = document.querySelectorAll("img[data-src]");

// //optional parameters being set for the IntersectionalObserver
// //const imgOptions = {
//   //threshold: 1,
//   //rootMargin: "0px 0px 50px 0px"
// //};

// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// // first check to see if Intersection Observer is supported
// if("IntersecionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//   items.forEach((item) => {
//     if(item.isIntersecting) {
//       loadImages(item.target);
//       observer.unobserve(item.target);
//     }
//   });
// });
// // loop through each img an check status and load if necessary
// imagesToLoad.forEach((img) => {
//   observer.observe(img);
// });
// }else {
//   imagesToLoad.forEach((img) => {
//    loadImages(img); 
//   });
// }

// // get all images with data src attribute
// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//   const src = img.getAttribute("data-src");
//   if(!src) {
//     return;
//   }
//   img.src = src;
// }

// //optional parameters being set for the IntersectionalObserver
// const imgOptions = {
//   threshold: 1,
//   rootMargin: "0px 0px 50px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//       if(!entry.isIntersecting) {
//         return;
//     }else {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   })
// }, imgOptions);

// // loop through each img an check status and load if necessary
// images.forEach(image => {
//   imgObserver.observe(image);
// });


if(!!window.IntersectionObserver){console.log("Inserction Observer is super cool")}


// create a function
let myObserver = new IntersectionObserver((myListA, myObserver) => { 
    myListA.forEach(cupX => {
    if(cupX.isIntersecting){
        cupX.target.src = cupX.target.dataset.src;
        cupX.target.removeAttribute('data-src');
        myObserver.unobserve(cupX.target);
    }
    });
}, {rootMargin: "0px 0px -450px 0px"});

// make a list of all images with a data source and send that list to myObserver
document.querySelectorAll('img[data-src]').forEach(img => {myObserver.observe(img) });


