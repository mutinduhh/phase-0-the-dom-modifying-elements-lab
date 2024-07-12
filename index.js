// Write your code here!
var mainElement = document.querySelector('main');
if (mainElement) {mainElement.parentNode.removeChild(mainElement);} 
const newHeader=document.createElement('h1');
newHeader.id='victory';
newHeader.innerHTML='Jonathan Mutinda is the champion';