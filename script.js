function bmiCalculator (weight, height) {
    var bmi = Math.round((weight/(height*height)), -1)
    
if (bmi > 24.9) {
    var interpretation = ("Your BMI is " + bmi + ", so you are overweight.")
}

else if (bmi < 24.9 && bmi >= 18.5) {
    var interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.")
}

else {
    var interpretation = ("Your BMI is " + bmi + ", so you are underweight.")
}
    return interpretation;
}