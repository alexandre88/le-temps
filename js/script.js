var idInterval;
var count = 0;

$(function() {
	//console.log("coucou JQuery");
	$("#btn-launch").on("click", function() {
	//	console.log('coucou lancer');
		idInterval = setInterval(function() {
			count = count % 12;   
			/*le 12 repersente la taille de notre tableau ou nmbre d'objets ( %= 12)
			Pour plus de précision:
			var sizeBoxContainer = $("#box-container").children("div").length; 
			count = count % sizeBoxContainer
			*/
			console.log(count);
	/*		var divVoulue = $("#box-container").children("div").eq(count);
			$(divVoulue).css("backgroundColor", "rgba(192,192,192,0.3)");
			*/
	/*
			var divVoulue = $("#box-container")
				.children("div")
				.eq(count)
				.css("backgroundColor", "red");
	*/
			var divVoulue = $("#box-container").children("div").eq(count);
			$(divVoulue).animate({opacity: 0.1, height: "+=20"});

			count++;
		}, 500);
	});

	$("#btn-stop").on("click", function() {
		clearInterval(idInterval);
	});
});

