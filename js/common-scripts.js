
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        // Phone nav click function 
        $('#phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
        });
        
        
        /*$('.btn').each(function(){
            $(this).find('em').eq(0).stop(true, true).animate({'width' : '0%'}, 0)
        });*/

        $('.btn').mouseenter(function(){
            $(this).find('em').eq(0).stop(true, true).animate({
                'width' : '0%'
            },400)
            $(this).find('em').eq(1).stop(true, true).animate({
                'height' : '0%'
            },400)
             $(this).find('em').eq(2).stop(true, true).animate({
                 'width' : '0%'
             },400)
            $(this).find('em').eq(3).stop(true, true).animate({
                'height' : '0%'
            },400)
        });
        
        $('.btn').mouseleave(function(){
            $(this).find('em').eq(0).stop(true, true).animate({
                'width' : '100%'
            },400)
            $(this).find('em').eq(1).stop(true, true).animate({
                'height' : '100%'
            },400)
             $(this).find('em').eq(2).stop(true, true).animate({
                 'width' : '100%'
             },400)
            $(this).find('em').eq(3).stop(true, true).animate({
                'height' : '100%'
            },400)
        });
        
        
        if($("#hero-slider-wrap").length){
            var heroSlider = $("#hero-slider-wrap");
           heroSlider.slick({
                dots: false,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 1000,
                arrows: false,
                infinite: true,
            }); 
            
            $('#hero-slide-controller .prev').click(function(e){
                e.preventDefault();
                heroSlider.slick('slickPrev');  
            })
            $('#hero-slide-controller .next').click(function(e){
                e.preventDefault();
                heroSlider.slick('slickNext');  
            })
        }
        
        if($("#after-hero-slider").length){
           $("#after-hero-slider").slick({
                dots: true,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1200,
                arrows: false,
                infinite: false
            }); 
        }
        
        if($("#most-slider-wrap").length){
           $("#most-slider-wrap").slick({
                dots: true,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 1000,
                arrows: false,
                infinite: false
            }).on("afterChange mousewheel", function (event, slick, currentSlide, nextSlide){
                event.preventDefault();
                if (event.deltaX > 0 || event.deltaY < 0){
                    $(this).slick('slickNext');
                } else if (event.deltaX < 0 || event.deltaY > 0){
                    $(this).slick('slickPrev');
                } 
            }); 
        }
        
        if($("#news-carousel-wrap").length){
           $("#news-carousel-wrap").slick({
                dots: true,
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 800,
                arrows: false,
                cssEase: 'linear',
                infinite: false,
               
                responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }

                  ]
            }); 
        }   
        
        if($("#textimonial-slider").length){
            $("#textimonial-slider").slick({
                dots: true,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                arrows: false,
                fade: true,
                cssEase: 'linear',
                infinite: false,

                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }

                ]
            }); 
        } 
        
        if($("#our-field-guides-slider").length){
            var totalSlide = $("#our-field-guides-slider").find(".our-field-guides-item").length;         
            var lastItemIndex = totalSlide -1;            
            
            $("#our-field-guides-slider").slick({
                dots: false,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                cssEase: 'linear',
                infinite: false,
            }).on("afterChange", function (event, slick, currentSlide, nextSlide){
                event.preventDefault();
                var lastSlideActive = $("#our-field-guides-slider .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActive = $("#our-field-guides-slider .slick-slide").eq(0).hasClass("slick-current");
                if(firstSlideActive){
                    $("body").removeClass("our-field-guides-appear");
                } else{
                    $("body").addClass("our-field-guides-appear");
                }
            });
        } 
        
        /*$(window).on("scroll", function(){
            var windowScrollTop = $(window).scrollTop();
            var sectionTopPos = $(".tswalu-story-section").offset().top;
            var sectionBottomPos = sectionTopPos + $(".tswalu-story-section").outerHeight();

            if(windowScrollTop < sectionTopPos - $(window).height() || windowScrollTop > sectionBottomPos ){
                $(".tswalu-story-section").removeClass("fixed");
            }

        });*/
        
        
        $(window).on("scroll", function(){ 
            
            // Remove fixed class from Story section 
            if($(".tswalu-story-section").length){
                removeFixedClass(".tswalu-story-section");   
            }
            
            // Remove fixed class from Slider content section
            if($(".slider-content-section").length){
                removeFixedClass(".slider-content-section");   
            }
            
            
           

        });
        
        function removeFixedClass(selector){
            var windowScrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var sectionTopPos = $(selector).offset().top;
            var sectionBottomPos = sectionTopPos + $(selector).outerHeight();

            if(windowScrollTop < sectionTopPos - windowHeight || windowScrollTop > sectionBottomPos ){
                $(selector).removeClass("fixed");
            }   
        } 
        
        
        //sticky menu section Fixed finction
        if($("#after-hero  .sticky-menu").length){
            
            var selector = $("#after-hero .sticky-menu");
            var sectionHeight = selector.outerHeight();
            var sectionTopPos = $("#after-hero").offset().top;
            
            $(window).on("scroll", function(){
                var windowScrollTop = $(window).scrollTop();
                if(windowScrollTop > sectionTopPos){
                    $(selector).addClass("fixed");
                }else{
                    $(selector).removeClass("fixed");
                }
                
            })
            
 
        }
        
        if($("#story-slider-wrap").length){          
            var storySlider = $("#story-slider-wrap");

            //console.log(lastItemIndex);            
            storySlider.slick({
                dots: true,
                //vertical: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                //centerPadding: 50,
                //centerMode: true,
                arrows: false,
                fade: true,
                waitForAnimate: true,
                asNavFor: '#story-figure',
                infinite: false,
                //adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        vertical: false,
                      }
                    }

                  ]
            });
            
            
            var storyFigure =  $("#story-figure");
            
            var totalSlide = storyFigure.find(".story-figure-slide").length;
            var lastItemIndex = totalSlide -1;
            
            storyFigure.on("init", function (event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#story-figure .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#story-figure .slick-slide").eq(0).hasClass("slick-current");
                if(lastSlideActiveFigure){
                    $(".tswalu-story-section").addClass("fixed");
                }
                else{
                    $(".tswalu-story-section").removeClass("fixed");
                    storyFigure.on("mousewheel", function (event, slick, currentSlide, nextSlide){
                        event.preventDefault();
                        if (event.deltaX > 0 || event.deltaY < 0){
                            $(this).slick('slickNext');
                        } else if (event.deltaX < 0 || event.deltaY > 0){
                            $(this).slick('slickPrev');
                        }  
                    });                    
                }
                
            });
            
            storyFigure.slick({
                dots: false,
                vertical: false,
                asNavFor: '#story-slider-wrap',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1300,
                fade: true,
                arrows: false,
                infinite: false
            }).on("afterChange", function (event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#story-figure .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#story-figure .slick-slide").eq(0).hasClass("slick-current");
                if(lastSlideActiveFigure || firstSlideActiveFigure){
                    $(".tswalu-story-section").addClass("fixed");
                }
                else{
                    $(".tswalu-story-section").removeClass("fixed");
                    storyFigure.on("mousewheel", function (event, slick, currentSlide, nextSlide){
                        event.preventDefault();
                        if (event.deltaX > 0 || event.deltaY < 0){
                            $(this).slick('slickNext');
                        } else if (event.deltaX < 0 || event.deltaY > 0){
                            $(this).slick('slickPrev');
                        }  
                    });                    
                }
            });   
            
            
        }
            
		/* slider */
        if($("#slider-figure").length){
            var sliderFigure = $("#slider-figure");
            var sliderContent =  $("#slider-content");
            
            var totalSlideFigure = sliderFigure.find(".slider-figure-item").length;
            var lastFigureItemIndex = totalSlideFigure -1;

            //console.log(lastItemIndex);            
            sliderContent.slick({
                dots: true,
                //vertical: true,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                //centerPadding: 50,
                arrows: false,
                waitForAnimate: true,
	            verticalSwiping: true,
                asNavFor: '#slider-figure',
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            vertical: false,
                        }
                    }

                ]
            });
            
            
            sliderFigure.on("init", function (event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#slider-figure .slick-slide").eq(lastFigureItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#slider-figure .slick-slide").eq(0).hasClass("slick-current");
                if(lastSlideActiveFigure){
                    $(".slider-content-section").addClass("fixed");
                }
                else{
                    $(".slider-content-section").removeClass("fixed");
                    sliderFigure.on("mousewheel", function (event, slick, currentSlide, nextSlide){
                        event.preventDefault();
                        if (event.deltaX > 0 || event.deltaY < 0){
                            $(this).slick('slickNext');
                        } else if (event.deltaX < 0 || event.deltaY > 0){
                            $(this).slick('slickPrev');
                        }  
                    });                    
                }
                
            });


            sliderFigure.slick({
                dots: false,
                vertical: false,
                asNavFor: '#slider-content',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 1500,
                arrows: false,
                infinite: false
            }).on("afterChange", function (event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#slider-figure .slick-slide").eq(lastFigureItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#slider-figure .slick-slide").eq(0).hasClass("slick-current");
                if(lastSlideActiveFigure || firstSlideActiveFigure){
                    $(".slider-content-section").addClass("fixed");
                }
                else{
                    $(".slider-content-section").removeClass("fixed");
                    sliderFigure.on("mousewheel", function (event, slick, currentSlide, nextSlide){
                        event.preventDefault();
                        if (event.deltaX > 0 || event.deltaY < 0){
                            $(this).slick('slickNext');
                        } else if (event.deltaX < 0 || event.deltaY > 0){
                            $(this).slick('slickPrev');
                        }  
                    });                    
                }
            });


        }
        
		/* slider */

        
        $("#scroll-down").click(function(e){
            e.preventDefault()
            var id = $(this).attr('href');
            $("body,html").stop(true, true).animate({
                scrollTop: $(id).offset().top - 0
            }, 800)
        })
        
        if($(".animated-cursor").length){
            $(".animated-cursor").mouseenter(function(){
                $(".circle-cursor").css({
                    "opacity" : 1,
                    "visibility" : "visible"
                });
                $(".circle-scroll-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                });
            });
            $(".animated-cursor").mouseleave(function(){
                $(".circle-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                })
//                $(".body-cursor").css({
//                    "opacity" : 1,
//                    "visibility" : "visible"
//                });
            });
        }
        
        if($(".animated-scroll-cursor").length){
            $(".animated-scroll-cursor").mouseenter(function(){
                $(".circle-scroll-cursor").css({
                    "opacity" : 1,
                    "visibility" : "visible"
                });
            });
            $(".animated-scroll-cursor").mouseleave(function(){
                $(".circle-scroll-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                })
            });
        }
        
        var isDragging = false;
        $(".animated-cursor")
        .mousedown(function(){
            isDragging = false;
            $("body").addClass("draged");
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $("body").removeClass("draged");
            }
        });
        
        if($(".main-header-section").length){
            var headerTopPos = $(".main-header-section").offset().top;

            $(".scroll").click(function(e){
                e.preventDefault();
                $("body, html").stop(true, true).animate({
                    scrollTop: headerTopPos
                }, 500)
            });
        }
            
        if($(".after-hero-section .sticky-menu").length){
            $(".after-hero-section").addClass("reduced-padding");
        }
        
        
        /*if(navigator.userAgent.match(/Trident\/7\./)) {
          document.body.addEventListener("mousewheel", function() {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
          });
        }*/
        
        
        /*var x = document.getElementById("myVideo"); 

        function playVid() { 
          x.play(); 
        } 

        function pauseVid() { 
          x.pause(); 
        } */
        
	})// End ready function.
    
    
    
    $(window).on('load resize orientationchange', function() {
        
        var getHeight = $(".instagram-carousel-wrap .instagram-grid:last-child").outerHeight();
        if ($(window).width() > 767) {
            $(".instagram-feed-inner > .instagram-grid:last-child").height(getHeight);
        }
        
        $('#instagram-carousel-wrap').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        adaptiveHeight: true,
                        dots: true,
                        autoplay: false,
                    });
                }
            }
        });
    });
    
    $(window).on('scroll', function() {
        /*if($(".tswalu-story-section").length){
            var startPos = $(".tswalu-story-section").offset().top - 0;
            //console.log(startPos)
            if($(window).scrollTop() >= startPos ){
                $(".tswalu-story-section").addClass("fixed");
            }
        }*/
        
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop(); 

        //Slow scroll of social div and fade it out 
        $(".hero-content").css({ 
            //'margin-top' : - (windowScroll / 5) + "px", 
            'opacity' : 1 - (windowScroll / 550),
            transform: ("translate(-50%," + (-50 + (windowScroll / 5)) + "%)"),
        }); 
        
        $(".hero-bottom").css({ 
            //'margin-top' : - (windowScroll / 5) + "px", 
            'opacity' : 1 - (windowScroll / 350),
            //transform: ("translate(-50%," + (-50 + (windowScroll / 5)) + "%)"),
        }); 
        
        var footerTopPos = $(".main-footer-section").offset().top - 0;
        
        var winowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        
        if( windowScrollTop > footerTopPos - winowHeight){
            $("body").addClass("footer-appear");
        }else{
            $("body").removeClass("footer-appear");
        }
        
        /*if( ($(window).width() > 767) && ($(".our-field-guides-wrap").length)){
            
            var fieldGuidesTopPos = $(".our-field-guides-wrap").offset().top - 0;
            
            if( windowScrollTop > fieldGuidesTopPos - (winowHeight/3)){
                $("body").addClass("our-field-guides-appear");
            }else{
                $("body").removeClass("our-field-guides-appear");
            }

            if( windowScrollTop > fieldGuidesTopPos + $(".our-field-guides-wrap").outerHeight()){
                $("body").removeClass("our-field-guides-appear");
            }
        }*/
        
        if( windowScrollTop > winowHeight){
            $("body").addClass("appear");
        }else{
            $("body").removeClass("appear");
        }
    });
	

})(jQuery);
