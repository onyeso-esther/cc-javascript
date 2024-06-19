function sayHello(name){
  console.log('Hello Tinubu');
 
}
// setTimeout(sayHello, 5000);

// setInterval(sayHello, 1000);

//display time
function displayTime(){
let time = new Date();
let timeHeading = document.getElementById('time');
timeHeading.innerHTML = time.toLocaleTimeString();

}
setInterval(displayTime, 1000);

