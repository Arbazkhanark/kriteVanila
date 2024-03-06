const options = document.getElementsByTagName('option');

for (let i = 0; i < options.length; i++) {
    options[i].classList.add('bg-white');
}



const open=document.getElementById('open')
const cencel=document.getElementById('close');
const menu=document.getElementById('menu')
const menuDetails=document.getElementById('menuDetails')

cencel.addEventListener('click',()=>{
    menu.classList.add('sm:hidden', 'max-sm:hidden')
    menuDetails.classList.remove('transition-shadow', 'shadow-gray-200', 'w-[100%]', 'z-40')
    menu.classList.remove('h-[100vh]', 'w-[50%]', 'z-40', 'bg-white', 'inset-0', 'fixed', 'bg-opacity-30', 'backdrop-blur-md')
    cencel.classList.add('hidden')
})

open.addEventListener('click',()=>{
    cencel.classList.remove('hidden')
    menuDetails.classList.add('transition-shadow', 'shadow-gray-200', 'w-[100%]', 'z-40')
    menu.classList.remove('sm:hidden', 'max-sm:hidden')
    menu.classList.add('h-[100vh]', 'w-[50%]', 'z-40', 'bg-white', 'inset-0', 'fixed', 'bg-opacity-30', 'backdrop-blur-md')
})



// inset-0 fixed bg-opacity-30 backdrop-blur-sm z-40