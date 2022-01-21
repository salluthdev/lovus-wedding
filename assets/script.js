var swiper = new Swiper(".mySwiper", {
	watchSlidesProgress: true,
	slidesPerView: 3,

	pagination: {
  	el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});