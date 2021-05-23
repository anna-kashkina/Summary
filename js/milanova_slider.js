$(document).ready(function(){
        $('.slider-container').slick({
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            speed: 600,
            pauseOnFocus:true,
            // centerMode:true,
            arrows: true,
            /*prevArrow: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>",
            nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",*/
            prevArrow: "<button type='button' class='arrow arrow-left'></button>",
            nextArrow: "<button type='button' class='arrow arrow-right'></button>",
            responsive: [
                {
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: 8,
                    }

                },
                {
                    breakpoint: 1245,
                    settings: {
                        slidesToShow: 6,
                    }

                },
                {
                    breakpoint: 965,
                    settings: {
                        slidesToShow: 4,
                    }

                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 3,
                    }

                },
                {
                    breakpoint: 497,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }

                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }

                },
            ]

        });
    });
    $(document).ready(function(){
        $("#menu, #up-arrow").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

