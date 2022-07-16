const btn = document.getElementById("calculate");
const a = document.getElementById("a").value;
const  b = document.getElementById("b").value;
const  c = document.getElementById("c").value;
function calculate() {

    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     numeratorpositive = (-1*b) + descriminantValue;
     squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
     denominator = (2*a)
    console.log("Discriminant: ",descriminantValue);
    console.log("Discriminant Positive: ",absolutedescriminantValue);

    // for real roots
     if (descriminantValue>=0) {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue);
        positive_numerator = (-1*b) + absolutedescriminantValue;
        negative_numerator = (-1*b) - absolutedescriminantValue;
            positive_answer = positive_numerator/denominator
            negative_answer = negative_numerator/denominator
        console.log(positive_numerator)
        console.log(negative_numerator)
        console.log("The Roots are x =",positive_answer + " or X =",negative_answer)
     } else {
        first_Answer = (-1*b)/denominator;
        positive_second_term = (squareroot_absolutedescriminantValue/denominator)+"i";
        negative_second_term = ((-1*squareroot_absolutedescriminantValue)/denominator)+"i";
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue+"i");
        console.log(first_Answer)
        console.log(positive_second_term)
        console.log(negative_second_term)
        console.log("The Roots are x =",first_Answer +"+",positive_second_term , " or X =", first_Answer + negative_second_term)
     }
}

btn.addEventListener("click",calculate);
