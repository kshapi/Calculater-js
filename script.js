const screen = document.querySelector('#screen h2');
const btns = document.querySelectorAll('.btn');
const toggle = document.querySelector('#toggle i');
const iphone = document.querySelector('.screen');


const screenValues = [];
let lastWord;

const calculater = (e) => {
  const text = e.target.innerText;
  lastWord = screenValues[screenValues.length -1];
  
  if (!isNaN(text)) {
    screen.innerText += text;
    screenValues.push(text);
    return;
  };
  
  if (screen.innerText.length>=12) {
    screen.innerText = '';
    return;
  };
  
  switch (text) {
    case '=':
      if (!isNaN(lastWord)) {
        screen.innerText = eval(screen.innerText);
        //Fixing screen Text
        if (screen.innerText.length > 10) {
          screen.innerText = Number(screen.innerText).toFixed(5);
        };
        
      };
      
      if (screen.innerText == 'undefined') {
        screen.innerText = '';
      };
      break;
  
    case 'AC':
      screen.innerText = '';
      break;
  
    case 'D':
      screen.innerText = screen.innerText.slice(0, -1);
      break;
  
  };
  
  
  //Check For Oprators
  /*Check if the last value of
    screen is a oprator then
    do not add another oprator
  */
  if (lastWord !== text && 
      text !== '=' &&
      text !== 'AC' &&
      text !== 'D' ) {
    if (text == 'x' ) {
      //For Multiplication
      if (lastWord == '-' ||
          lastWord == '+' ||
          lastWord == '%' ||
          lastWord == '/' ||
          lastWord == 'x' ||
          lastWord == '.') {
        screen.innerText = screen.innerText.slice(0, -1);
        screen.innerText += '*';
      }else {
        screen.innerText += '*';
      };
      
    }else {
      //Other Oprators
      if (lastWord == '-' ||
          lastWord == '+' ||
          lastWord == '/' ||
          lastWord == 'x' ||
          lastWord == '%' ||
          lastWord == '.') {
        screen.innerText = screen.innerText.slice(0, -1);
        screen.innerText += text;
      }else {
        screen.innerText += text;
      };
      
    };
    
  };
  screenValues.push(text);
  
};
btns.forEach(btn => {
  btn.addEventListener('click', calculater);
});



//Dark Mood Toggle
const darkMood = (e) => {
  iphone.classList.toggle('toggle');
  const className = e.target.classList[1];
  if (className == 'fa-sun') {
    toggle.style.transform =  'translate(23px)';
    toggle.classList.replace('fa-sun', 'fa-moon');
  }else {
    toggle.style.transform = null;
    toggle.classList.replace('fa-moon', 'fa-sun');
  };
  
};
toggle.addEventListener('click', darkMood);

//Kshapii