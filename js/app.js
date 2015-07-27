
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;

//mouseDown stored for later when mouse mouse goes outside canvas
var mouseDown = false;
var lineWeight = 5;

//When click event on control list item, deselect other element and select clicked element
// use .on method as this function is needed again when we add colours
$(".controls").on("click", "li", function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color = $(this).css("background-color");
});


//when colour sliders change
	//update colour displayed
function changeColor(){
	//pick up the values for r,g and b from the html input tag for the sliders
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
//when color sliders changed
$("input[type=range]").change(changeColor);

//when add colour is clicked 
$("#addNewColor").click(function(){
	//append to colour list
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//select added colour
	$newColor.click();
});

//mouse events for canvas
	//draw lines when mouse down and moving
	//Store the last event as e, last event reflects mouse position on canvas
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if(mouseDown) {
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.lineWidth = lineWeight;
	context.strokeStyle = color;
	context.stroke();
	lastEvent = e;
   }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
    $canvas.mouseup();
});











