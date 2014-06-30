$(document).on('ready', function() {

var noteTemp;

  var createMarker = function(xVal, yVal) {

  	var imgSource = 'thumbtack.png';
  	var jQueryObjContainer = $('<div>').addClass('gold');
  	var JqueryObjImage = $('<img>').attr('src', imgSource);
  	JqueryObjImage.addClass('kitty-pic');
  	JqueryObjImage.appendTo(jQueryObjContainer);
  	jQueryObjContainer.css('left', xVal + "%");
  	jQueryObjContainer.css('top', yVal + "%");
  	return jQueryObjContainer;
  };

   var noteCreater = function(note){
  	var jQueryObject = $("<div>").addClass('textInfo');
  	jQueryObject.text(note);
  	return jQueryObject;
  };

  var textInputFunc = function(xVal, yVal) {
  	console.log('textInputFunc is firing');
  	var jQueryTextInput = $('<textarea>');
  	jQueryTextInput.addClass('.textInput');
  	jQueryTextInput.css('left', xVal + "%");
  	jQueryTextInput.css('top', yVal + "%");
  	return jQueryTextInput;
  };

  $('#main-map').click(function () {
  	var xValue = event.pageX;
  	var yValue = event.pageY;
  	var docHeight = $('#main').height();
  	var docWidth = $(document).width();
  	var xValuePercent = (xValue/docWidth) * 100;
  	var yValuePercent = (yValue/docHeight) * 100;
  	console.log("pageX: " + event.pageX + ", pageY: " + event.pageY );
  	console.log(" width: " + docWidth + "height: " + docHeight);
  	if ((89.7 >= xValuePercent) && (xValuePercent >= 9.8) && (91.8 >= yValuePercent) && (yValuePercent >= 5.78) ) {
  		
  		xValuePercent = xValuePercent - 0.8;
  		yValuePercent = yValuePercent - 0.7;
  		var JqueryNew = createMarker(xValuePercent, yValuePercent);
  		var note = prompt('Please enter a note');
  		/*
  		var jQueryEnter = textInputFunc(xValuePercent, yValuePercent);
  		jQueryEnter.appendTo(JqueryNew);


  		var note = jQueryEnter.text();

  		*/  		

		var jQueryNote = noteCreater(note);
		jQueryNote.hide();
		jQueryNote.appendTo(JqueryNew);
		JqueryNew.appendTo($('#main'));
  		console.log('it worked');
  	}
  	else {
  		console.log('yValue bad');
  	}
  });

  $('#main-map').mousemove(function () {
  	var xValue = event.pageX;
  	var yValue = event.pageY;
  	var docHeight = $('#main').height();
  	var docWidth = $(document).width();
  	var xValuePercent = (xValue/docWidth) * 100;
  	var yValuePercent = (yValue/docHeight) * 100;
  	console.log("pageX: " + event.pageX + ", pageY: " + event.pageY );
  	console.log("x-percentage: " + xValuePercent + ", y-percentage: " + yValuePercent);
  });

  $(document).on('click', '.gold img', function() {
  	console.log('remove funtion is firing');
  	$(this).parent().remove();
  });

  $(document).on('mouseenter', '.gold', function(){
  	$(this).find('.textInfo').show();
  });

  $(document).on('mouseleave', '.gold', function(){
  	$(this).find('.textInfo').hide();
  });

  $(document).on('keypress', '.textInfo', function(){
  	var noteTemp = $(this).text();
  });
  
});