const options = document.getElementsByTagName('option');

for (let i = 0; i < options.length; i++) {
    options[i].classList.add('bg-white');
}



const open=document.getElementById('open')
const cencel=document.getElementById('close');
const menu=document.getElementById('menu')

cencel.addEventListener('click',()=>{
    menu.classList.add('hidden')
})

open.addEventListener('click',()=>{
    menu.classList.remove('hidden')
    menu.classList.add('h-[100vh]', 'w-[50%]', 'z-40', 'bg-white', 'inset-0', 'fixed', 'bg-opacity-30', 'backdrop-blur-md')
})