 $(document).ready(function() {
 	 $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	  {
		tags: "peanut butter",
		tagmode: "any",
		format: "json"
	  },
	  function(data) {
		$.each(data.items, function(i,item){
		  $("<img/>").attr("src", item.media.m).appendTo("#images");
		  if ( i == 20 ) return false;
		});
	  });
 });
 
$(document).ready(function(){
   $("a").toggle(function(){
     $(".stuff").animate({ height: 'hide', opacity: 'hide' }, 'slow');
   },function(){
     $(".stuff").animate({ height: 'show', opacity: 'show' }, 'slow');
   });
 });

  
  //	 $.getJSON('ajax/test.json', function(data) {
// 	  var items = [];
// 	
// 	  $.each(data, function(key, val) {
// 		items.push('<li id="' + key + '">' + val + '</li>');
// 	  });
// 	
// 	  $('<ul/>', {
// 		'class': 'my-new-list',
// 		html: items.join('')
// 	  }).appendTo('body');
//	});
