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
}, {rootMargin: "0px 0px -100px 0px"});

// make a list of all images with a data source and send that list to myObserver
document.querySelectorAll('img[data-src]').forEach(img => {
    console.log("img");
     console.log(img)
    myObserver.observe(img)
    });
