var random_num=Math.floor(Math.random()*6)+1;
var image="dice"+random_num+".png";
var final="images/"+image;
document.querySelectorAll("img")[0].setAttribute("src",final);


var random_num_2=Math.floor(Math.random()*6)+1;
var image_2="dice"+random_num_2+".png";
var final_2="images/"+image_2;
document.querySelectorAll("img")[1].setAttribute("src",final_2);


if(random_num>random_num_2)
{
  document.querySelector(".main .result").innerHTML="You win!";
}
else if(random_num===random_num_2)
{
  document.querySelector(".main .result").innerHTML="It's a tie!";
}
else
{
    document.querySelector(".main .result").innerHTML="You lose!";
}
