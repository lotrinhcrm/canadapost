function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity1(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("btabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("btablink1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// $(document).ready(function(){
//   $('.productslide1').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   arrows: false,
//   centerPadding: '60px',
//   // autoplay: true,
//   // autoplaySpeed: 2000,
// });
// });
		

function myFunction(x) {
    x.classList.toggle("change");
    $('.menu1').toggleClass('menu4');
    $('body').toggleClass('scrollhid');
    $('.search1').toggleClass('getmore2');
};

function myFunction2() {
    $('.searchpopup').toggleClass('menu5');
    $('body').toggleClass('scrollhid');
};

function myFunction3() {
    $('.searchpopup').toggleClass('menu5');
    $('body').removeClass('scrollhid');
};


$(document).ready(function() {
  
});


$(document).ready(function(){

$('.productslide1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: '60px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1910,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});



