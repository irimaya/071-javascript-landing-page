// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

  // Options
  const showAmPm = true;

// Show Time
function showTime() {
  // let today = new Date(2020, 06, 10, 10, 33, 30),
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
} //End function ShowTime()

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
} //End function addZero(n)

// Change Background and Greeting
function setBgGreet() {
  // let today = new Date(2020, 06, 10, 10, 33, 30),
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    // Show Morning Image
    document.body.style.backgroundImage = "url('../img/1-morning.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'white';
  } else if (hour < 18) {
    // Show Afternoon Image
    document.body.style.backgroundImage = "url('../img/2-afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Show Evening Image
    document.body.style.backgroundImage = "url('../img/3-night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
} //End function BgGreet()

// Get Name
function getName() {
  if(localStorage.getItem('name') === null){
    name.textContent = '[Enter Your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
} //End function getName

// Set Name
function setName(e) {
  if(e.type === 'keypress'){
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
      localStorage.setItem('name', e.target.innerText);
    }
} //End function setName()

// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null){
    focus.textContent = '[Write It Down]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
} //End function getName

// Set Focus
function setFocus(e) {
  if(e.type === 'keypress'){
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
      localStorage.setItem('focus', e.target.innerText);
    }
} //End function setFocus()

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();