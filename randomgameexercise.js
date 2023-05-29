function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      randNum = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }