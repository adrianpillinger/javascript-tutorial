$(document).ready(function() {
    $.ajax({
        url: 'forms.json',
        success: function( data ) {
        	var questions = data['questions'];
            var answerId;
            
            // form title
            $('#questions').append('<h1>' + data['formName'] + '</h1>');
            
            // questions
            for (i=0;i<questions.length;i++)
            {
            	var thisQuestion = questions[i];
                $('#questions').append('<p/>' + thisQuestion["question"]);
                if (thisQuestion["answerType"] === "ENUM")
                {
                	answerId = "answer_"+i;
	                $('#questions').append("<input id='"+answerId+"'></div>");
                	$('#'+answerId).autocomplete({
						source: thisQuestion["values"]
					});
                }
            }
        },
        error: function(data) {
            alert('Error Status: ' + data["statusText"]);
        }
    });
});













//$(document).ready(function() {
//    var that = this;
//    var name = "My Application's Name";
//    var myApplication = {
//            getName : function() {return name},
//            setName : function(newName) {name = newName}
//            };
//    
//    $.myApplication = myApplication;
//});

//$(document).ready(function() {
//    alert($.myApplication.getName());
//    $.myApplication.setName("new name");
//    alert($.myApplication.getName());
//});

//var dougstips = {};
//var initialS46 = {
//	type : "A",
//	lastLetterSentDate : null
//};
//
//$(document).ready(function() {
//	// adding typeAlert method to all objects
//	Object.prototype.typeAlert = function() {
//		alert("Type " + this.type);
//	};
//	if (typeof Object.create !== 'function') {
//		Object.create = function (o) {
//			var F = function () {};
//			F.prototype = o;
//			return new F();
//		};
//	}

//	dougstips.applicationName = "Testing Doug's tips";
//	alert(dougstips.applicationName);
//	var anotherDougsTips = Object.create(dougstips);
//	alert(anotherDougsTips.applicationName);
//	var s46 = Object.create(initialS46);
//	alert(s46.type);
//	s46.type = "B";
//	alert(s46.type);
//	alert(initialS46.type);
//	s46.typeAlert();
	 
//});