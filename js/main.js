let suites = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
let hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let diamonds = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let spades = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let clubs = [1,2,3,4,5,6,7,8,9,10,11,12,13]

var previousCard = 0;


function startCard()

/* this function is just used the once to come up with the first card as all the seperate suites arrays all have 
13 cards in them. this function will generate a random number between 0 and 3 becuase in the array suites there
are 4 suites, Also i generate a random number betwee 0 and 13 as there are 13 card. from both of these i use an 
if statement, so if the suite position value generates is 0 the suite is hearts, if 1 its diamonds, if 2 its 
spadesif 3 its clubs, then inside the if statements it will find out the value stored in the position generates 
for theprivate suites. The suites array value is passed onto the delete from array function as well as the 
seperate array value 
*/
{
    var whichSuitePosition= Math.floor(Math.random()*4)
    //alert(whichSuitePosition)

    var whichValuePosition = Math.floor(Math.random()*12)
    //alert(whichValuePosition)
    previousCard = whichValuePosition;

    let value;
    let suiteOfCard ;
    if (whichSuitePosition == 0)
    {
        value = hearts[whichValuePosition]
        suiteOfCard = 'hearts'
      
        alert(`The first card is the ${aceJackQueenKing(value)} of hearts`)
    }
    else if (whichSuitePosition == 1)
    {
        value = diamonds[whichValuePosition]
        suiteOfCard = 'diamonds'
        
        alert(`The first card is the ${aceJackQueenKing(value)} of diamonds`)
    }
    else if (whichSuitePosition == 2)
    {
        value = spades[whichValuePosition]
        suiteOfCard = 'spades'
        
        alert(`The first card is the ${aceJackQueenKing(value)} of spades`)
    }
    else if (whichSuitePosition == 3)
    {
        value = clubs[whichValuePosition]
        suiteOfCard = 'clubs'
       
        alert(`The first card is the ${aceJackQueenKing(value)} of clubs`)
    }

    previousCard = value
   //alert( value)    
   deletingFromArray(suiteOfCard, whichValuePosition,previousCard)
   //alert(`previousCard ${previousCard}`)
   
}



function deletingFromArray(suiteOfCard,whichValuePosition,previousCard)             
{
    //alert(`previousCard ${previousCard}`)
     /*at the min this is bringing in the generated suites for the first card and its value position
     and then using an if statement to check which suite it is and thne deleting that value from
     the array - as when the card is used the once it cant be used again untill the next game
     */
    if (suiteOfCard == "hearts")
    {
        //alert(hearts)
        hearts.splice(whichValuePosition,1)
        //alert(hearts)
    }
    else if (suiteOfCard == "diamonds")
    {
       // alert(diamonds)
        diamonds.splice(whichValuePosition,1)
        //alert(diamonds)
    }
    else if (suiteOfCard == "spades")
    {
        //alert(spades)
        spades.splice(whichValuePosition,1)
        //alert(spades)
    }
    else if (suiteOfCard == "clubs")
    {
        //alert(clubs)
        clubs.splice(whichValuePosition,1)
       // alert(clubs)
    }
    userAnswer(previousCard)

}


function userAnswer(previousCard)
{
    //alert(`previousCard ${previousCard}`)
    var usersAns =prompt("Please enter if you think the next card will be 'h' higher or 'l'lower?")
    
    if (usersAns == 'h' || usersAns == 'l')
    {
        //alert("YES")
        newCardsuite(usersAns,previousCard)
    }   
    else
    {
        alert("Incorrect answer, Please try again. Enter 'l' or 'h'")
        usersAns = prompt("'h' higher or 'l' lower")
        if (usersAns == 'h' || usersAns == 'l')
        {
            //alert("YES")
            newCardsuite(usersAns,previousCard)
        }
        else
        {
            alert("Game over")
            endgame()
        } 
    } 
}

function newCardsuite(usersAns,previousCard)
/* this function is called up once the first card has been deleted from the array. this again
generates a random number between 0 and 3 to select a random suite. this values then passed on 
find suite length functions, (if its looping round many times the amount of cards in a certain 
suite may have decresed/all gone, so if theres no cards left in that suite it cant be used and 
another suite must be generated.
 */
{
    //alert(`previousCard1 ${previousCard}`)
    var currentSuitePosition= Math.floor(Math.random()*4)
    //alert(`current suite position is ${currentSuitePosition }`)
    findSuiteLenght(currentSuitePosition,usersAns,previousCard)
}

function findSuiteLenght(currentSuitePosition,usersAns,previousCard)
/* this function passes in the position of the suite. it then checks what suite 
is stored at that position, it'll then find out the length of thats suites array
(as when a cards called it will be deleted from the array via its position) the 
length of the array is important at that will be used to generate the card value 
position( if theres only 8 postions itll generate a random number between 1-8 or 
0-7)) once this has been done for the suite choosen, the length of the array 
will then be passed onto the can the suite be used. 
  */
{
   // alert(`previousCard2 ${previousCard}`)
    var arrayLenght;
    if (currentSuitePosition ==0 )
    {
        arrayLenght =hearts.length
        // alert(`The length of the array is ${arrayLenght}`)
        canSuiteBeUsed(arrayLenght, currentSuitePosition,usersAns),previousCard
    }
    else if (currentSuitePosition ==1 )
    {
        arrayLenght = diamonds.length
        // alert(`The length of the array is ${arrayLenght}`)
        canSuiteBeUsed(arrayLenght, currentSuitePosition,usersAns,previousCard)
    }
    else if (currentSuitePosition ==2 )
    {
        arrayLenght = spades.length
        // alert(`The length of the array is ${arrayLenght}`)
        canSuiteBeUsed(arrayLenght, currentSuitePosition,usersAns,previousCard)
    }
    else if (currentSuitePosition ==3 )
    {
        arrayLenght = clubs.length
        // alert(`The length of the array is ${arrayLenght}`)
        canSuiteBeUsed(arrayLenght, currentSuitePosition,usersAns,previousCard)
    }
}


function canSuiteBeUsed(arrayLenght, currentSuitePosition,usersAns,previousCard)
/*  in this funcvtion the length of the array. it will then check if the length
id bigger than 0 the program will carry on, 
if the length is less than 0, itll take it back to the generate a number for the 
position of the suite untill a useable suite it generated.
*/
{
    //alert(`previousCard3 ${previousCard}`)
    if (arrayLenght>0)
        {
            canBeUsed = true
            //console.log("continue")
            // alert(` can be used = ${canBeUsed}`)
            generateCardValue(arrayLenght, currentSuitePosition,usersAns,previousCard)
        }
        else
        {
            canBeUsed = false
            // alert(` can be used = ${canBeUsed}`)
            //console.log("Stop")
            newCardsuite(usersAns,previousCard)
        }
}

function generateCardValue(arrayLenght, currentSuitePosition, usersAns,previousCard)
/* this function will need the array lenght passed in and the current suite 
possition to find out which suite is called up. this function will use the
arraylength variable and generate a random number between this valur +1 and 0
this will then create the new card therefore it is stored as current card. 
in the
*/
{
    //alert(`previousCard4 ${previousCard}`)
    var n = arrayLenght
    var currentCard;
    var suites;
    var currentValuePosition= Math.floor(Math.random()*n)
    // alert(`current value position is ${currentValuePosition }`)

    if (currentSuitePosition == 0)
    {
        currentCard = hearts[currentValuePosition]
        suites=("hearts")  
    }
    else if (currentSuitePosition == 1)
    {
        currentCard = diamonds[currentValuePosition]
        suites =("diamonds")
    }
    else if (currentSuitePosition == 2)
    {
        currentCard = spades[currentValuePosition]
        suites = ("spades")
    }
    else if (currentSuitePosition == 3)
    {
        currentCard = clubs[currentValuePosition]
        suites=("clubs") 
    }
    deleteFromTheArray2nd(currentValuePosition,currentSuitePosition, usersAns,suites,currentCard,previousCard)
}


function deleteFromTheArray2nd(currentValuePosition,currentSuitePosition, usersAns,suites,currentCard,previousCard)
{
    //alert(`previousCard5 ${previousCard}`)
    if (currentSuitePosition == 0)
    {
        //alert(hearts)
        hearts.splice(currentValuePosition,1)
        //alert(hearts)
    }
    else if (currentSuitePosition == 1)
    {
        //alert(diamonds)
        diamonds.splice(currentValuePosition,1)
        //alert(diamonds)
    }
    else if (currentSuitePosition == 2)
    {
        //alert(spades)
        spades.splice(currentValuePosition,1)
        //alert(spades)
    }
    else if (currentSuitePosition == 3)
    {
        //alert(clubs)
        clubs.splice(currentValuePosition,1)
        //alert(clubs)
    }
    compareCards(currentCard,previousCard,suites,usersAns,previousCard)
}

function compareCards(currentCard,previousCard,suites,usersAns,previousCard)
/* this function will check the if the new card is higher,lower or equal
 to the previous card, and set higher and equal, equal to true or false to 
 pass onto the nect function, it also sets previous card equal to the 
 current card so it is ready for the next loop
 */
{
    //alert(`new card ${currentCard}`)
    //alert(`old card ${previousCard}`)
    var higher = false
    var equal = false
    var lower = false
    var currentTemp;

    //alert(`currentCard6 ${currentCard}`)
    //alert(`previousCard6 ${previousCard}`)

    if(currentCard>previousCard)
    {
        higher = true;
        // previousCard = currentCard
       
        // alert(`old card is now ${previousCard}`)
    }
    else if (currentCard < previousCard)
    {
        lower = true
        
        
        // previousCard = currentCard
        // alert(`old card is now ${previousCard}`)
    }
    else if (currentCard == previousCard)
    {
        equal = true
       
        // previousCard = currentCard
        // alert(`old card is now ${previousCard}`)
    }
    
   //alert(higher)
   //alert(equal)
   // userAnswer(higher,equal)
   isUserCorrect(higher, equal,currentCard, suites, usersAns,previousCard,lower)
}

function isUserCorrect(higher, equal,currentCard, suites, usersAns,previousCard,lower)
{
    //alert(`previousCard7 ${previousCard}`)
    // alert(higher)
    // alert(equal)
    // alert(usersAns)
    //currentCard = previousCard

    value = currentCard
    if (equal == true)
    {
        alert(`The new card is the ${aceJackQueenKing(value)} of ${suites}.This is the same value Game over.`)
        endgame()
    }
    else if (higher == true)
    {
        if (usersAns == 'h')
        {
            alert(`The new card is the ${aceJackQueenKing(value)} of ${suites}.Well done this card is higher.`)
            //deletingArray(currentSuitePosition, currentValuePosition)
            //alert("We will go again")
            previousCard = currentCard
            //alert(`previousCard8 ${previousCard}`)
            userAnswer(previousCard)

        }
        else if (usersAns == 'l')
        {
            alert(`The new card is the ${aceJackQueenKing(value)} of ${suites}. Game Over this card is lower`)
            endgame()
        }
    }
    else if (lower = true)
    {
        if (usersAns == 'l')
        {
            alert(`The new card is the ${aceJackQueenKing(value)} of ${suites}. Well done this card is lower.`)
            //deletingArray(currentSuitePosition, currentValuePosition)
            previousCard = currentCard
            //alert(`previousCard9 ${previousCard}`)
            userAnswer(previousCard)
        }
        else if (usersAns == 'h')
        {
            alert(`The new card is the ${aceJackQueenKing(value)} of ${suites}. Game Over this card was lower`)
            endgame()
        }
    }
}

function aceJackQueenKing(value)
{var ajqk;

    if (value == 1)
    {
        ajqk = 'Ace'
    }
    else if (value == 2)
    {
        ajqk= 2
    }
    else if (value == 3)
    {
        ajqk= 3
    }
    else if (value == 4)
    {
        ajqk= 4
    }
    else if (value == 5)
    {
        ajqk= 6
    }
    else if (value == 7)
    {
        ajqk= 7
    }
    else if (value == 8)
    {
        ajqk= 8
    }
    else if (value == 9)
    {
        ajqk= 9
    }
    else if (value == 10)
    {
        ajqk= 10
    }
    else if (value == 11)
    {
        ajqk= 'Jack'
    }
    else if (value == 12)
    {
        ajqk= 'Queen'
    }
    else if (value == 13)
    {
        ajqk= 'King'
    }
    return ajqk
    
}



startCard()
//selectingSuites()
