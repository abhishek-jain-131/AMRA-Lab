<<<<<<< HEAD
$(".projects-page").hide();
$(".publications-page").hide();
$(".alumni-page").hide();
$(".achievements-page").hide();
$(".contact-page").hide();
$("#journal-section").hide();

$(".logo").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".home-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#home-page").addClass("active");
  $("title").text("Home | AMRA Lab");
});

$("#home-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".home-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#home-page").addClass("active");
  $("title").text("Home | AMRA Lab");
});

$("#projects-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".projects-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#projects-page").addClass("active");
  $("title").text("Research Projects | AMRA Lab");
});

$("#publications-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".publications-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#publications-page").addClass("active");
  $("title").text("Publications | AMRA Lab");
});

$("#alumni-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".alumni-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#alumni-page").addClass("active");
  $("title").text("Alumni | AMRA Lab");
});

$("#achievements-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".achievements-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#achievements-page").addClass("active");
  $("title").text("Achievements | AMRA Lab");
});

$("#contact-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".contact-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#contact-page").addClass("active");
  $("title").text("Contact us | AMRA Lab");
});

$(document).ready(function() {
  $("#btnradio1").click(function (){
    var $button = $('#btnradio1');
    if ($button.attr('checked')) {
    } 
    else {
      $button.prop('checked', true);
      $("#btnradio2").removeAttr("checked");
      $("#journal-section").fadeOut();
      setTimeout(function () {
        $("#patent-section").fadeIn();
      }, 400);
    }
  });
});

$(document).ready(function() {
  $("#btnradio2").click(function (){
    var $button = $('#btnradio2');
    if ($button.attr('checked')) {
    } 
    else {
      $button.prop('checked', true);
      $("#btnradio1").removeAttr("checked");
      $("#patent-section").fadeOut();
      setTimeout(function () {
        $("#journal-section").fadeIn();
      }, 400);
    }
  });
});

$(document).ready(function() {
  $('#dark-mode-toggle').click(function() {
      var $button = $('html');
      if ($button.attr('data-bs-theme')) {
          $button.removeAttr('data-bs-theme');
          $(".logo").attr("src", "./images/logo/logo-2.jpg");
      } else {
          $button.attr('data-bs-theme', 'dark');
          $(".logo").attr("src", "./images/logo/logo-3.png");
      }
  });
});

// function initMap() {
//   var location = { lat: 22.5610503060596, lng: 88.41196044306992};
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 17,
//     center: location
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
=======
$(".projects-page").hide();
$(".publications-page").hide();
$(".alumni-page").hide();
$(".achievements-page").hide();
$(".contact-page").hide();
$("#journal-section").hide();

$(".logo").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".home-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#home-page").addClass("active");
  $("title").text("Home | AMRA Lab");
});

$("#home-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".home-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#home-page").addClass("active");
  $("title").text("Home | AMRA Lab");
});

$("#projects-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".projects-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#projects-page").addClass("active");
  $("title").text("Research Projects | AMRA Lab");
});

$("#publications-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".publications-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#publications-page").addClass("active");
  $("title").text("Publications | AMRA Lab");
});

$("#alumni-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".alumni-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#alumni-page").addClass("active");
  $("title").text("Alumni | AMRA Lab");
});

$("#achievements-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".achievements-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#achievements-page").addClass("active");
  $("title").text("Achievements | AMRA Lab");
});

$("#contact-page").click(function (){
  $("." + $(".active").attr("id")).fadeOut();
  setTimeout(function () {
    $(".contact-page").fadeIn();
  }, 400);
  $("#" + $(".active").attr("id")).removeClass("active");
  $("#contact-page").addClass("active");
  $("title").text("Contact us | AMRA Lab");
});

$(document).ready(function() {
  $("#btnradio1").click(function (){
    var $button = $('#btnradio1');
    if ($button.attr('checked')) {
    } 
    else {
      $button.prop('checked', true);
      $("#btnradio2").removeAttr("checked");
      $("#journal-section").fadeOut();
      setTimeout(function () {
        $("#patent-section").fadeIn();
      }, 400);
    }
  });
});

$(document).ready(function() {
  $("#btnradio2").click(function (){
    var $button = $('#btnradio2');
    if ($button.attr('checked')) {
    } 
    else {
      $button.prop('checked', true);
      $("#btnradio1").removeAttr("checked");
      $("#patent-section").fadeOut();
      setTimeout(function () {
        $("#journal-section").fadeIn();
      }, 400);
    }
  });
});

$(document).ready(function() {
  $('#dark-mode-toggle').click(function() {
      var $button = $('html');
      if ($button.attr('data-bs-theme')) {
          $button.removeAttr('data-bs-theme');
          $(".logo").attr("src", "./images/logo/logo-2.jpg");
      } else {
          $button.attr('data-bs-theme', 'dark');
          $(".logo").attr("src", "./images/logo/logo-3.png");
      }
  });
});

// function initMap() {
//   var location = { lat: 22.5610503060596, lng: 88.41196044306992};
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 17,
//     center: location
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
>>>>>>> 0770821e38ee6a3f8feb9b1dad307e423652dd2d
// }