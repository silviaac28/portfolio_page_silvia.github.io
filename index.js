//*=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
};




// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
    };

  });
  // *=============================== sticky navbar ==================================
   
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

// *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')

};

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left'});

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
  strings: ['Desarrolladora de Software', 'Desarrolladora Backend','Ingeniera Civil'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})



GitHubCalendar(".calendar", "anasrashid-1");

// or enable responsive functionality:
GitHubCalendar(".calendar", "anasrashid-1", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "anasrashid-1", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
  })