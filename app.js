//Scroll-To-Top Button: --------------------------------------------->
const btnScrollTop = document.querySelector('#btnScrollToTop');
    btnScrollTop.addEventListener("click", function() {
        window.scrollTo(0, 0);
    });
    

// Navbar Toggler Button: ------------------------------------------>
let navToggle = document.querySelector('.navbar-toggler-icon');
    navToggle.addEventListener("click", function() {
        navToggle.classList.toggle("rotated");
    });


// Navbar Color Toggle On Scroll-Down: --------------------------->
let navBar = document.querySelector('.navbar'); 
    window.addEventListener("scroll", function() {
        // console.log(window.pageYOffset);
        if(window.scrollY >= 150 && window.innerWidth >= 992) {
            navBar.classList.remove('bg-dark');
            navBar.classList.add('dark');
        } else {
            navBar.classList.add('bg-dark')
            navBar.classList.remove('dark');
        };
    });


//Landing page Parallax: ------------------------------------->
const parallax = document.getElementById("header");
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });


// Awards Color Change: ------------------------------------->
const awards = document.getElementById("awards");
    window.addEventListener('scroll', function() {
        if (awards.getBoundingClientRect().top < window.innerHeight - 250 && awards.getBoundingClientRect().bottom > window.innerHeight - 600) {
            // console.log('Visible');
            let icon = document.querySelectorAll('.icon');
            for(let i = 0; i < icon.length; i++) {
                icon[i].classList.add('hover');
                icon[i].style.color = '#f1cd00';
            }
        } else {
            // console.log("NOT VISIBLE");
            let icon = document.querySelectorAll('.icon');
            for(let i = 0; i < icon.length; i++) {
                icon[i].classList.remove('hover');
                icon[i].style.color = 'steelblue';
            }
        }
    });

// Awards Number Count-Up: ---------------------------------------->

window.addEventListener('scroll', function() {
    if (awards.getBoundingClientRect().top < window.innerHeight - 250) {
        // console.log("See me?");
        // For Comps & Awards:
        const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = 1;
                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 120);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });

        // For Hours Trained:
        const counter3 = document.querySelector('.counter3');
        const speed3 = 500;
            const updateCount = () => {
                const target3 = +counter3.getAttribute('data-target');
                const count3 = +counter3.innerText;
                // The '+' simply turns the data target values from strings into numbers.
                const increment3 = target3 / speed3;
                // The lower the speed the faster it counts up.
                if(count3 < target3) {
                    counter3.innerText = count3 + increment3;
                    // After 1 millisecond, run function updateCount:
                    setTimeout(updateCount, 1);
                } else {
                    counter3.innerText = target3;
                }
            }
            updateCount();
    }
});


// My Team - Parallax Effect: ------------------------------------>
const parallax2 = document.getElementById("myteam");
    window.addEventListener('scroll', function() {
        if (parallax2.getBoundingClientRect().top < window.innerHeight && window.innerWidth >= 768) {
            let offset2 = parallax2.getBoundingClientRect().top;
            parallax2.style.backgroundPositionY = offset2 * -0.5 + "px";
        }
    });