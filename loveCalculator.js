prompt("what is your name?");
prompt("what is his/her name?");
var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;
if (loveScore >= 50) {
  alert("Your Love Score Is " + loveScore +"% and you are compatible");
} else {
  alert("Your Love Score Is " + loveScore +"% and you are not compatible");
}
