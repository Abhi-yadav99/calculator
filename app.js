// Function to play the sound
function playSound() {
    var sound = document.getElementById('click-sound'); 
    sound.play(); 
}

let string = "";
let buttons = document.querySelectorAll('.button'); 

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // Play the sound whenever a button is clicked
        playSound();

        if (e.target.innerHTML == "=") {
            try {
                string = eval(string); // Evaluate the expression safely
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; // Handle errors
            }
        } else if (e.target.innerHTML == 'c') {
            string = ""; // Clear the input
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '%') {
            try {
                string = (eval(string) / 100).toString(); // Calculate percentage
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; // Handle errors
            }
        } else if (e.target.innerHTML == 'x²') {
            try {
                string = Math.pow(eval(string), 2).toString(); // Calculate square
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; // Handle errors
            }
        } else if (e.target.innerHTML == '√') {
            try {
                string = Math.sqrt(eval(string)).toString(); // Calculate square root
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; // Handle errors
            }
        } else {
            string = string + e.target.innerHTML; // Append the button's text to the string
            document.querySelector('input').value = string;
        }
    });
});
