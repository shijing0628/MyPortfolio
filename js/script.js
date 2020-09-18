// sticky nav bar to the top. Didn't use it for now
 $(document).ready(function(){
//     $(window).on('scroll', function(){
//         var scroll = $(window).scrollTop();
//         if(scroll>=90){
//             $('.sticky').addClass('stickyadd');
//         }else{
//             $('.sticky').removeClass('stickyadd');
//         }
//     })

var typed = new Typed(".element",{
    strings:["Brenda!", "a Full-Stack Web Developer!", "an UI/UX Designer!", "an artist of painting!"],
    smartBackspace:true,
    typeSpeed:100,
    loop:true,
    backSpeed:100,
    loopCount:Infinity,
    startDelay:1000
})
$(".owl-carousel").owlCarousel({
 loop:true,
 autoplay:true,
 autoplayTimeout:5000,
 items:1,
 dots:true,
});
})