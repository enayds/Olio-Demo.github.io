function openPane() {
    document.getElementById("pane").style.right = '0';
}


function closePane() {
    document.getElementById("pane").style.right = '-250px';
}




ScrollReveal().reveal('.banner-details',
 {  delay: 0,
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true
}
);

ScrollReveal().reveal('.image-div',
{delay:0,
    duration:3000,
    origin: 'left',
    distance:'40px',
    reset: true
}
)

ScrollReveal().reveal('.intro-details',
{   delay:0,
    duration:5000,
    origin: 'right',
    distance:'70px',
    reset: true
}
)

ScrollReveal().reveal('.left',
{   delay:0,
    duration:3000,
    origin: 'left',
    distance:'30px',
    reset: true
}
)

ScrollReveal().reveal('.middle',
{   delay:0,
    duration:3000,
    origin: 'bottom',
    distance:'30px',
    reset: true
}
)

ScrollReveal().reveal('.right',
{   delay:0,
    duration:3000,
    origin: 'right',
    distance:'30px',
    reset: true
}
)

ScrollReveal().reveal('.subscribe-div',
{   delay:0,
    duration:3000,
    origin: 'bottom',
    distance:'50px',
    reset: true
}
)
ScrollReveal().reveal('.follow-text',
{   delay:0,
    duration:3000,
    origin: 'bottom',
    distance:'50px',
    reset: true
}
)