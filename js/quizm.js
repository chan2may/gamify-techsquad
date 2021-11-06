let rachel = 0,
    monica = 0,
    ross = 0,
    joey = 0,
    chandler = 0,
    phoebe = 0;
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;


const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const qno = document.querySelector('.Qno');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const option6 = document.querySelector('.option6');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');


//Function to generate question 
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1total;
    const option2Total = questions[index].answer2total;
    const option3Total = questions[index].answer3total;
    const option4Total = questions[index].answer4total;
    const option5Total = questions[index].answer5total;
    const option6Total = questions[index].answer6total;
    //Populate html elements 
    qno.innerHTML = `<b>Question ${index + 1}/5</b>`
    questionEl.innerHTML = `${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option6.setAttribute('data-total', `${option6Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
    option6.innerHTML = `${question.answer6}`
}


function loadNextQuestion() {

    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    let answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));



    //Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()


    score.reduce((total) => iterate(total));


    //Finally we increment the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';

        //RESULTS (character and outfit recommendation)
        if (rachel >= ross && rachel >= joey && rachel >= monica && rachel >= phoebe && rachel >= chandler) {
            result.innerHTML = `<!--Display character-->
        <div class="character-container">

        <img class="character" src="images/rachel.png" alt="character">  
        
        <h1 id="name" >YOU ARE RACHEL GREEN!</h1>
        <p id="desc">You stand up for yourself and <br> work tirelessly to get what you <br> want, both in your career and in <br>   your personal life.  </p>
        <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
        <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
        <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
        <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
   
    </div>
    <!--Display outfit-->
    <div id="outfit-container">
    </div>
    <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
    <div class="outfit">
        <a href="https://www.myntra.com/suits/hangup/hangup-men-grey-suit/6766471/buy"><img id="outfit" src="images/rachelmoutfit.jpg" alt="outfit"></a>
    </div>
    </div>

    <a href="https://www.myntra.com/suits/hangup/hangup-men-grey-suit/6766471/buy"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
    <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        } else if (ross >= rachel && ross >= joey && ross >= monica && ross >= phoebe && ross >= chandler) {
            result.innerHTML = `<!--Display character-->
        <div class="character-container">
    <img class="character" src="images/ross.png" alt="character">
        <h1 id="name" >YOU ARE ROSS GELLER!</h1>
        <p id="desc">You are shy and reserved. <br>  You thrive on accuracy, precision<br>and 
         being detail oriented last <br> but not the least pure hearted person.</p>
         <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
         <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
         <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
         <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
    </div>
    <!--Display outfit-->
    <div id="outfit-container">
    </div>
    <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
    <div class="outfit">
        <a href="https://www.myntra.com/shirts/hm/hm-men-black-solid-oversized-twill-shirt/15688960/buy"><img id="outfit" src="images/rossmoutfit.jpg" alt="outfit"></a>
    </div>
    </div>
    <a href="https://www.myntra.com/shirts/hm/hm-men-black-solid-oversized-twill-shirt/15688960/buy"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
    <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        } else if (chandler >= rachel && chandler >= joey && chandler >= monica && chandler >= phoebe && chandler >= ross) {
            result.innerHTML = ` <!--Display character-->
        <div class="character-container">
           <img class="character" src="images/chandler.png" alt="character">
           <h1 id="name">YOU ARE CHANDLER BING!</h1>
           <p id="desc">You are sarcastic,innovative and<br>open minded.You are spontaneous <br>and always pessimistic.</p>
               <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
               <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
               <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
               <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
       </div>
       <!--Display outfit-->
       <div id="outfit-container">
       </div>
       <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
       <div class="outfit">
           <a href="https://www.myntra.com/11966728"><img id="outfit" src="images/chandlermoutfit.jpg" alt="outfit"></a>
       </div>
       </div>
       <a href="https://www.myntra.com/11966728"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
       <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        } else if (monica >= rachel && monica >= joey && monica >= ross && monica >= phoebe && monica >= chandler) {
            result.innerHTML = `<!--Display character-->
        <div class="character-container">   
           <img class="character" src="images/monica.png" alt="character">
           <h1 id="name" >YOU ARE MONICA GELLER!</h1>
           <p id="desc">Your are a social butterfly.You<br>love taking care of your friends <br> and you are emotionally strong. </p>
           <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
           <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
           <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
           <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
           </div>
           <!--Display outfit-->
           <div id="outfit-container">
           </div>
           <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
           <div class="outfit">
               <a href="https://www.myntra.com/shirts/wrogn/wrogn-men-navy-blue--black-slim-fit-checked-casual-shirt/15601170/buy"><img id="outfit" src="images/monicamoutfit.jpg" alt="outfit"></a>
           </div>
           </div>
           <a href="https://www.myntra.com/shirts/wrogn/wrogn-men-navy-blue--black-slim-fit-checked-casual-shirt/15601170/buy"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
           <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        } else if (joey >= rachel && joey >= ross && joey >= monica && joey >= phoebe && joey >= chandler) {
            result.innerHTML = `<!--Display character-->
        <div class="character-container">
           <img class="character" src="images/joey.png" alt="character">
           <h1 id="name" >YOU ARE JOEY TRIBBIANI!</h1>
           <p id="desc">You are bold, confident, <br> extremely extroverted. you<br>are a kid at heart.</p>
           <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
           <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
           <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
           <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
       </div>
       <!--Display outfit-->
       <div id="outfit-container">
       </div>
       <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
       <div class="outfit">
           <a href="https://www.myntra.com/15198434"><img id="outfit" src="images/joeymoutfit.jpg" alt="outfit"></a>
       </div>
       </div>
       <a href="https://www.myntra.com/15198434"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
       <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        } else {
            result.innerHTML = `<!--Display character-->
        <div class="character-container">
           <img class="character" src="images/phoebe.png" alt="character">
           <h1 id="name" >YOU ARE  PHEOBE BUFFAY!</h1>
           <p id="desc">You are imaginative, original and<br> very artistic.
            You are friendly and <br>sympathetic. Apart from all this<br> you are still a kid at heart. </p>
            <img id="topleft" src="images/firework3.png" alt="sparkle" width="170px" height="170px">
            <img id="topright" src="images/firework2.png" alt="sparkle" width="170px" height="170px">
            <img id="bottomleft" src="images/firework1.png" alt="sparkle" width="100px" height="100px">
            <img id="bottomright" src="images/firework3.png" alt="sparkle" width="100px" height="100px">
       </div>
       <!--Display outfit-->
       <div id="outfit-container">
       </div>
       <h1 id="head">HERE'S AN OUTFIT <br> FOR YOU !</h1>
       <div class="outfit">
           <a href="https://www.myntra.com/12971052"><img id="outfit" src="images/phoebemoutfit.jpg" alt="outfit"></a>
       </div>
       </div>
       <a href="https://www.myntra.com/12971052"><button style="text-align: center; padding-right: 20px;" id="button"><b>Shop Now</b></button></a>
       <img class="icon" src="images/shop now icon.png" alt="icon">`;
            return;
        }

    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }

}

function iterate(answerScore) {
    if (answerScore == 10) rachel++;
    else if (answerScore == 20) phoebe++;
    else if (answerScore == 30) joey++;
    else if (answerScore == 40) chandler++;
    else if (answerScore == 50) ross++;
    else if (answerScore == 60) monica++;
    return;
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);