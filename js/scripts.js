

document.addEventListener('DOMContentLoaded', function () {
  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
  });
  let burger = document.querySelector('.burger');
  let navbar = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
  });
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}