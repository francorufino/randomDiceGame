let randomN1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomN1 + ".png";
let randomImgSource1 = "images/" + randomDiceImage1;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource1);




// 2nd dice: (deixando o codigo mais curto):
let randomN2 = Math.floor(Math.random() * 6) + 1;
let randomImgSource2 = "images/dice" + randomN2 + ".png";
document.querySelectorAll('img')[1].setAttribute("src", randomImgSource2);


// if player 1 wins:
if (randomN1 > randomN2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 wins!";
} else if (randomN2 > randomN1) {
    document.querySelector('h1').innerHTML = "Player 2 wins!🚩";
} else {
    docoument.querySelector('h1').innerHTML = "It's a draw!";
}