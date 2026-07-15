const menuButton=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuButton?.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",open);
  menuButton.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".faq-item button").forEach(button=>{
  button.addEventListener("click",()=>{
    const item=button.closest(".faq-item");
    const isOpen=item.classList.toggle("open");
    button.setAttribute("aria-expanded",isOpen);
  });
});
document.getElementById("year").textContent=new Date().getFullYear();