$('.js-scroll-to').click(function(e) {

	target = $($(this).attr('href'));

	if (target.offset()) {
		$('html, body').animate({scrollTop: target.offset().top + 'px'}, 600);
	}

	e.preventDefault();
});



$('.js-next').click(function(e) {
	console.log("click down");
  var selected = $(".section.js-current-panel");
  var anchors = $(".section");

  var pos = anchors.index(selected);
  var next = anchors.get(pos+1);
  var prev = anchors.get(pos-1);

  target = $(next);

  $(selected).removeClass("js-current-panel");
  $(next).addClass("js-current-panel");

	if (target.offset()) {
		$('html, body').animate({scrollTop: target.offset().top + 'px'}, 600);
	}


	e.preventDefault();
});




//toggle help
$('#mobile-menu-toggler, #main-menu-toggler').on('click',function(){
	// console.log("toggle that menu!")
	// TweenMax.to($('#helpbar'),.2,{autoAlpha:1})
  $("#helpbar").css({"visibility":"visible", "opacity":1});
});


$('#close-help').on('click',function(){
	console.log("toggle that menu!")
	// TweenMax.to($('#helpbar'),.2,{autoAlpha:1})
  $("#helpbar").css({"visibility":"hidden", "opacity":0});
});


var twitter = function(e){
  console.log("twittttter");
  e.preventDefault()
  social_url = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURI(window.location + " Orang-Utans in die Freiheit! ") + "%23born2bewild";
  window.open(social_url, "_blank").focus();
}

var facebook = function(e){
  e.preventDefault()
  social_url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location);
  window.open(social_url, "_blank").focus();
}
// document.getElementsByClassName('twitter-share')[0].onclick = twitter
// document.getElementsByClassName('facebook-share')[0].onclick = facebook
