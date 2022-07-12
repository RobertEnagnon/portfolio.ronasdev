$(document).ready(function(){

    $(window).on('load',function(){
        $('.preloader').addClass('complete');
    });



    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('.sticky').addClass("stickyadd");
        }else{
            $('.sticky').removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["Robert SODJINOU", "un développeur web", "un développeur mobile","un formateur","un youtubeur"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed: 100,
        loop:true ,
        loopCount: Infinity,
        startDelay:1000
    })

//   About me
let wpoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let about = document.querySelector("#anim");
        about.classList.add('animate__fadeInUp')
    },
    offset: '90%'
  })

    // Progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function(direction) {
            var p = document.querySelectorAll(".progress-bar");
            p[0].setAttribute('style',"width: 98%;transition: 2.5s all")
            p[1].setAttribute('style',"width: 95%;transition: 1.5s all")
            p[2].setAttribute('style',"width: 85%;transition: 1.2s all")
            p[3].setAttribute('style',"width: 75%;transition: 1s all")
            p[4].setAttribute('style',"width: 70%;transition: 2s all")
            p[5].setAttribute('style',"width: 60%;transition: 1s all")
            p[6].setAttribute('style',"width: 90%;transition: 1.3s all")
            p[7].setAttribute('style',"width: 75%;transition: 1s all")
            p[8].setAttribute('style',"width: 60%;transition: 1.3s all")
            p[9].setAttribute('style' ,"width: 40%;transition: .8s all")
        },
        offset: '90%'
      })


    //  Services

      let spoint = new Waypoint({
    element: document.getElementById('services-id'),
    handler: function(direction) {
        let services = document.querySelector("#services");
        services.classList.add('animate__fadeInUp')
    },
    offset: '90%'
  })

//   Works
let tpoint = new Waypoint({
    element: document.querySelector('.work'),
    handler: function(direction) {
        let work = document.querySelector("#work");
        work.classList.add('animate__bounce')
    },
    offset: '90%'
  })

//   Contact
let cpoint = new Waypoint({
    element: document.querySelector('.contact'),
    handler: function(direction) {
        let contact = document.querySelector("#contact");
        contact.classList.add('animate__fadeInUp')
    },
    offset: '80%'
  })

    //   owlCarousel Testimony
    // $(".owl-carousel").owlCarousel({
    //     items:1,
    //     loop: true,
    //     autoplay:true,
    //     autoplayTimeout: 4000
    // });

    // Tutoriels youtube
    $(".owl-carousel").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            916:{
                items:3
            }

        },
        loop: true,
        nav: true,
        autoplay:true,
        dots:true,
        lazyLoad:true,
        autoplayTimeout: 4000,
        video:true,
        navText: ['Précedent','Suivant'],
    });
    // Works FilterIzr
    var filterizr = $('.filter-container').filterizr({
        animationDuration: .5
    })

    
})