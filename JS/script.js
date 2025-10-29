
document.addEventListener('DOMContentLoaded', function () {

  const home = document.getElementById('home-nav');
  const about = document.getElementById('about-nav');
  const competences = document.getElementById('competences-nav');
  const projects = document.getElementById('projects-nav');
  const contact = document.getElementById('contact-nav');
  about.addEventListener('click', ()=>{
    about.classList.add("bg-primary");
    home.classList.remove("bg-primary");
    competences.classList.remove("bg-primary");
    projects.classList.remove("bg-primary");
    contact.classList.remove("bg-primary");
  });
  home.addEventListener('click', ()=>{
    home.classList.add("bg-primary");
    about.classList.remove("bg-primary");
    competences.classList.remove("bg-primary");
    projects.classList.remove("bg-primary");
    contact.classList.remove("bg-primary");
  });
  competences.addEventListener('click', ()=>{
    competences.classList.add("bg-primary");
    home.classList.remove("bg-primary");
    about.classList.remove("bg-primary");
    projects.classList.remove("bg-primary");
    contact.classList.remove("bg-primary");
  });
  projects.addEventListener('click', ()=>{
    projects.classList.add("bg-primary");
    home.classList.remove("bg-primary");
    about.classList.remove("bg-primary");
    competences.classList.remove("bg-primary");
    contact.classList.remove("bg-primary");
  });
  contact.addEventListener('click', ()=>{
    contact.classList.add("bg-primary");
    home.classList.remove("bg-primary");
    about.classList.remove("bg-primary");
    competences.classList.remove("bg-primary");
    projects.classList.remove("bg-primary");
  });

  // Formulaire de contact
  const form = document.getElementById('contactForm');
  const formMsg = document.querySelector('.form-message');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMsg.textContent = 'Envoi en cours...';
    setTimeout(() => {
      formMsg.textContent = `Merci pour votre message ! ${form.elements['name'].value}`;
      form.reset();
    }, 1200);

  });
});
