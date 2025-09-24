var owl = $('.header-slider10');
owl.owlCarousel({	 
	loop:true,
	 autoplay:5000,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    margin:10,   
   
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})