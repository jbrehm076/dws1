/**
 * Created by jbrehm on 1/9/14.
 */
$(function(){
//Utility Items
	$( document).tooltip();

	$(".adBtn, .loginBtn, .searchBtn, .infoIcon, .filterBtn, .homeBtn, .myRackBtn, #register-submit")
		.button()
		.click(function(event){
		event.preventDefault();
	});

	$("#slider-range").slider({
		range:true,
		min: 0,
		max: 1000,
		values: [150,800],
		slide: function (event, ui){
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values",0) + " -$" + $("#slider-range").slider("values",1));

	$(".resultsAcc").accordion({
		collapsible: true,
		active: false
	});
//Utility Items END

//Button functions START
	$(".infoIcon").on("click", function(){
		window.location = 'details.html';
	});

	$(".searchBtn").on("click", function(){
		window.location = 'results.html';
	});

	$(".filterBtn, .homeBtn").on("click",function(){
		window.location = 'home.html';
	});

	$(".myRackBtn").on('click',function(){
		window.location = 'favorites.html';
	});

});