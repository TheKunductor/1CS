

//onload animations
window.onload = () => {

    console.log("page is fully loaded");
    gsap.from("h1",{x:80, y:-97, duration:1});
    gsap.from("h2", {scale:0.4, duration:1});
    gsap.from("h5",{x:-80, duration:1});
    
  };

// a style for if viewer is on galaxy s8
if (window.innerWidth==360&&window.innerHeight==740){
    

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];
 
// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'styleforgalaxy.css';

// Append link element to HTML head
head.appendChild(link);
    
}

//function osMovement()=>{
  //  (".onScro",{x:-80, duration:1});
//}