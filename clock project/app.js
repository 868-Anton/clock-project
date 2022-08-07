const tickTok = ()=>{
  // Here I make reference to the div 
  const clock = document.querySelector('.clock')

  //here I created the date object
  const today = new Date();

  //here I used some of the date format methods
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  // Here I created my HTML and referenced my variables
  const html = `

  <span>${h}</span> : <span>${m}</span> : <span>${s}</span>

  `
  clock.innerHTML= html;
}

// Here I set the function to run every second
setInterval(tickTok, 1000)