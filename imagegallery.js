function addImages(element)
{
	var i;
	for (i=0;i<20;i++)
	{ 
		$.ajax({url:"http://gemmaandmichael.pillingerphotography.com/thumbnails/thumb-" + (i + 1) + ".jpg",type:"HEAD",error:function(){alert('missing file');}});
		$(this).append("<img src='http://gemmaandmichael.pillingerphotography.com/thumbnails/thumb-" + (i + 1) + ".jpg' />");
	}
}

$(function() {
	$("#images").each(addImages);
});