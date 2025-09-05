// let names=["Sam" , "Kajal" , "Soundarya", "Mahesh", "Keerthi", "Nithya menon", "Ntr","Prabhas"]
// index=Math.random()*names.length 
// index=Math.ceil(index)

// system_generated_name=names[index]

// let guess_name=document.getElementById("user_input")
// let chances=0

// function guessName(){
//     chances+=1
//     if(guess_name.value==system_generated_name){
//         if(chances==1){
//             alert("you got gold medal")
//         }else if(chances==2){
//             alert("you got silver medal")
//         }else if(chances==3){
//             alert("you got bronze medal")
//         }else{
//             alert(`Thank you for participating...${chances}`)
//         }
//     }else if(chances>0){
//         console.log("you answer is incorrect ")
//     }
// }

// Name list
const names = ["Sam", "Kajal", "Soundarya", "Mahesh", "Keerthi", "Nithya menon", "Ntr", "Prabhas"];

// Generate random name
let index = Math.floor(Math.random() * names.length);
let system_generated_name = names[index];

const guessInput = document.getElementById("user_input");
const resultText = document.getElementById("result");
let chances = 0;

// Guess function
function guessName() {
    const userGuess = guessInput.value.trim();
    chances++;

    if (!userGuess) {
        resultText.textContent = "⚠️ Please enter a name!";
        resultText.style.color = "orange";
        return;
    }

    if (userGuess.toLowerCase() === system_generated_name.toLowerCase()) {
        if (chances === 1) {
            resultText.textContent = "🥇 You got GOLD Medal! 🏆";
            resultText.style.color = "green";
        } else if (chances === 2) {
            resultText.textContent = "🥈 You got SILVER Medal! 🎉";
            resultText.style.color = "#5a5";
        } else if (chances === 3) {
            resultText.textContent = "🥉 You got BRONZE Medal! 🎊";
            resultText.style.color = "#a85";
        } else {
            resultText.textContent = `✅ Correct! You guessed it in ${chances} attempts.`;
            resultText.style.color = "blue";
        }
    } else {
        resultText.textContent = "❌ Wrong guess! Try again.";
        resultText.style.color = "red";
    }
}

// Reset function
function resetGame() {
    chances = 0;
    index = Math.floor(Math.random() * names.length);
    system_generated_name = names[index];
    guessInput.value = "";
    resultText.textContent = "🔄 Game reset! Try guessing again.";
    resultText.style.color = "#0078ff";
}
