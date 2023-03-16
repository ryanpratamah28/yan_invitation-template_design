$(document).ready(function () {
	$(".slider-img").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 280,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

$(document).ready(function () {
	$(".card-ucapan").slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
      {
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 280,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

document.getElementById("landing").style.display = "none";
document.getElementById("gallery").style.display = "none";
document.getElementById("story").style.display = "none";
document.getElementById("guest-book").style.display = "none";
document.getElementById("gift").style.display = "none";
body.style.overflow = "hidden";

function front() {
	document.getElementById("front").style.display = "none";
	document.getElementById("landing").style.display = "";
  document.getElementById("gallery").style.display = "";
  document.getElementById("story").style.display = "";
  document.getElementById("guest-book").style.display = "";
  document.getElementById("gift").style.display = "";
	body.style.overflow = "";
}