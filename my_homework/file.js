 //1.Write a function that takes a string as an argument and returns the number of characters in the string.

// function ch_count(str)
// {
	
// 	let count = 0;
// 	while(str[count]!= undefined)
// 	{
// 		count++;
// 	}
// 	console.log(count);

// }

// let str = "Hello world!";
// ch_count(str);

//2.Create a function that converts a given string to uppercase.

// function upper(str)
// {
//    let result = "";
//    let count = 0;

//    while(str[count]!=undefined)
//    {

// 	let code = str.charCodeAt(count);
// 	if(code>=97 && code <= 112)
// 	{
// 		result+=String.fromCharCode(code -32);
// 	}
// 	else
// 	{
//        result += str[count];
// 	}
// 	  count++;
//    }
//    return result;
// }

// let str = "Hello";
// console.log(upper(str));

//3.Write a function that accepts two numbers and returns their sum.
// function sum(num1,num2)
// {
//    return num1 + num2;
// }

// let num1 = 15;
// let num2 = 56;
// console.log(sum(num1,num2));

//4.Reverse the string "hello" without using a built-in function.

// function reverse(str)
// {
// 	let result ="";
// 	let count = 0;
// 	while(str[count]!=undefined)
// 	{
// 		count++;
// 	}
// 	while(count - 1 >= 0)
// 	{
// 	result+=str[count-1];
// 	count--;
// 	}
// 	return result;

// }

// let str = "hello";
// console.log(reverse(str));

//5.Check if the string "Learning JavaScript" contains the substring "Java"

//6.


//  function index(numList)
//  {
//  for(let i = 0;i<numList.length;i++)
//  {
// 	if(numList[i] == 9)
// 		return i;
//  }
//  }
//   let numList = [3, 6, 9, 12];
//   console.log(index(numList));

//7.Compute the sum of all elements in the array let expenses = [50, 75, 100];

let expenses = [50, 75, 100];
let sum = 0;
for(let i = 0;i<expenses.length;i++)
{
	sum+=expenses[i];
}
console.log(sum);
