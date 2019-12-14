function init() {
    const navLinks = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    let current = 0;
    let scrollSlide = 0;
    let prevSlide = 0;

    navLinks.forEach((navigation, index) => {
        navigation.addEventListener('click', function () {
            // changeDots(this);
            underline(this);
            //nextSlide(index);
        });
    });

    function underline(link) {
        navLinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        link.classList.add('active');
    }

    pages.forEach(page => {
        page.addEventListener('mouseenter', function () {
            const id = this.getAttribute('id');
            const navItem = document.querySelector(`a[href="#${id}"]`);
            underline(navItem);
        })
    });


    const hamburger = document.querySelector('.menu');
    const hamburgerLines = document.querySelectorAll('.menu .line');
    const navOpen = document.querySelector('.nav-open');
    const contact = document.querySelector('.menu-open');
    //const social = document.querySelector('.social');
    const logo = document.querySelector('.logo');

    const tl = new TimelineMax({
        paused: true,
        reversed: true
    });

    tl.to(navOpen, .5, {
            y: 0
        })
        .fromTo(contact, .5, {
            opacity: 0,
            y: 0
        }, {
            opacity: 1,
            y: 0
        })
        //.fromTo(social, .5, {opacity: 0, y:0}, {opacity: 1, y:0}, '-=0.2')
        .fromTo(logo, .5, {
            color: 'white'
        }, {
            color: 'black'
        }, '-=0.5')
        .fromTo(hamburgerLines, .5, {
            stroke: 'white'
        }, {
            stroke: 'black'
        }, '-=1.2');

    hamburger.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });


    const nav = document.querySelector('#main-nav');
    //Scroll navcolor change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 523) {
            nav.classList.add('card-dark');
        } else {
            nav.classList.remove('card-dark');
        }
    });
}

init();





//Smooth scroll
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//end


//For toggling modals

function modal(id) {
    var html = $("html").toggleClass('is-clipped')
    var obj = $(id).toggleClass('is-active').fadeIn(500);
    console.log(obj);
}

$('body').click(function (event) {
    if ($(event.target).is('.modal-background')) {
        $(".modal").removeClass("is-active");
        $("html").removeClass("is-clipped");
    }
});

function closeModal() {
    $(".modal").removeClass("is-active");
    $("html").removeClass("is-clipped");
}