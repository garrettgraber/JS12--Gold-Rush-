$(document).on('ready', function() {
  $('#main-map').click(function () {
  	var xValue = event.pageX;
  	var yValue = event.pageY;
  	var docHeight = $(document).height();
  	var docWidth = $(document).width();
  	var xValuePercent = (xValue/docWidth) * 100;
  	var yValuePercent = (yValue/docHeight) * 100;
  	console.log("pageX: " + event.pageX + ", pageY: " + event.pageY );
  	console.log("height: " + $(document).height() + " width: " + $(document).width());
  	if ((89.7 >= xValuePercent) && (xValuePercent >= 9.8) && (91.8 >= yValuePercent) && (yValuePercent >= 5.78) ) {
  		var JqueryNew = createMarker(xValuePercent, yValuePercent);
  		JqueryNew.appendTo($('#main'));
  		console.log('it worked');
  	}
  	else {
  		console.log('yValue bad');
  	}

  });

  $('#main-map').mousemove(function () {
  	console.log("pageX: " + event.pageX + ", pageY: " + event.pageY );
  });

  var createMarker = function(xVal, yVal) {
  	var imgSource = 'kitty.jpg';
  	var jQueryObjContainer = $('<div>').addClass('gold');
  	var JqueryObjImage = $('<img>').attr('src', imgSource);
  	JqueryObjImage.addClass('kitty-pic');
  	JqueryObjImage.appendTo(jQueryObjContainer);
  	jQueryObjContainer.css('left', xVal);
  	jQueryObjContainer.css('top', yVal);
  	return jQueryObjContainer;
  };

  window.foo = createMarker;
});