let navIcon = document.querySelector("#bars");
let cls = document.querySelector("#cls");
let navSection = document.querySelector(".opacity-0");
let topBar = document.querySelector("#topbar");

console.log(top);

navIcon.addEventListener('click',()=>{
    navSection.classList.toggle('opacity-100');
    navSection.classList.toggle('opacity-0');
    navIcon.classList.toggle('hidden')
    navIcon.classList.toggle('visible')
    topBar.classList.toggle('backdrop-blur-md')
    cls.classList.toggle('visible')
    cls.classList.toggle('hidden')
})

cls.addEventListener('click',()=>{
    navSection.classList.toggle('opacity-100');
    navSection.classList.toggle('opacity-0');
    navIcon.classList.toggle('hidden')
    navIcon.classList.toggle('visible')
    cls.classList.toggle('visible')
    topBar.classList.toggle('backdrop-blur-md')
    cls.classList.toggle('hidden')
})




