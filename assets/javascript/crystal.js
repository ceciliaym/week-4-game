
//making the computer guess randomly
var minNumber = 19;
var maxNumber = 120;
let computerGuess = randomNumberFromRange(minNumber, maxNumber);
function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(computerGuess);
//making the crstyal variable
let crystalOne = Math.floor(Math.random() * 12 + 1);
let crystalTwo = Math.floor(Math.random() * 12 + 1);
let crystalThree = Math.floor(Math.random() * 12 + 1);
let crystalFour = Math.floor(Math.random() * 12 + 1);

//adding up all the crystals
var userTotal = 0;
var wins = 0;
var loses = 0;

//I made the random computer guess appear in the html
$(document).ready(function(){
    $('#computerPick').html('Try to match this number : ' + computerGuess);


    $('#pink').on('click', () => {
        userTotal = userTotal + crystalOne;
        $('#score').html('Your numbers: ' + userTotal);
        if (userTotal == computerGuess){
            $('#win').html('wins: ' + wins + 1);
            reset ();
          }
         else if ( userTotal > computerGuess){
            $('#lose').html('lost: ' + loses + 1);
            reset ();
          } 
     

    })
    $('#rainbow').on('click', () => {
        userTotal = userTotal + crystalTwo;
        $('#score').html('Your numbers: ' + userTotal);
        if (userTotal == computerGuess){
            $('#win').html('wins: ' + wins + 1);
            reset ();
          }
         else if ( userTotal > computerGuess){
            $('#lose').html('lost: ' + loses + 1);
            reset ();
          } 
        
       })
    $('#blue').on('click', () => {
        userTotal = userTotal + crystalThree;
        $('#score').html('Your numbers: ' + userTotal);
        if (userTotal == computerGuess){
            $('#win').html('wins: ' + wins + 1);
            reset ();
          }
       else if ( userTotal > computerGuess){
            $('#lose').html('lost: ' + loses + 1);
            reset ();
          } 
       }) 
    $('#purple').on('click', () => {
        userTotal = userTotal + crystalFour;
        $('#score').html('Your numbers: ' + userTotal);
        if (userTotal == computerGuess){
            $('#win').html('wins: ' + wins + 1);
            reset ();
          }
         else if ( userTotal > computerGuess){
            $('#lose').html('lost: ' + loses + 1);
            reset ();
          } 
       }) 

    function reset(){
        computerGuess = Math.floor(Math.random()*101+19);
        $('#computerPick').html('Try to match this number : ' + computerGuess);
        crystalOne= Math.floor(Math.random()*10+1);
        crystalTwo= Math.floor(Math.random()*10+1);
        crystalThree= Math.floor(Math.random()*10+1);
        crystalFour= Math.floor(Math.random()*10+1);
        userTotal= 0;
      

        
        $('#score').html('Your numbers: ' + userTotal);
    

        } 
       

       

       
})













