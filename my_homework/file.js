// var celsiusValues = [15, 25, 10, 30];
// // celsiusValues.forEach(function())
// // {
// // 	if()
// // }
// for(var i = 0;i<4;i++)
// {
// 	if(celsiusValues[i] * 1.8 +32 > 70)
// 		celsiusValues[i]="warm";
// 	else celsiusValues[i] = "cold";
// }
// for(var i = 0;i<4;i++)
// {
// 	console.log(celsiusValues[i]);
// }

var celsiusValues = [15, 25, 10, 30];
celsiusValues.forEach(function(item) {
    if(item * 1.8 + 32 > 70)
		console.log("warm");
	else
	console.log("cold");
});


