function setLayout(){
	adjustHeights();
}

function adjustHeights(){
	var height = $("#topBar").outerHeight();
	$("#contentBelowTopBar").css("padding-top", height + "px");
	$("#contentBelowTopBar").css("padding-top", height + "px");
	$(".overlay").height($("#jssor_1").height());
}

function setSliderWidths(){
	$("#jssor_1").width(window.innerWidth);
		
	$("#jssor_2").width(window.innerWidth);
	
	jssor_1_slider_init();
	jssor_2_slider_init();
}

$(document).ready(function(){
	setLayout();
	setSliderWidths();

})

$(window).resize(function(){
	setLayout();
})

// Jessor
jssor_1_slider_init = function() {
	var jssor_1_options = {
	  $AutoPlay: 1,
	  $SlideDuration: 800,
	  $SlideEasing: $Jease$.$OutQuint,
	  $ArrowNavigatorOptions: {
	    $Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
	    $Class: $JssorBulletNavigator$
	  }
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 3000;

	function ScaleSlider() {
	    var containerElement = jssor_1_slider.$Elmt.parentNode;
	    var containerWidth = containerElement.clientWidth;

	    if (containerWidth) {

	        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

	        jssor_1_slider.$ScaleWidth(expectedWidth);
	    }
	    else {
	        window.setTimeout(ScaleSlider, 30);
	    }
	}

	ScaleSlider();

	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
}

// Jessor
jssor_2_slider_init = function() {
	var jssor_2_options = {
	  $AutoPlay: 1,
	  $SlideDuration: 800,
	  $SlideEasing: $Jease$.$OutQuint,
	  $ArrowNavigatorOptions: {
	    $Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
	    $Class: $JssorBulletNavigator$
	  }
	};

	var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 3000;

	function ScaleSlider() {
	    var containerElement = jssor_2_slider.$Elmt.parentNode;
	    var containerWidth = containerElement.clientWidth;
	    if (containerWidth) {

	        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
	        console.log(expectedWidth);

	        jssor_2_slider.$ScaleWidth(expectedWidth);
	    }
	    else {
	        window.setTimeout(ScaleSlider, 30);
	    }
	}

	ScaleSlider();

	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
}