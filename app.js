const btn = document.getElementById("calculate");

const  answerDiv = document.querySelector('.root');
function calculate() {
    let a = document.getElementById("a").value;
   let  b = document.getElementById("b").value;
    let  c = document.getElementById("c").value;
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     numeratorpositive = (-1*b) + descriminantValue;
     squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
     denominator = (2*a)

    // for real roots
     if (descriminantValue>=0) {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue);
        positive_numerator = (-1*b) + absolutedescriminantValue;
        negative_numerator = (-1*b) - absolutedescriminantValue;
            positive_answer = positive_numerator/denominator
            negative_answer = negative_numerator/denominator
            root1 = positive_numerator.toFixed(3);
            root2 = negative_answer.toFixed(3);
        answerDiv.textContent = "The Roots are x =" + root1 + " or X =" + root2;
     } else {
        first_Answer = (-1*b)/denominator;
        positive_second_term = (squareroot_absolutedescriminantValue/denominator)+"i";
        negative_second_term = ((-1*squareroot_absolutedescriminantValue)/denominator)+"i";
        root1 = first_Answer + " + " + positive_second_term;
        root2 = first_Answer  +  negative_second_term;
        answerDiv.textContent = "The Roots are x = " + root1 + " OR " + root2;
     }
}

btn.addEventListener("click",calculate);
