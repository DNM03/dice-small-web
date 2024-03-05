let ranNum1 = Math.random();
ranNum1 = ranNum1 * 6;
ranNum1 = Math.floor(ranNum1) + 1;

console.log(ranNum1);

switch (ranNum1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    break;
}


let ranNum2 = Math.random();
ranNum2 = ranNum2 * 6;
ranNum2 = Math.floor(ranNum2) + 1;

console.log(ranNum2);

switch (ranNum2) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    break;
}

if(ranNum1 > ranNum2) {
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if(ranNum2 > ranNum1) {
    document.querySelector("h1").innerHTML = "Player 2 win";
}
else {
    document.querySelector("h1").innerHTML = "Draw";

}