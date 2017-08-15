jQuery(document).ready(function($){
	if (!localStorage.pdnothanks) {
		setTimeout(function(){ 
			$('.cd-popup').addClass('is-visible');
		}, 1000);
		$('.cd-option').on('click', function(event){
			$('.cd-popup').removeClass('is-visible');
			localStorage.pdnothanks = "1";
		});
	}
});

function lc(d) 
{
	d = d.replace("http://", "");
	d = d.replace("https://", "");
	d = d.replace(".push.direct/", "");
	d = d.replace(".push.direct", "");
	var w = 480;
	var h = 320;
	var s = "height=" + h + ",innerHeight=" + h + ",width=" + w + ",innerWidth=" + w;  
	if (window.screen) {
		var ah = screen.availHeight - 30;
		var aw = screen.availWidth - 10;
		var xc = (aw - w) / 2;    var yc = (ah - h) / 2;
		s += ",left=" + xc + ",screenX=" + xc + ",top=" + yc + ",screenY=" + yc;  
	}
	return window.open('https://'+d+'.push.direct', '_blank', s + ",");
}