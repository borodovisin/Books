
var top_rated_output = '<p><strong>Posts</strong> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'pages\', \'0\' );">Pages</a> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'comments\', \'0\' );">Comments</a></p><p><strong><small>All</small></strong> | <a href="javascript:" title="Posts created today" onclick="PDRTJS_TOP.get_top( \'posts\', \'1\' );"><small>Today</small></a> | <a href="javascript:" title="Posts created this week" onclick="PDRTJS_TOP.get_top( \'posts\', \'7\' );"><small>This Week</small></a> | <a href="javascript:" title="Posts created this month" onclick="PDRTJS_TOP.get_top( \'posts\', \'31\' );"><small>This Month</small></a></p> <ul id="top_posts"><li><a href="http://alejandrok5.wordpress.com/2009/09/21/httpalejandrok5-wordpress-com20090921linksys-wrt54glcon-openwrt-como-repetidor-de-senal/">Linksys WRT54GL con DD-WRT como repetidor de señal</a><br/><strong> 5/5</strong> (1 vote)</li><li><a href="http://alejandrok5.wordpress.com/2011/06/27/arduino-with-django-and-python/">Arduino with Django and Python</a><br/><strong> 5/5</strong> (1 vote)</li></ul>';
var items = document.getElementsByClassName('pd_top_rated_holder_posts'), i, len;
if ( items.length > 0 ) {
	// loop through all elements 
	for (i = 0, len = items.length; i < len; i++) {
    	items[i].innerHTML = top_rated_output;
	}
} else {
	document.getElementById('pd_top_rated_holder').innerHTML = top_rated_output;
}