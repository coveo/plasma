$(function(){
	hljs.initHighlightingOnLoad();

	var ref = $('.styleguide-menu').find('.styleguide-menu-list').data('kss-ref');
	$('.styleguide-menu').find('a').eq(ref).addClass('selected');
});