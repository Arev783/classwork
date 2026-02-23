var celsiusValues = [15, 25, 10, 30];
celsiusValues.forEach(function(item) {
    if(item * 1.8 + 32 >= 70)
		console.log("warm");
	else
	console.log("cold");
});


