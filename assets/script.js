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

var tabNav = document.getElementById("tab-nav");
var tabLink = tabNav.getElementsByClassName("tab-link");

for (var i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();