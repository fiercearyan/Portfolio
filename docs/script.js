$(document).ready(function(){
   $(window).scroll(function(){
       // sticky navbar on scroll script
       if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }
       
       // scroll-up button show/hide script
       if(this.scrollY > 500){
           $('.scroll-up-btn').addClass("show");
       }else{
           $('.scroll-up-btn').removeClass("show");
       }
   });

   // slide-up script
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
       // removing smooth scroll on slide-up button click
       $('html').css("scrollBehavior", "auto");
   });

   $('.navbar .menu li a').click(function(){
       // applying again smooth scroll on menu items click
       $('html').css("scrollBehavior", "smooth");
   });

   // toggle menu/navbar script
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   });

   // typing text animation script
   var typed = new Typed(".typing", {
       strings: ["a Backend Engineer", "a Software Developer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });

   var typed = new Typed(".typing-2", {
       strings: ["a Backend Engineer", "a Software Developer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });
   var typed = new Typed(".typing-3", {
       strings: ["Java", "Spring Boot", "Scala", "Go", "Docker", "Kubernetes", "AWS", "Kafka", "Redis", "MongoDB", "System Design"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });

   // owl carousel script
   $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoplay: true,
       autoplayTimeOut: 2000,
       autoplayHoverPause: true,
       responsive: {
           0:{
               items: 1,
               nav: false
           },
           600:{
               items: 2,
               nav: false
           },
           1000:{
               items: 3,
               nav: false
           }
       }
   });
});
// ---------------------------
// Contact Form using Google Apps Script
// ---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector("button");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxs6maqdceWXryMkQLgm_KsRVk_XrRy75sZaGcP6pAVxLe2E-IDuFYQXyK9hxdBddOOuw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.status === "OK") {
        window.showFormToast('success', 'Message Sent - Thank You!');
        form.reset();
      } else {
        window.showFormToast('error', 'Send failed. Please try again later.');
      }
    } catch(err){
        window.showFormToast('error', 'Error sending message. Please try again.');
        console.error(err);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  });
});



// Toast helper — creates, shows and auto-hides a small animated message below the form
(function () {
  function createToastContainer() {
    // we'll attach to the form's parent to keep layout consistent
    const form = document.getElementById('contact-form');
    if (!form) return null;
    let container = form.parentNode.querySelector('.js-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'js-toast-container';
      // insert container right after form
      form.parentNode.insertBefore(container, form.nextSibling);
    }
    return container;
  }

  function showToast(type, message, timeout = 4200) {
    const container = createToastContainer();
    if (!container) return;

    // create toast element
    const toast = document.createElement('div');
    toast.className = `form-toast ${type} show`;

    toast.innerHTML = `
      <div class="toast-icon" aria-hidden="true">${type === 'success' ? '✓' : '⚠'}</div>
      <div class="toast-text">${message}</div>
      <button class="toast-close" aria-label="Dismiss">✕</button>
    `;

    // add to container
    container.appendChild(toast);

    // close handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      hideToast(toast);
    });

    // auto-hide
    const timer = setTimeout(() => hideToast(toast), timeout);

    // cleanup helper
    function hideToast(el) {
      clearTimeout(timer);
      el.classList.remove('show');
      // allow transition to finish then remove
      setTimeout(() => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }, 300);
    }

    return toast;
  }

  // expose showToast globally for use in submit handler
  window.showFormToast = showToast;
})();