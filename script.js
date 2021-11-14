window.addEventListener('DOMContentLoaded', function(){
	let b=document.querySelector(".buttonPlace");
	b.addEventListener("click", calc)
});

function calc(){
    var firstNumber, secondNumber, result;
  	firstNumber = document.querySelector('.firstNumber').value;
  	firstNumberCheck = parseInt(firstNumber);
  
  	secondNumber = document.querySelector('.secondNumber').value;
  	secondNumberCheck = parseInt(secondNumber);
  	
  	if(firstNumber!=firstNumberCheck || secondNumberCheck!=secondNumber || firstNumberCheck<0 || secondNumberCheck<0){
  		alert('ОшИбКа)))))');
  		document.querySelector('.resultPlace').innerHTML = "";
  	} else{
  		result = firstNumber*secondNumber;
  		document.querySelector('.resultPlace').innerHTML = result;
  	}
}