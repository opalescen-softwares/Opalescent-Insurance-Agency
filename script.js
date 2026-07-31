/*=========================================
    OPALESCENT INSURANCE AGENCY
    JavaScript
=========================================*/


/*==============================
      MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*==============================
      CLOSE MENU AFTER CLICK
==============================*/

document.querySelectorAll(".nav-links a").forEach(link =>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


/*==============================
      STICKY HEADER EFFECT
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="#ffffff";
        header.style.boxShadow="0 5px 15px rgba(0,0,0,.12)";

    }

    else{

        header.style.background="#fff";
        header.style.boxShadow="none";

    }

});


/*==============================
      SCROLL REVEAL
==============================*/

const reveals=document.querySelectorAll(".card,.testimonial,.stat,.why-us,.hero,.cta");

window.addEventListener("scroll", revealItems);

function revealItems(){

    const windowHeight=window.innerHeight;

    reveals.forEach(item=>{

        const revealTop=item.getBoundingClientRect().top;

        if(revealTop < windowHeight-120){

            item.classList.add("active");

        }

    });

}

revealItems();


/*==============================
     COUNTING ANIMATION
==============================*/

const counters=document.querySelectorAll(".stat h2");

const speed=80;

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=+counter.innerText.replace(/\D/g,'');

        let count=+counter.getAttribute("data-count");

        if(!count){

            count=0;

        }

        const increment=Math.ceil(target/speed);

        if(count<target){

            count+=increment;

            counter.setAttribute("data-count",count);

            counter.innerText=count+"+";

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText=target+"+";

        }

    };

    updateCounter();

});


/*==============================
     TESTIMONIAL SLIDER
==============================*/

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

function showTestimonials(){

    testimonials.forEach((card,index)=>{

        card.style.display=index===current?"block":"none";

    });

}

if(testimonials.length>0){

    showTestimonials();

    setInterval(()=>{

        current++;

        if(current>=testimonials.length){

            current=0;

        }

        showTestimonials();

    },4000);

}


/*==============================
      BACK TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==============================
     BUTTON RIPPLE EFFECT
==============================*/

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});


/*==============================
      CURRENT YEAR
==============================*/

const copyright=document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML=`© ${new Date().getFullYear()} Opalescent Insurance Agency. All Rights Reserved.`;

}


/*==============================
      PREMIUM ESTIMATOR
      (Products Page)
==============================*/

function calculatePremium(){

    const insurance=document.getElementById("insuranceType");

    const amount=document.getElementById("insuredAmount");

    const output=document.getElementById("premiumOutput");

    if(!insurance || !amount || !output){

        return;

    }

    const value=parseFloat(amount.value);

    if(isNaN(value)){

        output.innerHTML="Enter a valid amount.";

        return;

    }

    let rate;

    switch(insurance.value){

        case "motor":
            rate=0.05;
            break;

        case "health":
            rate=0.04;
            break;

        case "home":
            rate=0.03;
            break;

        case "business":
            rate=0.06;
            break;

        default:
            rate=0.05;

    }

    const premium=(value*rate).toFixed(2);

    output.innerHTML=`
        Estimated Annual Premium:
        <strong>KES ${premium}</strong>
    `;

}


/*==============================
     CONTACT FORM VALIDATION
==============================*/

const quoteForm=document.getElementById("quoteForm");

if(quoteForm){

quoteForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const phone=document.getElementById("phone").value.trim();

    if(name==="" || email==="" || phone===""){

        alert("Please complete all required fields.");

        return;

    }

    alert("Thank you! Your quote request has been received.");

    quoteForm.reset();

});

}


/*==============================
      SMOOTH PAGE FADE-IN
==============================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .7s ease";


/*==============================
      END OF SCRIPT
==============================*/
