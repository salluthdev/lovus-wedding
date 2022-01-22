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

function openPage(pageName,elmnt,color)
{
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.backgroundColor = color;
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.color = "#fff";
}

document.getElementById("defaultOpen").click();