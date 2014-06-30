$(document).on('ready', function() {
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

  $(document).on('click', '.gold', function() {
  	console.log('remove funtion is firing');
  	$(this).remove();
  });

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

  window.foo = createMarker;
});