document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
      document.querySelector('.navbar').classList.add('custom-navbar');
      document.querySelector('.header').style.height = "100%";
    } else {
      navbar.classList.remove('sticky');
      document.querySelector('.navbar').classList.remove('custom-navbar');
    }
  })
  let navbar_btn = document.querySelector('.btn');
  let sidebar = document.querySelector('.sidebar');
  let overlay = document.querySelector('.overlay');

  navbar_btn.addEventListener('click', () => {
    console.log("Fuck");
    navbar_btn.classList.add('hidden');
    sidebar.classList.add('active');
    overlay.classList.add('overlay-active');
  });

  let sidebar_btn = document.getElementById('collapse');

  sidebar_btn.addEventListener('click', () => {
    console.log("Fuck");
    navbar_btn.classList.remove('hidden');
    sidebar.classList.remove('active');
    overlay.classList.remove('overlay-active');
  });
});

document.addEventListener("scroll", () => {
  let header = document.querySelector('.header');
  let offset = header.offsetTop;
  if (window.pageYOffset > offset) {
    document.querySelector('.home-button').classList.remove('hidden');
  } else {
    document.querySelector('.home-button').classList.add('hidden');
  }
})