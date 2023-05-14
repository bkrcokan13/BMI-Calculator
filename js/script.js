function calculateBMI() {

    // Get user body infos
    let userWeight = parseFloat(document.getElementById("user-weight").value);
    let userHeight = parseFloat(document.getElementById("user-height").value);

    //Debug
    // console.log("Height: "+ userHeight + " CM" + "-" + "Weight :"+userWeight +" KG" );

    let calculateResult = document.getElementById("calculate_result");

    let bmi = (userWeight / (userHeight / 100) ** 2).toFixed(2);


    if (bmi < 18.6) {
        calculateResult.innerHTML = "Result : " + bmi + " - Underweight ";
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
        calculateResult.innerHTML = "Result : " + bmi + " - Normal Weight";
    }
    else {
        calculateResult.innerHTML = "Result : " + bmi + " - Overweight ";
    }

    userHeight = "";
    userWeight = "";

}   