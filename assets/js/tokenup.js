//fill in below as you need
let startCount = 132;

const	stopCount = 0,	
		duration = 100000,//milliseconds
		countDownElement = document.getElementById('counter'),//your element to display the countDown
		//end fill in ...
		
		
		
		intervalTime = duration/Math.abs(startCount - stopCount);
		
		
let countDown = setInterval(

function(){

if(startCount === stopCount)clearInterval(countDown)

countDownElement.innerHTML = startCount;

if(startCount > stopCount)	{
startCount--
}else{
startCount++
}	


},
intervalTime
);