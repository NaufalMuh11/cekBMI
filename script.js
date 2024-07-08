function calculate() {
    // Get input values
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modalText");
    var span = document.getElementsByClassName("close")[0];
            // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Validate inputs
    if (!age || !height || !weight || isNaN(height) || isNaN(weight)) {
        modal.style.display = "block";
        modalText.innerHTML = `All fields are required!`;
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Healthy';
    } else if (25 <= bmi && bmi <= 29.9) {
        result = 'Overweight';
    } else if (30 <= bmi && bmi <= 34.9) {
        result = 'Obese';
    } else if (35 <= bmi) {
        result = 'Extremely obese';
    }

    let hasil=`You are <span class="text-blue-600 font-semibold">${result}</span>`;

    // Display the result
    document.getElementById('result').innerText = bmi;
    document.getElementById('comment').innerHTML = hasil;
}




