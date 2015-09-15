var color_change = document.getElementById("color_change");
var color_box = document.getElementById("color_box");
var active = false;

// console.log (window)

color_change.addEventListener( "click", function( e ){

	if( active === false){
		active=true;
		color_box.className = "color blue";
	}

	else{
		active= false;
		color_box.className = "color"
	}


	e.preventDefault();
});


