const menuBars = document.querySelector('#menu-bars');
const header = document.querySelector('header'); 
const navBar = document.querySelector('.navbar');

menuBars.onclick = () =>{
    menuBars.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menuBars.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Your browser does not support the share feature.');
    }
}


