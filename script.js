

//onload animations
window.onload = () => {

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


//Grabs and returns form info as JSON
function question_intake(){
    //grab form input fields
  const pcName = document.getElementById("clientName");
  const email = document.getElementById("email");
  const url = document.getElementById("url")  ;
  const employee_total = document.getElementById("employee_total");
  const message = document.getElementById("message");
  
  const contact_us_form = {
  name:pcName.value,
  email:email.value,
  url:url.value,
  employee_total:Number(employee_total.value),
  message:message.value
  };
  
  const contactUsForm = JSON.stringify(contact_us_form,null,2);

  
  return contactUsForm
  };
  




