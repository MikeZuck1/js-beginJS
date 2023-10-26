// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const theFirstInputNumber = Number(prompt('Enter the first number :'));
if(Number.isNaN(theFirstInputNumber)) {
  console.error("Error input!");
  process.exit(1); 
}

const theSecondInputNumber = Number(prompt('Enter the second number :'));
if(Number.isNaN(theSecondInputNumber)) {
  console.error("Error input!");
  process.exit(1);
}

console.log("The sum is ", theFirstInputNumber - theSecondInputNumber);


// Vérifie si `theFirstInputNumber` et theSecondInputNumber sont fonctionnel .
/**
 * console.log({
  theFirstInputNumber,
  theSecondInputNumber
})
 */