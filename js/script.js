
const lenis = new Lenis({
    // easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: 0.1
    // duration: 3
    // smoothWheel: true
    // infinite:true
    
})

lenis.on('scroll', (e) => {
})
lenis.on('scroll', ScrollTrigger.update)
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


/*============ Header Function Start ============*/
 
jQuery(document).ready(function(){
	jQuery("#header .menu-btn").click(function(e){
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("body").toggleClass("open-nav");
        if(jQuery('body').hasClass('open-nav')){
            console.log('Open');
            lenis.stop();
        }
        else{
            console.log('No-Open');
            lenis.start();

        }
        
	});	
	

    jQuery(window).scroll(function(){
	  var sticky = jQuery('.header'),
		  scroll = jQuery(window).scrollTop();
	
	  if (scroll >= 1) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
});

jQuery(document).ready(function(){
	jQuery(".lifestyle-menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".lifestyle-header-navbar").slideToggle(300);
	});
});
/*============ Header Function End ============*/

/*============ Slick-Slider Function Start ============*/
 

jQuery(document).ready(function(){
	 
	 
	$(function() {
		const allSpanElements = document.querySelectorAll('.home_making_power_inner h2 span');
		allSpanElements.forEach((spanElement) => {
		 

			let nextEle = null;
			setInterval(function() {
				$(spanElement).find('.logo_box_wrp.active').removeClass('active');
				if(nextEle == null || nextEle.length <= 0){
					$(spanElement).find('.logo_box_wrp').first().addClass("active");
					nextEle = $(spanElement).find('.logo_box_wrp').first().next();
				}else{
					nextEle.addClass("active");
					nextEle = nextEle.next();
				}
				
			}, 4000);

		});
	});
 

	jQuery('.testimonial_slider').slick({
		dots: false,
		slidesToShow: 1,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		nextArrow: '.right_arrow_testi a',
		prevArrow: '.left_arrow_testi a',
	});

	header_stiky();

    jQuery('.investor_slider').slick({
		dots: false,
		slidesToShow: 1,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		nextArrow: '.right_arrow_investor a',
		prevArrow: '.left_arrow_investor a',
	});
    

    jQuery('.vision_mission_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        draggable:false,
        slidesToScroll: 1,
        nextArrow: '.right_arrow_vision_mission a',
		prevArrow: '.left_arrow_vision_mission a',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    jQuery(".team_box .w3n_link_box .w3n_link").click(function(e){
        e.preventDefault();
		jQuery('body').toggleClass("open_team");
        e.stopPropagation();
	});
    
    jQuery(".video_thumb .video_play_btn").click(function(e){
        e.preventDefault();
		jQuery(this).parents('.video_box').find('.video_part').show();
		jQuery(this).parents('.video_box').find('.video_part video').trigger('play');
		jQuery(this).parents('.video_thumb').hide();
        e.stopPropagation();
	});
   jQuery(".mobile-drop-tabs").click(function(e){
        e.preventDefault();
		jQuery(this).parents('.solution_wrap_top ').toggleClass('solution_wrap_top_active');
        e.stopPropagation();
	});
   jQuery(".solution_wrap .nav-tabs li button").click(function(e){
        e.preventDefault();
		jQuery(this).parents('.solution_wrap_top ').find('.mobile-drop-tabs span').text(jQuery(this).text());
        jQuery(this).parents('.nav-item').siblings('.nav-item').removeClass('active-tab')
        jQuery(this).parents('.nav-item').addClass('active-tab');
        jQuery(this).parents('.solution_wrap_top').removeClass('solution_wrap_top_active');
        e.stopPropagation();
	});
    jQuery(".team_dtl_modale_closed a , .team_dtl_modales_backdrop").click(function(e){
        e.preventDefault();
		jQuery('body').removeClass("open_team");
        e.stopPropagation();
	});
    jQuery(document).keydown(function(e){
        if(e.keyCode == 27) {
            jQuery('body').removeClass("open_team");
        }
    });

    if(jQuery('.commissioned_slider').length > 0){
        jQuery('.commissioned_slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: '.right_arrow_commissioned a',
            prevArrow: '.left_arrow_commissioned a',
        });
    }
    if(jQuery('.home_banner_slider').length > 0 && jQuery('.home_banner_txt_slider').length > 0 ){

        var swiper2 = new Swiper(".home_banner_slider", {
            loop:true,
            speed: 1000,
            allowTouchMove: false,
            keyboard: {
                enabled: true,
              },
            navigation: {
            nextEl: ".banner-swiper-button-next",
            prevEl: ".banner-swiper-button-prev",
            },
        });
        var swiper3 = new Swiper(".home_banner_txt_slider", {
            effect: "fade",
            loop:true,
            allowTouchMove: false,
            speed: 1,
            fadeEffect: {
                crossFade: true,
            },
        });
        jQuery(' .banner_slider_arrow .banner-swiper-button-next').on('click', function(){
            swiper3.slideNext();
            let tl = gsap.timeline();
                tl.from(".swiper-slide .home_banner_txt .split-words", {
                    duration: 0.25,
                    y: "50%",
                    rotationX: -90,
                    opacity: 1,
                    ease: "power2.inOut",
                    stagger: {
                    amount: 0.5,
                    from: "0"
                  }
                });
                jQuery('body').addClass('active-slider-body');
                jQuery(this).addClass('disable');
                setTimeout(() => {
                    jQuery(this).removeClass('disable');
                }, 1100);
        });
        jQuery('.banner_slider_arrow .banner-swiper-button-prev').on('click', function(){
            swiper3.slidePrev();
            let tl = gsap.timeline();
                tl.from(".swiper-slide .home_banner_txt .split-words", {
                    duration: 0.25,
                    y: "50%",
                    rotationX: -90,
                    opacity: 1,
                    ease: "power2.inOut",
                    stagger: {
                    amount: 0.5,
                    from: "0"
                  }
                });
                jQuery('body').addClass('active-slider-body');
                jQuery(this).addClass('disable');
                setTimeout(() => {
                    jQuery(this).removeClass('disable');
                }, 1100);
        });
    }

});
jQuery(document).scroll(function() {
	header_stiky();
});

function header_stiky(){
	var height = jQuery(document).scrollTop(); 
	  if(height  > 100) {
		  jQuery("#header").addClass("sticky");
	  } else{
		  jQuery("#header").removeClass("sticky");
	  }
}
	  

var a = 0;
var b = 0;
jQuery(window).scroll(function () {
    var divlenth = jQuery(".about_count_wrp").length;
    //alert(divlenth);
    if (divlenth > 0) {
        var oTop = jQuery(".about_count_wrp").offset().top - window.innerHeight;
        if (a == 0 && jQuery(window).scrollTop() > oTop) {
            jQuery(".about_count_wrp .count_number span").each(function () {
                var size = jQuery(this).text().split(".")[1]
                    ? jQuery(this).text().split(".")[1].length
                    : 0;
                var num = jQuery(this).text().replace(",", "");
                //var num1 = parseFloat(jQuery(this).text().replace(',','').replace('.',''));
                //var newnum= jQuery(this).text(num);
                //alert(size);
                jQuery(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            //Counter: jQuery(this).text()
                            Counter: num,
                        },
                        {
                            duration: 3000,
                            easing: "swing",
                            step: function (now) {
                                var con = Math.ceil(now);
                                if (size == 1) {
                                    jQuery(this).text(
                                        parseFloat(now).toFixed(size)
                                    );
                                } else {
                                    jQuery(this).text(addCommas(con));
                                }
                                //
                            },
                        }
                    );
            });
            a = 1;
        }
    }
    var divlenth2 = jQuery(".counter_project_row").length;
    //alert(divlenth2);
    if (divlenth2 > 0) {
        var oTop2 = jQuery(".counter_project_row").offset().top - window.innerHeight;
        if (b == 0 && jQuery(window).scrollTop() > oTop2) {
            jQuery(".counter_project_row .count_number span").each(function () {
                var size2 = jQuery(this).text().split(".")[1]
                    ? jQuery(this).text().split(".")[1].length
                    : 0;
                var num2 = jQuery(this).text().replace(",", "");
                //var num21 = parseFloat(jQuery(this).text().replace(',','').replace('.',''));
                //var newnum2= jQuery(this).text(num2);
                //alert(size2);
                jQuery(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            //Counter: jQuery(this).text()
                            Counter: num2,
                        },
                        {
                            duration: 3000,
                            easing: "swing",
                            step: function (now) {
                                var con2 = Math.ceil(now);
                                if (size2 == 1) {
                                    jQuery(this).text(
                                        parseFloat(now).toFixed(size2)
                                    );
                                } else {
                                    jQuery(this).text(addCommas(con2));
                                }
                                //
                            },
                        }
                    );
            });
            b = 1;
        }
    }
});

function addCommas(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}
/*============ Slick-Slider Function End ============*/



 /***click to smooth scroll start ***/

 jQuery(".navigation_main .main-menu > li a").click(function(e){
    e.preventDefault();
    var section = jQuery(this).attr("href");    
    var url = jQuery(this).attr("href");
    
    console.log('section click = ' + section)
    if(isValidURL(section)){
        var format = /[#]+/;
        if(format.test(section)){
        var link = section.split("#");
        section = "#"+link[1];
        } else {
        window.location = section
        }
    
    }
    
    var link = section.split("#");
    section = "#"+link[1];
    var headerOuterHeight = jQuery('#header').outerHeight();
    if(jQuery(section).length > 0){
        var scrol = jQuery(section).offset().top - headerOuterHeight;
        jQuery('html, body').animate({ 
        scrollTop: scrol
        });
        }else{
        window.location = url
        }
    });
    
    function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
    };
    
    /*on page load start*/ 
    var pageURL = jQuery(location).attr("href");
    var target = window.location.hash,
    target = target.replace('#', '');
    // delete hash so the page won't scroll to it
    window.location.hash = "";
        jQuery(document).ready(function(){
        var href = pageURL.split('#');
        var section = "#"+href[1];
        console.log("section = " + section);
        var headerOuterHeight = jQuery('#header').outerHeight();
        if(jQuery(section).length > 0)
        {
            var scrol = jQuery(section).offset().top - headerOuterHeight;
            jQuery('html, body').animate({ 
            scrollTop: scrol
            });
            console.log(section);
            jQuery('.navigation_main .main-menu > li a').each(function(){
            var $this = jQuery(this).attr('href');
            var ele = jQuery(this); 
            if($this.indexOf(section) !== -1){
            ele.parent().addClass('active');
            }   
            });
        }
    });
    /*on page load end*/

jQuery(window).on('load' ,function() {
    jQuery('body').addClass('active-slider-action animation_banner')
        let windowWidth = window.outerWidth;

    jQuery(".is-animated h1 , .is-animated h2 , .is-animated h3 , .is-animated h4").each(function (index) {
    let myText = jQuery(this);
    let mySplitText;
    function createSplits() {
        mySplitText = new SplitText(myText, {
        type: "words",
        wordsClass: "split-words"
        });
    }
    createSplits();
    jQuery(window).resize(function () {
        if (window.outerWidth !== windowWidth) {
            mySplitText.revert();
                location.reload();
        }
        windowWidth = window.outerWidth;
    });
    });

    gsap.registerPlugin(ScrollTrigger);

    jQuery(".is-animated").each(function (index) {
        let triggerElement = jQuery(this);
        let targetElement = jQuery(this).find(".split-words");


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "restart none none none",
            }
        });
        tl.from(targetElement, {
            duration: 0.25,
            y: "50%",
            rotationX: -90,
            opacity: 1,
            ease: "power2.inOut",
            stagger: {
                amount: 0.5,
                from: "0"
            }
        });
    });
});



window.addEventListener('load', function() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            var svh = document.querySelector('.scrollBar').offsetHeight / (document.querySelectorAll('.desktop_pipeline_pro_inner_box .pipeline_pro_box').length + 1);
            document.querySelector('.scrollBar').style.setProperty('--svh', `${svh}px`);
    
            gsap.registerPlugin(ScrollTrigger);
    
            const headings = document.querySelectorAll('.desktop_pipeline_pro_inner_box .pipeline_pro_box');
            // const nums = document.querySelectorAll('.scroll-num');
            const head = document.querySelector('.desktop_pipeline_pro_inner_box');
    
            const numOfTransitions = headings.length
    
            const singleDuration = document.querySelector('.desktop_pipeline_pro_inner_box .pipeline_pro_box').offsetHeight;
            const totalDuration = singleDuration * numOfTransitions;
    
            gsap.to('.desktop_pipeline_pro_inner_box', {
            scrollTrigger: {
                pin: '.desktop_pipeline_pro_inner_box',
                start:"center center",
                end: '+=' + `${totalDuration}s`,
                pinSpacing: true,
            },
            });
            
            headings.forEach((heading, i) => {
            let tl = gsap.timeline({
                yPercent: 100,
                scrollTrigger: {
                trigger: heading,
                toggleActions: 'play reverse play reverse',
                toggleClass:  "title-selected",
                start: '+=' + `${singleDuration * i}s`,
                // start: "center center",
                // end: "center center",
                end: () => "+=" + document.querySelector(".desktop_pipeline_pro_inner_box .pipeline_pro_box").offsetHeight,
                // markers: true,
                onEnter: () => { 
                    if(i === 0 ) {
    
                    gsap.to([heading],{yPercent: 0 , opacity:1});
                    }
                    else{
                    gsap.fromTo([heading],{yPercent: 100 , opacity:0} , {yPercent: 0 , opacity:1});
    
                    }
                },
                onLeave: () => {
                    if(i === numOfTransitions - 1 ) return;
                    gsap.fromTo([heading],{yPercent: 0 , opacity:1} ,{yPercent: -100 , opacity:0});
                },
                onEnterBack: () => {
                    if(i ===  numOfTransitions - 1 ) return;
                    gsap.fromTo([heading],{yPercent: -100 , opacity:0},{yPercent: 0 , opacity:1});
                },
                onLeaveBack: () => {  
                    if(i === 0 ) return;
                    gsap.fromTo([heading],{yPercent: 0 , opacity:1},{yPercent: 100 , opacity:0});
                }
                }
            });
            });
    
            const circle = document.querySelector('#circle');
            // const section1 = document.querySelector('.section1');
    
    
            let scrollTweens = gsap.to(circle, {
            yPercent: 100 * (headings.length),
            ease: "none",
            scrollTrigger: {
                trigger: head,
                start: 'center center',
                end:  '+=' + totalDuration,
                scrub: true,
                // markers: true,
                
            }
            });
    // Scroll Animation End
    });