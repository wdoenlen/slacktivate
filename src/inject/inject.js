
var logourl = chrome.extension.getURL("src/inject/slacktivate.png");

$("<style>").text(" .slacktivate { background-image: url(" + logourl + "); background-size: 49px 49px; background-position: 0 0; }" ).appendTo("head");


$('body').on('DOMNodeInserted', function (e) {
	console.log("happening");
	var element = e.target;
	if( $(element).hasClass('uiLayer')) {
		var counter = 0;
		var checkExist = setInterval(function() {
		   counter++;
		   if ( ($(element).find('._5ep3').length) || (counter>300) ) {
			  clearInterval(checkExist);
			  $(element).find("[aria-label='Love']").after("<span aria-pressed='false' aria-label='Slacktivate' class='_iuw' href='#' role='button' tabindex='-1' style='animation-duration: 0.7s;'><div class='_39m' data-reaction='2'><div class='_39n'><span class='_9zc _2p7b _2jry'><i class='_3j7m _2p78 _9-_' style='background-image: url(http://everythingiseverything.com/slacktivate.png); background-size: 49px 49px; background-position: 0 0;'></i></span><div class='_d6l'><div class='_4sm1'>Slacktivate</div></div></div></div></span>");
		   }
		}, 20); // check every 20ms
	}
});

jQuery(document).ready(function() {
	$("[aria-label='Love']").after("<span aria-pressed='false' aria-label='Slacktivate' class='_iuw' href='#' role='button' tabindex='-1' style='animation-duration: 0.7s;'><div class='_39m' data-reaction='2'><div class='_39n'><span class='_9zc _2p7b _2jry'><i class='_3j7m _2p78 _9-_' style='background-image: url(http://everythingiseverything.com/slacktivate.png); background-size: 49px 49px; background-position: 0 0;'></i></span><div class='_d6l'><div class='_4sm1'>Slacktivate</div></div></div></div></span>");
});