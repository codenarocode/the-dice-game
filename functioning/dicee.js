
let random1= Math.floor(6*Math.random())+1;

document.querySelector(".img1").setAttribute("src","images/dice" +random1 +".png");


let random2=Math.floor(6*Math.random())+1;
document.querySelector(".img2").setAttribute("src","images/dice" +random2 +".png");


if(random1==random2){
  document.querySelector("h1").innerHTML="🎈Match Draw!";
}

else if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Alpha Wins!";
}
else{
  document.querySelector("h1").innerHTML="🚩Sigma Wins!";

}
