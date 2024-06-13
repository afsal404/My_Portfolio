document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing");
    const words = ["Web Developer.", "Frontend Developer.", "Backend Developer.", "Web Designer."];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentLetters = currentWord.slice(0, letterIndex);
        typingElement.textContent = currentLetters;

        if (!isDeleting && letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(type, 200);
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1500);
        }
    }

    type();
});


var tablinks=document.getElementsByClassName("about-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var headerText = document.querySelector(".header-text");
        headerText.style.marginLeft = "0";
    }, 100);
    setTimeout(function() {
        var homeImage = document.querySelector(".home-image");
        homeImage.style.transform = "translateX(0)"; 
    }, 1000); 
});


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        var honeypot = document.getElementById('honeypot').value;
        if (honeypot) {
            event.preventDefault();
            alert('Spam detected!');
        }
    });

