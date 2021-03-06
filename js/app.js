
// var prevScrollpos = window.pageYOffset
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('navbar').style.top = '0'
//   } else {
//     document.getElementById('navbar').style.top = '-420px'
//   }
//   prevScrollpos = currentScrollPos
// }
// STICKY
$(window).scroll(function () {
  var scroll = $(window).scrollTop()

  if (scroll >= 50) {
    $('.sticky').addClass('nav-sticky')
  } else {
    $('.sticky').removeClass('nav-sticky')
  }
})

// SmoothLink
$('.smooth-link').on('click', function (event) {
  var $anchor = $(this)
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 0
  }, 1500, 'easeInOutExpo')
  event.preventDefault()
})

// scrollspy
$('#navbarCollapse').scrollspy({
  offset: 20
})

// owlCarousel
$(document).ready(function () {
  $('#owl-demo').owlCarousel({
    autoPlay: 3000, // Set AutoPlay to 3 seconds
    loop: true,
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 2]

  })
  $('#owl-tentor').owlCarousel({
    autoPlay: 3000, // Set AutoPlay to 3 seconds
    loop: true,
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 2]

  })
})
